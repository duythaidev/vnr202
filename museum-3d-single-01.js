
// =============================================================================
// FX CORE · tiện ích dùng chung cho Bảo tàng & Bảng ghim
//  - Bật quản lý màu chuẩn (sRGB -> linear) để ánh sáng PBR đúng
//  - RNG có seed (bố cục ngẫu nhiên nhưng ổn định giữa các lần mở)
//  - Pipeline hậu kỳ: Bloom -> Motion blur -> ACES tone map + vignette + grain
// =============================================================================
THREE.ColorManagement.legacyMode = false;

const FX = (() => {
    // ---------- RNG có seed (mulberry32) ----------
    function rng(seed) {
        let a = (seed >>> 0) || 1;
        const next = () => {
            a |= 0; a = (a + 0x6D2B79F5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
        next.range = (lo, hi) => lo + next() * (hi - lo);
        next.pick = (arr) => arr[Math.floor(next() * arr.length)];
        next.int = (lo, hi) => Math.floor(lo + next() * (hi - lo + 1));
        return next;
    }

    function hashString(s) {
        let h = 2166136261;
        for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
        return h >>> 0;
    }

    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
    const clamp01 = (t) => Math.max(0, Math.min(1, t));

    // Texture từ canvas, khai báo đúng không gian màu sRGB
    function canvasTexture(canvas, { repeat, aniso = 8, srgb = true } = {}) {
        const tex = new THREE.CanvasTexture(canvas);
        if (srgb) tex.encoding = THREE.sRGBEncoding;
        tex.anisotropy = aniso;
        if (repeat) {
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(repeat[0], repeat[1]);
        }
        return tex;
    }

    // ---------- Shader: Motion blur theo hướng chuyển động camera ----------
    const MotionBlurShader = {
        uniforms: {
            tDiffuse: { value: null },
            velocity: { value: new THREE.Vector2() },
            zoom: { value: 0 }
        },
        vertexShader: /* glsl */`
            varying vec2 vUv;
            void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */`
            uniform sampler2D tDiffuse;
            uniform vec2 velocity;
            uniform float zoom;
            varying vec2 vUv;
            void main() {
                vec2 dir = velocity + (vUv - 0.5) * zoom;
                vec4 acc = vec4(0.0);
                float tot = 0.0;
                for (int i = 0; i < 28; i++) {
                    float t = float(i) / 27.0 - 0.5;
                    float w = 1.0 - abs(t) * 1.4;
                    acc += texture2D(tDiffuse, vUv + dir * t) * w;
                    tot += w;
                }
                gl_FragColor = acc / tot;
            }`
    };

    // ---------- Shader: grade cuối (ACES Filmic + sRGB + vignette + grain) ----------
    const FinalGradeShader = {
        uniforms: {
            tDiffuse: { value: null },
            exposure: { value: 1.0 },
            saturation: { value: 1.0 },
            tint: { value: new THREE.Vector3(1, 1, 1) },
            vignette: { value: 0.35 },
            vignetteSoft: { value: 0.75 },
            grain: { value: 0.025 },
            time: { value: 0 },
            fade: { value: 0 }
        },
        vertexShader: MotionBlurShader.vertexShader,
        fragmentShader: /* glsl */`
            uniform sampler2D tDiffuse;
            uniform float exposure, saturation, vignette, vignetteSoft, grain, time, fade;
            uniform vec3 tint;
            varying vec2 vUv;
            vec3 RRTAndODTFit(vec3 v) {
                vec3 a = v * (v + 0.0245786) - 0.000090537;
                vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
                return a / b;
            }
            vec3 aces(vec3 c) {
                const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
                const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
                c = IN * (c / 0.6);
                c = RRTAndODTFit(c);
                return clamp(OUT * c, 0.0, 1.0);
            }
            vec3 toSRGB(vec3 c) {
                return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
            }
            float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
            void main() {
                vec3 c = texture2D(tDiffuse, vUv).rgb * tint * exposure;
                c = aces(c);
                float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
                c = mix(vec3(l), c, saturation);
                vec2 d = (vUv - 0.5) * vec2(1.0, 0.82);
                float v = smoothstep(vignetteSoft, 0.12, length(d) * 1.35);
                c *= mix(1.0 - vignette, 1.0, v);
                c = toSRGB(c);
                c += (hash(vUv * 917.0 + fract(time) * 31.0) - 0.5) * grain;
                c *= 1.0 - fade;
                gl_FragColor = vec4(c, 1.0);
            }`
    };

    // ---------- Dựng pipeline hậu kỳ ----------
    function createComposer(renderer, scene, camera, opts = {}) {
        const size = renderer.getSize(new THREE.Vector2());
        const pr = renderer.getPixelRatio();
        const rt = new THREE.WebGLRenderTarget(size.x * pr, size.y * pr, {
            type: THREE.HalfFloatType,
            samples: opts.samples ?? 4
        });
        const composer = new THREE.EffectComposer(renderer, rt);
        composer.addPass(new THREE.RenderPass(scene, camera));

        let bloom = null;
        if (opts.bloom) {
            bloom = new THREE.UnrealBloomPass(new THREE.Vector2(size.x, size.y),
                opts.bloom.strength, opts.bloom.radius, opts.bloom.threshold);
            composer.addPass(bloom);
        }
        let motion = null;
        if (opts.motionBlur) {
            motion = new THREE.ShaderPass(MotionBlurShader);
            motion.enabled = false;
            composer.addPass(motion);
        }
        const grade = new THREE.ShaderPass(FinalGradeShader);
        Object.entries(opts.grade || {}).forEach(([k, v]) => {
            if (grade.uniforms[k]) {
                if (Array.isArray(v)) grade.uniforms[k].value.set(...v); else grade.uniforms[k].value = v;
            }
        });
        composer.addPass(grade);

        function setSize(w, h) {
            composer.setPixelRatio(renderer.getPixelRatio());
            composer.setSize(w, h);
            if (bloom) bloom.setSize(w, h);
        }
        return { composer, bloom, motion, grade, setSize };
    }

    return {
        rng, hashString, canvasTexture, createComposer,
        easeInOutCubic, easeOutCubic, easeInOutSine, clamp01,
        isLowPower: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 760
    };
})();

