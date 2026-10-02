class WeatherIcons {
    static getIcon(weatherCode, isDay = true) {
        if (weatherCode >= 200 && weatherCode < 300) {
            return this.thunderstorm();
        }
        if (weatherCode >= 300 && weatherCode < 400) {
            return this.drizzle(isDay);
        }
        if (weatherCode >= 500 && weatherCode < 600) {
            if (weatherCode >= 502) return this.heavyRain();
            return this.rain(isDay);
        }
        if (weatherCode >= 600 && weatherCode < 700) {
            return this.snow();
        }
        if (weatherCode >= 700 && weatherCode < 800) {
            return this.mist();
        }
        if (weatherCode === 800) {
            return isDay ? this.clearDay() : this.clearNight();
        }
        if (weatherCode === 801 || weatherCode === 802) {
            return isDay ? this.partlyCloudyDay() : this.partlyCloudyNight();
        }
        return this.cloudy();
    }

    static clearDay() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <defs>
                <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fffbeb" />
                    <stop offset="45%" stop-color="#fde047" />
                    <stop offset="100%" stop-color="#f59e0b" />
                </radialGradient>
                <filter id="sunGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <circle cx="32" cy="32" r="14" fill="url(#sunGrad)" filter="url(#sunGlow)" />
            <g stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" opacity="0.85">
                <line x1="32" y1="8" x2="32" y2="13" />
                <line x1="32" y1="51" x2="32" y2="56" />
                <line x1="8" y1="32" x2="13" y2="32" />
                <line x1="51" y1="32" x2="56" y2="32" />
                <line x1="15" y1="15" x2="19" y2="19" />
                <line x1="45" y1="45" x2="49" y2="49" />
                <line x1="15" y1="49" x2="19" y2="45" />
                <line x1="45" y1="19" x2="49" y2="15" />
            </g>
        </svg>`;
    }

    static clearNight() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <defs>
                <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="60%" stop-color="#e0e7ff" />
                    <stop offset="100%" stop-color="#93c5fd" />
                </linearGradient>
                <filter id="moonGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <path d="M38 14 A 18 18 0 1 0 50 38 A 15 15 0 0 1 38 14 Z" fill="url(#moonGrad)" filter="url(#moonGlow)" />
            <circle cx="48" cy="20" r="1.5" fill="#ffffff" opacity="0.9" />
            <circle cx="22" cy="18" r="1.2" fill="#ffffff" opacity="0.7" />
            <circle cx="46" cy="48" r="1.2" fill="#ffffff" opacity="0.75" />
        </svg>`;
    }

    static partlyCloudyDay() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <defs>
                <radialGradient id="sunHalf" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fffbeb" />
                    <stop offset="100%" stop-color="#f59e0b" />
                </radialGradient>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="100%" stop-color="#cbd5e1" />
                </linearGradient>
            </defs>
            <circle cx="24" cy="22" r="11" fill="url(#sunHalf)" />
            <path d="M22 46 h24 a10 10 0 0 0 0-20 a14 14 0 0 0-27-2 a9 9 0 0 0-7 9 a9 9 0 0 0 10 13 z" fill="url(#cloudGrad)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))" />
        </svg>`;
    }

    static partlyCloudyNight() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <defs>
                <linearGradient id="cloudGradNight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#e2e8f0" />
                    <stop offset="100%" stop-color="#94a3b8" />
                </linearGradient>
            </defs>
            <path d="M28 14 A 12 12 0 1 0 38 30 A 10 10 0 0 1 28 14 Z" fill="#e0e7ff" />
            <path d="M20 46 h26 a10 10 0 0 0 0-20 a14 14 0 0 0-27-2 a9 9 0 0 0-7 9 a9 9 0 0 0 8 13 z" fill="url(#cloudGradNight)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))" />
        </svg>`;
    }

    static cloudy() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <defs>
                <linearGradient id="cloudBack" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#cbd5e1" />
                    <stop offset="100%" stop-color="#64748b" />
                </linearGradient>
                <linearGradient id="cloudFront" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="100%" stop-color="#94a3b8" />
                </linearGradient>
            </defs>
            <path d="M30 36 h22 a8 8 0 0 0 0-16 a12 12 0 0 0-23-1 a8 8 0 0 0-6 8 a8 8 0 0 0 7 9 z" fill="url(#cloudBack)" opacity="0.75" />
            <path d="M16 48 h28 a10 10 0 0 0 0-20 a14 14 0 0 0-27-2 a9 9 0 0 0-7 9 a9 9 0 0 0 6 13 z" fill="url(#cloudFront)" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.3))" />
        </svg>`;
    }

    static rain(isDay = true) {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <defs>
                <linearGradient id="rainDrop" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#38bdf8" />
                    <stop offset="100%" stop-color="#0284c7" />
                </linearGradient>
            </defs>
            <path d="M18 38 h28 a9 9 0 0 0 0-18 a13 13 0 0 0-25-2 a8 8 0 0 0-6 8 a8 8 0 0 0 3 12 z" fill="#e2e8f0" filter="drop-shadow(0 3px 6px rgba(0,0,0,0.25))" />
            <line x1="22" y1="44" x2="19" y2="54" stroke="url(#rainDrop)" stroke-width="2.5" stroke-linecap="round" />
            <line x1="32" y1="44" x2="29" y2="54" stroke="url(#rainDrop)" stroke-width="2.5" stroke-linecap="round" />
            <line x1="42" y1="44" x2="39" y2="54" stroke="url(#rainDrop)" stroke-width="2.5" stroke-linecap="round" />
        </svg>`;
    }

    static heavyRain() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <path d="M16 34 h32 a10 10 0 0 0 0-20 a15 15 0 0 0-29-2 a9 9 0 0 0-7 9 a9 9 0 0 0 4 13 z" fill="#94a3b8" />
            <g stroke="#38bdf8" stroke-width="2.8" stroke-linecap="round">
                <line x1="20" y1="40" x2="15" y2="54" />
                <line x1="30" y1="40" x2="25" y2="54" />
                <line x1="40" y1="40" x2="35" y2="54" />
                <line x1="26" y1="46" x2="21" y2="59" />
                <line x1="36" y1="46" x2="31" y2="59" />
            </g>
        </svg>`;
    }

    static drizzle() {
        return this.rain();
    }

    static thunderstorm() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <defs>
                <linearGradient id="stormCloud" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#475569" />
                    <stop offset="100%" stop-color="#1e293b" />
                </linearGradient>
            </defs>
            <path d="M16 34 h32 a10 10 0 0 0 0-20 a15 15 0 0 0-29-2 a9 9 0 0 0-7 9 a9 9 0 0 0 4 13 z" fill="url(#stormCloud)" />
            <polygon points="32,34 26,45 32,45 28,58 40,43 33,43" fill="#facc15" filter="drop-shadow(0 0 6px #facc15)" />
        </svg>`;
    }

    static snow() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <path d="M18 36 h28 a9 9 0 0 0 0-18 a13 13 0 0 0-25-2 a8 8 0 0 0-6 8 a8 8 0 0 0 3 12 z" fill="#e2e8f0" />
            <g fill="#ffffff" stroke="#93c5fd" stroke-width="1.2">
                <circle cx="22" cy="46" r="2.5" />
                <circle cx="33" cy="51" r="2.5" />
                <circle cx="44" cy="46" r="2.5" />
            </g>
        </svg>`;
    }

    static mist() {
        return `
        <svg viewBox="0 0 64 64" class="weather-svg" width="100%" height="100%">
            <g stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.85">
                <line x1="16" y1="24" x2="48" y2="24" />
                <line x1="12" y1="32" x2="52" y2="32" />
                <line x1="18" y1="40" x2="46" y2="40" />
                <line x1="14" y1="48" x2="50" y2="48" />
            </g>
        </svg>`;
    }
}

/* ==========================================================================
   2. Full-Screen Living Atmosphere Canvas Engine
   ========================================================================== */
class AtmosphereEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.activeWeatherType = 'clear-day';
        this.particles = [];
        this.lightningFlash = 0;
        this.isEnabled = true;
        this.animationId = null;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.startLoop();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
        this.height = this.canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
        this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
        this.displayWidth = window.innerWidth;
        this.displayHeight = window.innerHeight;

        this.spawnParticles();
    }

    setWeather(weatherType) {
        if (this.activeWeatherType === weatherType) return;
        this.activeWeatherType = weatherType;
        this.spawnParticles();
    }

    spawnParticles() {
        this.particles = [];
        const w = this.displayWidth;
        const h = this.displayHeight;

        if (this.activeWeatherType === 'rain' || this.activeWeatherType === 'thunderstorm') {
            const count = this.activeWeatherType === 'thunderstorm' ? 160 : 110;
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    length: 14 + Math.random() * 18,
                    speed: 14 + Math.random() * 12,
                    opacity: 0.25 + Math.random() * 0.5,
                    slant: -2 - Math.random() * 3
                });
            }
        } else if (this.activeWeatherType === 'snow') {
            const count = 75;
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    radius: 1.5 + Math.random() * 3.5,
                    speed: 0.8 + Math.random() * 1.6,
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: 0.02 + Math.random() * 0.03,
                    opacity: 0.35 + Math.random() * 0.6
                });
            }
        } else if (this.activeWeatherType === 'clear-night') {
            const count = 90;
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * w,
                    y: Math.random() * (h * 0.75),
                    radius: 0.8 + Math.random() * 1.8,
                    baseAlpha: 0.2 + Math.random() * 0.7,
                    twinkleSpeed: 0.02 + Math.random() * 0.05,
                    phase: Math.random() * Math.PI * 2
                });
            }
        } else if (this.activeWeatherType === 'clear-day') {
            const count = 35;
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    radius: 2 + Math.random() * 4,
                    speedY: -0.2 - Math.random() * 0.4,
                    speedX: 0.1 - Math.random() * 0.2,
                    alpha: 0.08 + Math.random() * 0.22
                });
            }
        }
    }

    startLoop() {
        const render = () => {
            if (this.isEnabled) {
                this.update();
                this.draw();
            }
            this.animationId = requestAnimationFrame(render);
        };
        render();
    }

    update() {
        const w = this.displayWidth;
        const h = this.displayHeight;

        if (this.activeWeatherType === 'rain' || this.activeWeatherType === 'thunderstorm') {
            this.particles.forEach(p => {
                p.y += p.speed;
                p.x += p.slant;
                if (p.y > h) {
                    p.y = -10;
                    p.x = Math.random() * (w + 100) - 50;
                }
            });

            if (this.activeWeatherType === 'thunderstorm') {
                if (this.lightningFlash > 0) {
                    this.lightningFlash -= 0.05;
                } else if (Math.random() < 0.005) {
                    this.lightningFlash = 0.85;
                }
            }
        } else if (this.activeWeatherType === 'snow') {
            this.particles.forEach(p => {
                p.y += p.speed;
                p.wobble += p.wobbleSpeed;
                p.x += Math.sin(p.wobble) * 0.6;
                if (p.y > h) {
                    p.y = -5;
                    p.x = Math.random() * w;
                }
            });
        } else if (this.activeWeatherType === 'clear-night') {
            this.particles.forEach(p => {
                p.phase += p.twinkleSpeed;
            });
        } else if (this.activeWeatherType === 'clear-day') {
            this.particles.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;
                if (p.y < -10) p.y = h + 10;
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.displayWidth, this.displayHeight);

        if (this.lightningFlash > 0) {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${this.lightningFlash})`;
            this.ctx.fillRect(0, 0, this.displayWidth, this.displayHeight);
        }

        if (this.activeWeatherType === 'rain' || this.activeWeatherType === 'thunderstorm') {
            this.ctx.strokeStyle = '#38bdf8';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.particles.forEach(p => {
                this.ctx.globalAlpha = p.opacity;
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(p.x + p.slant, p.y + p.length);
            });
            this.ctx.stroke();
            this.ctx.globalAlpha = 1;
        } else if (this.activeWeatherType === 'snow') {
            this.ctx.fillStyle = '#ffffff';
            this.particles.forEach(p => {
                this.ctx.globalAlpha = p.opacity;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fill();
            });
            this.ctx.globalAlpha = 1;
        } else if (this.activeWeatherType === 'clear-night') {
            this.particles.forEach(p => {
                const alpha = p.baseAlpha + Math.sin(p.phase) * 0.3;
                this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, alpha))})`;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fill();
            });
        } else if (this.activeWeatherType === 'clear-day') {
            this.particles.forEach(p => {
                this.ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fill();
            });
        }
    }

    setEnabled(enabled) {
        this.isEnabled = enabled;
        if (!enabled) {
            this.ctx.clearRect(0, 0, this.displayWidth, this.displayHeight);
        }
    }
}

/* ==========================================================================
   3. Ambient Web Audio Synthesizer
   ========================================================================== */
class WeatherAudioEngine {
    constructor() {
        this.audioCtx = null;
        this.isPlaying = false;
        this.masterGain = null;
        this.noiseNode = null;
        this.filterNode = null;
    }

    initContext() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();
            this.masterGain = this.audioCtx.createGain();
            this.masterGain.gain.setValueAtTime(0.07, this.audioCtx.currentTime);
            this.masterGain.connect(this.audioCtx.destination);
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    playWeatherAmbience(weatherType) {
        this.initContext();
        if (this.noiseNode) {
            this.stop();
        }

        const bufferSize = this.audioCtx.sampleRate * 2;
        const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.11;
            b6 = white * 0.115926;
        }

        this.noiseNode = this.audioCtx.createBufferSource();
        this.noiseNode.buffer = noiseBuffer;
        this.noiseNode.loop = true;

        this.filterNode = this.audioCtx.createBiquadFilter();

        if (weatherType.includes('rain') || weatherType.includes('thunder')) {
            this.filterNode.type = 'lowpass';
            this.filterNode.frequency.setValueAtTime(800, this.audioCtx.currentTime);
        } else {
            this.filterNode.type = 'bandpass';
            this.filterNode.frequency.setValueAtTime(360, this.audioCtx.currentTime);
            this.filterNode.Q.setValueAtTime(1.2, this.audioCtx.currentTime);
        }

        this.noiseNode.connect(this.filterNode);
        this.filterNode.connect(this.masterGain);
        this.noiseNode.start();
        this.isPlaying = true;
    }

    stop() {
        if (this.noiseNode) {
            try {
                this.noiseNode.stop();
                this.noiseNode.disconnect();
            } catch (e) {}
            this.noiseNode = null;
        }
        this.isPlaying = false;
    }

    toggle(weatherType) {
        if (this.isPlaying) {
            this.stop();
            return false;
        } else {
            this.playWeatherAmbience(weatherType);
            return true;
        }
    }
}

/* ==========================================================================
   4. Leaflet Weather Radar Map Engine
   ========================================================================== */
class RadarMapEngine {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.map = null;
        this.marker = null;
        this.weatherLayer = null;
        this.activeLayerType = 'precipitation_new';
        this.currentCoords = { lat: 30.0626, lon: 31.2497 };
    }

    initMap() {
        const container = document.getElementById('radarMap');
        if (!container || this.map) return;

        this.map = L.map('radarMap', {
            zoomControl: true,
            attributionControl: false,
            dragging: true,
            scrollWheelZoom: true
        }).setView([this.currentCoords.lat, this.currentCoords.lon], 7);

        // Dark Matter base tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 18,
            subdomains: 'abcd'
        }).addTo(this.map);

        this.updateWeatherLayer(this.activeLayerType);
        this.updateMarker(this.currentCoords.lat, this.currentCoords.lon);
    }

    setCoordinates(lat, lon, cityName) {
        this.currentCoords = { lat, lon };
        if (this.map) {
            this.map.setView([lat, lon], 7);
            this.updateMarker(lat, lon);
        }
        const badge = document.getElementById('radarLocationBadge');
        if (badge) badge.textContent = cityName;
    }

    updateMarker(lat, lon) {
        if (!this.map) return;
        if (this.marker) this.map.removeLayer(this.marker);

        const customIcon = L.divIcon({
            className: 'radar-map-pin',
            html: '<div style="width:16px;height:16px;background:#38bdf8;border:3px solid #fff;border-radius:50%;box-shadow:0 0 14px #38bdf8;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });

        this.marker = L.marker([lat, lon], { icon: customIcon }).addTo(this.map);
    }

    updateWeatherLayer(layerType) {
        this.activeLayerType = layerType;
        if (!this.map) return;

        if (this.weatherLayer) {
            this.map.removeLayer(this.weatherLayer);
        }

        this.weatherLayer = L.tileLayer(
            `https://tile.openweathermap.org/map/${layerType}/{z}/{x}/{y}.png?appid=${this.apiKey}`,
            { opacity: 0.65, maxZoom: 18 }
        ).addTo(this.map);
    }
}

/* ==========================================================================
   5. Main Dashboard Controller
   ========================================================================== */
class WeatherDashboardWebsite {
    constructor() {
        this.apiKey = '8b7b958097bfbadb9d90e6dd6760acdd';
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
        this.geoUrl = 'https://api.openweathermap.org/geo/1.0';

        // Settings
        this.units = localStorage.getItem('weather_units') || 'metric';
        this.windUnit = localStorage.getItem('weather_wind_unit') || 'kmh';
        this.pressureUnit = localStorage.getItem('weather_pressure_unit') || 'hpa';
        this.particlesEnabled = localStorage.getItem('weather_particles') !== 'false';
        this.soundEnabled = false;

        this.currentWeatherData = null;
        this.forecastData = null;
        this.airData = null;
        this.savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];

        // Engines
        this.atmosphere = new AtmosphereEngine('weatherCanvas');
        this.audio = new WeatherAudioEngine();
        this.radar = new RadarMapEngine(this.apiKey);

        this.debounceTimer = null;

        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();

        this.atmosphere.setEnabled(this.particlesEnabled);
        if (this.particlesToggle) {
            this.particlesToggle.checked = this.particlesEnabled;
        }

        // Radar Map Init
        setTimeout(() => this.radar.initMap(), 300);

        this.renderSavedCities();
        this.loadInitialCity();
    }

    cacheDOM() {
        // Search
        this.citySearchInput = document.getElementById('citySearchInput');
        this.clearSearchBtn = document.getElementById('clearSearchBtn');
        this.searchSuggestions = document.getElementById('searchSuggestions');

        // Header controls
        this.headerGpsBtn = document.getElementById('headerGpsBtn');
        this.quickUnitToggle = document.getElementById('quickUnitToggle');
        this.ambientSoundBtn = document.getElementById('ambientSoundBtn');
        this.openSettingsBtn = document.getElementById('openSettingsBtn');

        // Hero Weather
        this.heroCityName = document.getElementById('heroCityName');
        this.heroCountryCode = document.getElementById('heroCountryCode');
        this.heroDateText = document.getElementById('heroDateText');
        this.heroTemperature = document.getElementById('heroTemperature');
        this.heroConditionIcon = document.getElementById('heroConditionIcon');
        this.heroConditionName = document.getElementById('heroConditionName');
        this.heroHighTemp = document.getElementById('heroHighTemp');
        this.heroLowTemp = document.getElementById('heroLowTemp');
        this.heroFeelsLike = document.getElementById('heroFeelsLike');
        this.weatherSummaryText = document.getElementById('weatherSummaryText');
        this.ambientGradient = document.getElementById('ambientGradient');
        this.favoriteCityBtn = document.getElementById('favoriteCityBtn');

        // Hourly & 5-Day
        this.hourlyTrack = document.getElementById('hourlyTrack');
        this.weeklyList = document.getElementById('weeklyList');

        // Air Quality
        this.aqiNumber = document.getElementById('aqiNumber');
        this.aqiLevelBadge = document.getElementById('aqiLevelBadge');
        this.aqiStatusHeadline = document.getElementById('aqiStatusHeadline');
        this.aqiAdviceText = document.getElementById('aqiAdviceText');
        this.aqiBarThumb = document.getElementById('aqiBarThumb');
        this.pm25Val = document.getElementById('pm25Val');
        this.pm10Val = document.getElementById('pm10Val');
        this.o3Val = document.getElementById('o3Val');
        this.no2Val = document.getElementById('no2Val');
        this.so2Val = document.getElementById('so2Val');
        this.coVal = document.getElementById('coVal');

        // Bento Metrics
        this.uvScore = document.getElementById('uvScore');
        this.uvCategory = document.getElementById('uvCategory');
        this.uvThumb = document.getElementById('uvThumb');
        this.uvAdvice = document.getElementById('uvAdvice');

        this.windSpeedVal = document.getElementById('windSpeedVal');
        this.windUnitLabel = document.getElementById('windUnitLabel');
        this.windDirectionText = document.getElementById('windDirectionText');
        this.windGustText = document.getElementById('windGustText');
        this.compassNeedle = document.getElementById('compassNeedle');

        this.sunriseTime = document.getElementById('sunriseTime');
        this.sunsetTime = document.getElementById('sunsetTime');
        this.movingSunOrb = document.getElementById('movingSunOrb');
        this.sunCountdownText = document.getElementById('sunCountdownText');

        this.feelsLikeDetail = document.getElementById('feelsLikeDetail');
        this.feelsLikeSummary = document.getElementById('feelsLikeSummary');
        this.humidityVal = document.getElementById('humidityVal');
        this.dewPointVal = document.getElementById('dewPointVal');
        this.visibilityVal = document.getElementById('visibilityVal');
        this.visibilityDesc = document.getElementById('visibilityDesc');
        this.pressureVal = document.getElementById('pressureVal');
        this.pressureTrend = document.getElementById('pressureTrend');
        this.cloudsVal = document.getElementById('cloudsVal');
        this.cloudsDesc = document.getElementById('cloudsDesc');

        // Saved Cities
        this.savedCitiesList = document.getElementById('savedCitiesList');
        this.savedCountLabel = document.getElementById('savedCountLabel');

        // Settings Modal
        this.settingsModalBackdrop = document.getElementById('settingsModalBackdrop');
        this.closeSettingsBtn = document.getElementById('closeSettingsBtn');
        this.particlesToggle = document.getElementById('particlesToggle');
        this.soundToggle = document.getElementById('soundToggle');
        this.resetDefaultsBtn = document.getElementById('resetDefaultsBtn');

        // Loader & Toast
        this.appLoader = document.getElementById('appLoader');
        this.loaderMessage = document.getElementById('loaderMessage');
        this.toastNotification = document.getElementById('toastNotification');
        this.toastText = document.getElementById('toastText');
    }

    bindEvents() {
        // Quick Unit Toggle
        this.quickUnitToggle.addEventListener('click', () => this.toggleTempUnit());

        // Ambient Sound
        this.ambientSoundBtn.addEventListener('click', () => this.toggleAmbientSound());
        if (this.soundToggle) {
            this.soundToggle.addEventListener('change', () => this.toggleAmbientSound());
        }

        // GPS Location
        this.headerGpsBtn.addEventListener('click', () => this.getUserGPSLocation());

        // Search Input & Clear
        this.citySearchInput.addEventListener('input', (e) => this.handleSearchInput(e.target.value));
        this.clearSearchBtn.addEventListener('click', () => {
            this.citySearchInput.value = '';
            this.clearSearchBtn.classList.add('hidden');
            this.searchSuggestions.classList.add('hidden');
        });

        // Close search dropdown on click outside
        document.addEventListener('click', (e) => {
            if (!this.citySearchInput.contains(e.target) && !this.searchSuggestions.contains(e.target)) {
                this.searchSuggestions.classList.add('hidden');
            }
        });

        // Popular City Chips
        document.querySelectorAll('.city-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const city = chip.getAttribute('data-city');
                this.fetchWeatherByCity(city);
            });
        });

        // Favorite Button
        this.favoriteCityBtn.addEventListener('click', () => {
            if (this.currentWeatherData) {
                this.saveCityToRecent(this.currentWeatherData);
                this.showToast(`Saved ${this.currentWeatherData.name} to favorites.`);
            }
        });

        // Radar Layer Pills
        document.querySelectorAll('.radar-layer-buttons .layer-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.radar-layer-buttons .layer-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const layer = btn.getAttribute('data-layer');
                this.radar.updateWeatherLayer(layer);
            });
        });

        // Settings Modal Open/Close
        this.openSettingsBtn.addEventListener('click', () => this.openSettingsModal());
        this.closeSettingsBtn.addEventListener('click', () => this.closeSettingsModal());
        this.settingsModalBackdrop.addEventListener('click', (e) => {
            if (e.target === this.settingsModalBackdrop) this.closeSettingsModal();
        });

        // Units Segmented in Modal
        document.querySelectorAll('#tempUnitSegmented .seg-btn').forEach(btn => {
            btn.addEventListener('click', () => this.setTempUnit(btn.getAttribute('data-unit')));
        });
        document.querySelectorAll('#windUnitSegmented .seg-btn').forEach(btn => {
            btn.addEventListener('click', () => this.setWindUnit(btn.getAttribute('data-wind')));
        });
        document.querySelectorAll('#pressureUnitSegmented .seg-btn').forEach(btn => {
            btn.addEventListener('click', () => this.setPressureUnit(btn.getAttribute('data-pressure')));
        });

        // Atmosphere particles checkbox
        if (this.particlesToggle) {
            this.particlesToggle.addEventListener('change', (e) => {
                this.particlesEnabled = e.target.checked;
                localStorage.setItem('weather_particles', this.particlesEnabled);
                this.atmosphere.setEnabled(this.particlesEnabled);
            });
        }

        // Reset Data
        if (this.resetDefaultsBtn) {
            this.resetDefaultsBtn.addEventListener('click', () => {
                localStorage.removeItem('savedCities');
                this.savedCities = [];
                this.renderSavedCities();
                this.showToast('Cleared saved locations and cache.');
            });
        }
    }

    toggleTempUnit() {
        const next = this.units === 'metric' ? 'imperial' : 'metric';
        this.setTempUnit(next);
    }

    setTempUnit(unit) {
        this.units = unit;
        localStorage.setItem('weather_units', unit);

        const cSpan = this.quickUnitToggle.querySelector('.unit-c');
        const fSpan = this.quickUnitToggle.querySelector('.unit-f');
        if (unit === 'metric') {
            cSpan.classList.add('active');
            fSpan.classList.remove('active');
        } else {
            cSpan.classList.remove('active');
            fSpan.classList.add('active');
        }

        document.querySelectorAll('#tempUnitSegmented .seg-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-unit') === unit);
        });

        if (this.currentWeatherData) {
            this.displayAllWeatherData(this.currentWeatherData, this.forecastData, this.airData);
        }
    }

    setWindUnit(unit) {
        this.windUnit = unit;
        localStorage.setItem('weather_wind_unit', unit);
        document.querySelectorAll('#windUnitSegmented .seg-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-wind') === unit);
        });
        if (this.currentWeatherData) {
            this.displayBentoMetrics(this.currentWeatherData);
        }
    }

    setPressureUnit(unit) {
        this.pressureUnit = unit;
        localStorage.setItem('weather_pressure_unit', unit);
        document.querySelectorAll('#pressureUnitSegmented .seg-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-pressure') === unit);
        });
        if (this.currentWeatherData) {
            this.displayBentoMetrics(this.currentWeatherData);
        }
    }

    toggleAmbientSound() {
        const condition = this.activeAtmosphereType || 'clear-day';
        const isNowPlaying = this.audio.toggle(condition);
        this.soundEnabled = isNowPlaying;

        if (isNowPlaying) {
            this.ambientSoundBtn.classList.add('active');
            this.ambientSoundBtn.innerHTML = '<i class="fas fa-volume-high"></i>';
            this.showToast('Atmospheric soundscape playing.');
        } else {
            this.ambientSoundBtn.classList.remove('active');
            this.ambientSoundBtn.innerHTML = '<i class="fas fa-volume-xmark"></i>';
            this.showToast('Atmospheric soundscape muted.');
        }

        if (this.soundToggle) {
            this.soundToggle.checked = isNowPlaying;
        }
    }

    /* ======================================================================
       Data Fetching Logic
       ====================================================================== */
    async loadInitialCity() {
        if (this.savedCities.length > 0) {
            const first = this.savedCities[0];
            await this.fetchWeatherByCoords(first.lat, first.lon, `${first.name}, ${first.country}`);
        } else {
            await this.fetchWeatherByCity('Cairo');
        }
    }

    async getUserGPSLocation() {
        if (!navigator.geolocation) {
            this.showToast('Geolocation is not supported by your browser.');
            return;
        }

        this.showLoader('Locating device via GPS...');
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    await this.fetchWeatherByCoords(latitude, longitude);
                    this.showToast('Updated weather for your GPS coordinates.');
                } catch (e) {
                    this.showToast('Unable to fetch weather for your coordinates.');
                } finally {
                    this.hideLoader();
                }
            },
            () => {
                this.hideLoader();
                this.showToast('Location permission denied or unavailable.');
            },
            { timeout: 10000, enableHighAccuracy: true }
        );
    }

    async fetchWeatherByCity(cityName) {
        this.showLoader(`Gathering atmospheric feeds for ${cityName}...`);
        try {
            const geoRes = await fetch(`${this.geoUrl}/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${this.apiKey}`);
            const geoData = await geoRes.json();

            if (!geoData || geoData.length === 0) {
                const currentRes = await fetch(`${this.baseUrl}/weather?q=${encodeURIComponent(cityName)}&appid=${this.apiKey}&units=metric`);
                if (!currentRes.ok) throw new Error('City not found');
                const current = await currentRes.json();
                await this.fetchWeatherByCoords(current.coord.lat, current.coord.lon, `${current.name}, ${current.sys.country}`);
                return;
            }

            const { lat, lon, name, country } = geoData[0];
            await this.fetchWeatherByCoords(lat, lon, `${name}, ${country}`);
        } catch (error) {
            this.hideLoader();
            this.showToast('City not found. Please check spelling.');
        }
    }

    async fetchWeatherByCoords(lat, lon, labelName = null) {
        this.showLoader('Analyzing atmosphere & satellite radar...');
        try {
            const [curRes, foreRes, airRes] = await Promise.all([
                fetch(`${this.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`),
                fetch(`${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`),
                fetch(`${this.baseUrl}/air_pollution?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
            ]);

            if (!curRes.ok || !foreRes.ok) throw new Error('API fetch error');

            this.currentWeatherData = await curRes.json();
            this.forecastData = await foreRes.json();
            this.airData = airRes.ok ? await airRes.json() : null;

            if (labelName) {
                this.currentWeatherData.customLabel = labelName;
            }

            this.displayAllWeatherData(this.currentWeatherData, this.forecastData, this.airData);
            this.saveCityToRecent(this.currentWeatherData);

            this.radar.setCoordinates(lat, lon, `${this.currentWeatherData.name}, ${this.currentWeatherData.sys.country}`);

        } catch (error) {
            console.error(error);
            this.showToast('Failed to load weather data.');
        } finally {
            this.hideLoader();
        }
    }

    /* ======================================================================
       Display & Formatting Logic
       ====================================================================== */
    displayAllWeatherData(current, forecast, air) {
        // 1. City & Date
        this.heroCityName.textContent = current.name;
        this.heroCountryCode.textContent = current.sys.country;

        const localDate = this.getCityLocalDateTime(current.timezone);
        this.heroDateText.textContent = `${localDate.weekday}, ${localDate.month} ${localDate.day} • Local Time ${localDate.timeStr}`;

        // 2. Temperatures
        this.heroTemperature.textContent = this.formatTempVal(current.main.temp);
        this.heroHighTemp.textContent = this.formatTemp(current.main.temp_max);
        this.heroLowTemp.textContent = this.formatTemp(current.main.temp_min);
        this.heroFeelsLike.textContent = this.formatTemp(current.main.feels_like);

        // 3. Condition & Icon
        const weatherObj = current.weather[0];
        const isDayTime = current.dt >= current.sys.sunrise && current.dt < current.sys.sunset;
        this.heroConditionName.textContent = this.capitalizeWords(weatherObj.description);
        this.heroConditionIcon.innerHTML = WeatherIcons.getIcon(weatherObj.id, isDayTime);

        // 4. Atmospheric Theme & Particles
        this.updateAtmosphericTheme(weatherObj.id, isDayTime, current.sys.sunrise, current.sys.sunset, current.dt);

        // 5. Smart Summary
        this.weatherSummaryText.textContent = this.generateSmartSummary(current, forecast);

        // 6. Hourly Forecast Strip
        this.displayHourlyForecast(forecast, current.timezone);

        // 7. 5-Day Forecast with Apple Range Bar
        this.display5DayForecast(forecast);

        // 8. Air Quality Index
        this.displayAirQuality(air);

        // 9. Bento Grid Detailed Metrics
        this.displayBentoMetrics(current);
    }

    updateAtmosphericTheme(code, isDay, sunrise, sunset, currentDt) {
        let themeClass = 'weather-clear-day';
        let particleType = 'clear-day';

        const isGoldenHour = (Math.abs(currentDt - sunrise) < 3600) || (Math.abs(currentDt - sunset) < 3600);

        if (code >= 200 && code < 300) {
            themeClass = 'weather-thunderstorm';
            particleType = 'thunderstorm';
        } else if (code >= 300 && code < 600) {
            themeClass = isDay ? 'weather-rain-day' : 'weather-rain-night';
            particleType = 'rain';
        } else if (code >= 600 && code < 700) {
            themeClass = 'weather-snow';
            particleType = 'snow';
        } else if (code >= 700 && code < 800) {
            themeClass = 'weather-mist';
            particleType = 'clear-day';
        } else if (code === 800) {
            if (isGoldenHour) {
                themeClass = 'weather-sunset';
                particleType = isDay ? 'clear-day' : 'clear-night';
            } else {
                themeClass = isDay ? 'weather-clear-day' : 'weather-clear-night';
                particleType = isDay ? 'clear-day' : 'clear-night';
            }
        } else {
            themeClass = isDay ? 'weather-clouds-day' : 'weather-clouds-night';
            particleType = isDay ? 'clear-day' : 'clear-night';
        }

        this.ambientGradient.className = `ambient-gradient-layer ${themeClass}`;
        this.activeAtmosphereType = particleType;
        this.atmosphere.setWeather(particleType);
    }

    generateSmartSummary(current, forecast) {
        const desc = current.weather[0].description;
        const windKmh = Math.round(current.wind.speed * 3.6);
        const temp = Math.round(current.main.temp);

        let rainHour = null;
        if (forecast && forecast.list) {
            for (let i = 0; i < 8; i++) {
                const item = forecast.list[i];
                if (item.pop >= 0.3) {
                    const date = new Date(item.dt * 1000);
                    rainHour = date.getHours();
                    break;
                }
            }
        }

        if (rainHour !== null) {
            return `Precipitation likely around ${rainHour}:00. Expect wet conditions and carry an umbrella.`;
        }

        if (windKmh > 30) {
            return `Brisk winds up to ${windKmh} km/h from ${this.getWindDirection(current.wind.deg)}. Expect gusty conditions.`;
        }

        if (temp > 30) {
            return `Warm atmospheric conditions with ${desc}. Stay hydrated during peak midday hours.`;
        }

        return `${this.capitalizeWords(desc)} throughout the day with a gentle breeze. Optimal outdoor conditions.`;
    }

    /* ----------------------------------------------------------------------
       Hourly Forecast Scrub
       ---------------------------------------------------------------------- */
    displayHourlyForecast(forecast, timezone) {
        if (!forecast || !forecast.list) return;

        this.hourlyTrack.innerHTML = '';
        const list = forecast.list.slice(0, 9);

        // Add "Now" card
        const nowCard = document.createElement('div');
        nowCard.className = 'hourly-item active';
        nowCard.innerHTML = `
            <span class="hourly-time">Now</span>
            <div class="hourly-icon-wrap">${WeatherIcons.getIcon(this.currentWeatherData.weather[0].id, true)}</div>
            <span class="hourly-temp">${this.formatTemp(this.currentWeatherData.main.temp)}</span>
        `;
        this.hourlyTrack.appendChild(nowCard);

        list.forEach(item => {
            const date = new Date((item.dt + timezone - new Date().getTimezoneOffset() * -60) * 1000);
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const timeStr = `${hours}:00`;

            const popPercent = Math.round((item.pop || 0) * 100);
            const isDay = item.sys.pod === 'd';

            const card = document.createElement('div');
            card.className = 'hourly-item';
            card.innerHTML = `
                <span class="hourly-time">${timeStr}</span>
                <div class="hourly-icon-wrap">${WeatherIcons.getIcon(item.weather[0].id, isDay)}</div>
                ${popPercent > 10 ? `<span class="hourly-pop">${popPercent}%</span>` : ''}
                <span class="hourly-temp">${this.formatTemp(item.main.temp)}</span>
            `;
            this.hourlyTrack.appendChild(card);
        });
    }

    /* ----------------------------------------------------------------------
       5-Day Apple-Style Min-Max Range Bar
       ---------------------------------------------------------------------- */
    display5DayForecast(forecast) {
        if (!forecast || !forecast.list) return;

        this.weeklyList.innerHTML = '';

        const daysMap = {};
        forecast.list.forEach(item => {
            const dateStr = new Date(item.dt * 1000).toDateString();
            if (!daysMap[dateStr]) {
                daysMap[dateStr] = {
                    date: new Date(item.dt * 1000),
                    temps: [],
                    weatherIds: []
                };
            }
            daysMap[dateStr].temps.push(item.main.temp);
            daysMap[dateStr].weatherIds.push(item.weather[0].id);
        });

        const dayKeys = Object.keys(daysMap).slice(0, 5);

        let weekMin = Infinity;
        let weekMax = -Infinity;

        dayKeys.forEach(key => {
            const dayMin = Math.min(...daysMap[key].temps);
            const dayMax = Math.max(...daysMap[key].temps);
            if (dayMin < weekMin) weekMin = dayMin;
            if (dayMax > weekMax) weekMax = dayMax;
        });

        if (weekMax === weekMin) weekMax += 1;

        dayKeys.forEach((key, index) => {
            const dayObj = daysMap[key];
            const dayMin = Math.min(...dayObj.temps);
            const dayMax = Math.max(...dayObj.temps);
            const primaryWeatherId = dayObj.weatherIds[Math.floor(dayObj.weatherIds.length / 2)] || 800;

            const dayName = index === 0 ? 'Today' : dayObj.date.toLocaleDateString('en-US', { weekday: 'short' });

            const leftPercent = Math.max(0, Math.min(100, ((dayMin - weekMin) / (weekMax - weekMin)) * 100));
            const rightPercent = Math.max(0, Math.min(100, ((dayMax - weekMin) / (weekMax - weekMin)) * 100));
            const widthPercent = Math.max(8, rightPercent - leftPercent);

            let currentDotHtml = '';
            if (index === 0 && this.currentWeatherData) {
                const curTemp = this.currentWeatherData.main.temp;
                const dotPercent = Math.max(0, Math.min(100, ((curTemp - weekMin) / (weekMax - weekMin)) * 100));
                currentDotHtml = `<div class="weekly-current-dot" style="left: ${dotPercent}%;"></div>`;
            }

            const row = document.createElement('div');
            row.className = 'weekly-row';
            row.innerHTML = `
                <span class="weekly-day">${dayName}</span>
                <div class="weekly-icon-cell">${WeatherIcons.getIcon(primaryWeatherId, true)}</div>
                <span class="weekly-min-temp">${this.formatTemp(dayMin)}</span>
                <div class="weekly-bar-track">
                    <div class="weekly-bar-gradient" style="left: ${leftPercent}%; width: ${widthPercent}%;"></div>
                    ${currentDotHtml}
                </div>
                <span class="weekly-max-temp">${this.formatTemp(dayMax)}</span>
            `;
            this.weeklyList.appendChild(row);
        });
    }

    /* ----------------------------------------------------------------------
       Air Quality Index (AQI)
       ---------------------------------------------------------------------- */
    displayAirQuality(air) {
        if (!air || !air.list || air.list.length === 0) {
            this.aqiNumber.textContent = '28';
            this.aqiLevelBadge.textContent = 'Good • 1';
            this.aqiStatusHeadline.textContent = 'Air Quality is Satisfactory';
            return;
        }

        const data = air.list[0];
        const aqiVal = data.main.aqi;

        const aqiMap = {
            1: { name: 'Good', badge: 'Good • 1', thumb: '10%', headline: 'Air Quality is Excellent', advice: 'Air quality is considered satisfactory, and air pollution poses little or no risk.', color: '#10b981' },
            2: { name: 'Fair', badge: 'Fair • 2', thumb: '30%', headline: 'Air Quality is Acceptable', advice: 'Air quality is acceptable; moderate health concern for sensitive individuals.', color: '#84cc16' },
            3: { name: 'Moderate', badge: 'Moderate • 3', thumb: '50%', headline: 'Moderately Polluted', advice: 'Members of sensitive groups may experience minor health effects.', color: '#eab308' },
            4: { name: 'Poor', badge: 'Poor • 4', thumb: '75%', headline: 'Poor Air Quality', advice: 'Everyone may begin to experience health effects; limit prolonged outdoor exertion.', color: '#f97316' },
            5: { name: 'Very Poor', badge: 'Very Poor • 5', thumb: '95%', headline: 'Hazardous Air Conditions', advice: 'Health warnings of emergency conditions. Avoid strenuous outdoor activities.', color: '#ef4444' }
        };

        const currentAqi = aqiMap[aqiVal] || aqiMap[1];
        const pm25 = data.components.pm2_5;
        const usAqi = Math.min(350, Math.round(pm25 * 4.2 + 10));

        this.aqiNumber.textContent = usAqi;
        this.aqiLevelBadge.textContent = currentAqi.badge;
        this.aqiLevelBadge.style.color = currentAqi.color;
        this.aqiLevelBadge.style.borderColor = currentAqi.color;
        this.aqiStatusHeadline.textContent = currentAqi.headline;
        this.aqiAdviceText.textContent = currentAqi.advice;
        this.aqiBarThumb.style.left = currentAqi.thumb;

        this.pm25Val.textContent = `${data.components.pm2_5.toFixed(1)} µg/m³`;
        this.pm10Val.textContent = `${data.components.pm10.toFixed(1)} µg/m³`;
        this.o3Val.textContent = `${data.components.o3.toFixed(1)} µg/m³`;
        this.no2Val.textContent = `${data.components.no2.toFixed(1)} µg/m³`;
        this.so2Val.textContent = `${data.components.so2.toFixed(1)} µg/m³`;
        this.coVal.textContent = `${data.components.co.toFixed(0)} µg/m³`;
    }

    /* ----------------------------------------------------------------------
       Bento Grid Detailed Metrics
       ---------------------------------------------------------------------- */
    displayBentoMetrics(current) {
        // 1. UV Index
        const uvScore = this.calculateEstimatedUV(current);
        this.uvScore.textContent = uvScore;
        const uvCategory = this.getUVCategory(uvScore);
        this.uvCategory.textContent = uvCategory.label;
        this.uvAdvice.textContent = uvCategory.advice;
        this.uvThumb.style.left = `${Math.min(95, (uvScore / 11) * 100)}%`;

        // 2. Wind & Direction Compass
        const rawSpeed = current.wind.speed;
        let formattedSpeed = Math.round(rawSpeed * 3.6);
        let unitText = 'km/h';

        if (this.windUnit === 'mph') {
            formattedSpeed = Math.round(rawSpeed * 2.237);
            unitText = 'mph';
        } else if (this.windUnit === 'ms') {
            formattedSpeed = Math.round(rawSpeed);
            unitText = 'm/s';
        }

        this.windSpeedVal.textContent = formattedSpeed;
        this.windUnitLabel.textContent = unitText;

        const deg = current.wind.deg || 0;
        const compassDir = this.getWindDirection(deg);
        this.windDirectionText.textContent = `${compassDir} (${deg}°)`;
        this.compassNeedle.style.transform = `rotate(${deg}deg)`;

        const gustSpeed = current.wind.gust ? Math.round(current.wind.gust * 3.6) : Math.round(rawSpeed * 4.2);
        this.windGustText.textContent = `Gusts: ${gustSpeed} km/h`;

        // 3. Sunrise & Sunset with Sun Arc
        const sunriseDate = new Date((current.sys.sunrise + current.timezone - new Date().getTimezoneOffset() * -60) * 1000);
        const sunsetDate = new Date((current.sys.sunset + current.timezone - new Date().getTimezoneOffset() * -60) * 1000);

        this.sunriseTime.textContent = this.formatTimeOnly(sunriseDate);
        this.sunsetTime.textContent = this.formatTimeOnly(sunsetDate);

        this.calculateSunPosition(current.dt, current.sys.sunrise, current.sys.sunset);

        // 4. Feels Like
        this.feelsLikeDetail.textContent = this.formatTemp(current.main.feels_like);
        const tempDiff = current.main.feels_like - current.main.temp;
        if (Math.abs(tempDiff) < 1.5) {
            this.feelsLikeSummary.textContent = 'Humidity and wind are within typical comfort ranges.';
        } else if (tempDiff > 0) {
            this.feelsLikeSummary.textContent = 'Humidity is making it feel warmer than the actual temperature.';
        } else {
            this.feelsLikeSummary.textContent = 'Wind is making it feel cooler than the actual thermometer reading.';
        }

        // 5. Humidity & Dew Point
        this.humidityVal.textContent = current.main.humidity;
        const dewPoint = this.calculateDewPoint(current.main.temp, current.main.humidity);
        this.dewPointVal.textContent = `The dew point is ${this.formatTemp(dewPoint)} right now.`;

        // 6. Visibility
        const visKm = (current.visibility / 1000).toFixed(1);
        this.visibilityVal.textContent = visKm;
        if (current.visibility >= 9000) {
            this.visibilityDesc.textContent = 'Clear view. Exceptional visibility across horizons.';
        } else if (current.visibility >= 4000) {
            this.visibilityDesc.textContent = 'Moderate visibility with slight atmospheric haze.';
        } else {
            this.visibilityDesc.textContent = 'Reduced visibility due to mist, fog, or precipitation.';
        }

        // 7. Pressure
        const hpa = current.main.pressure;
        if (this.pressureUnit === 'inhg') {
            this.pressureVal.textContent = (hpa * 0.02953).toFixed(2);
            this.pressureTrend.innerHTML = '<i class="fas fa-arrow-trend-up"></i> Normal barometric pressure';
        } else {
            this.pressureVal.textContent = hpa;
            this.pressureTrend.innerHTML = '<i class="fas fa-arrow-trend-up"></i> Steady barometric pressure';
        }

        // 8. Cloud Cover
        this.cloudsVal.textContent = current.clouds.all;
        if (current.clouds.all < 20) {
            this.cloudsDesc.textContent = 'Scattered clouds, clear blue sky dominant.';
        } else if (current.clouds.all < 70) {
            this.cloudsDesc.textContent = 'Partly cloudy sky with periodic sunshine.';
        } else {
            this.cloudsDesc.textContent = 'Heavy overcast cloud layers covering the sky.';
        }
    }

    calculateEstimatedUV(current) {
        const isDay = current.dt >= current.sys.sunrise && current.dt < current.sys.sunset;
        if (!isDay) return 0;

        const solarNoon = current.sys.sunrise + (current.sys.sunset - current.sys.sunrise) / 2;
        const hoursFromNoon = Math.abs(current.dt - solarNoon) / 3600;

        let uv = Math.max(0, 8 - hoursFromNoon * 1.6);
        const cloudFactor = 1 - (current.clouds.all / 100) * 0.6;
        uv = Math.round(uv * cloudFactor);
        return Math.max(1, Math.min(11, uv));
    }

    getUVCategory(uv) {
        if (uv <= 2) return { label: 'Low', advice: 'No special protection required.' };
        if (uv <= 5) return { label: 'Moderate', advice: 'Wear sunglasses & sun protection around midday.' };
        if (uv <= 7) return { label: 'High', advice: 'Seek shade during peak midday hours.' };
        if (uv <= 10) return { label: 'Very High', advice: 'Avoid prolonged direct exposure without SPF 30+.' };
        return { label: 'Extreme', advice: 'Take full sun safety precautions.' };
    }

    calculateSunPosition(currentDt, sunrise, sunset) {
        const totalDayLength = sunset - sunrise;
        const currentProgress = (currentDt - sunrise) / totalDayLength;

        if (currentProgress < 0 || currentProgress > 1) {
            this.movingSunOrb.style.display = 'none';
            if (currentDt < sunrise) {
                const diffMin = Math.round((sunrise - currentDt) / 60);
                this.sunCountdownText.textContent = `Sunrise in ${Math.floor(diffMin / 60)}h ${diffMin % 60}m`;
            } else {
                this.sunCountdownText.textContent = 'Sun has set. Clear skies overnight.';
            }
        } else {
            this.movingSunOrb.style.display = 'block';
            const angle = Math.PI * (1 - currentProgress);
            const x = 50 + Math.cos(angle) * 40;
            const y = 80 - Math.sin(angle) * 65;

            this.movingSunOrb.style.left = `${x}%`;
            this.movingSunOrb.style.top = `${y}%`;

            const diffMin = Math.round((sunset - currentDt) / 60);
            this.sunCountdownText.textContent = `Sunset in ${Math.floor(diffMin / 60)}h ${diffMin % 60}m`;
        }
    }

    calculateDewPoint(tempC, humidity) {
        return Math.round(tempC - (100 - humidity) / 5);
    }

    getWindDirection(deg) {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(deg / 22.5) % 16;
        return directions[index];
    }

    /* ----------------------------------------------------------------------
       Saved Cities & Search Autocomplete
       ---------------------------------------------------------------------- */
    handleSearchInput(query) {
        const trimmed = query.trim();
        if (trimmed.length > 0) {
            this.clearSearchBtn.classList.remove('hidden');
        } else {
            this.clearSearchBtn.classList.add('hidden');
            this.searchSuggestions.classList.add('hidden');
            return;
        }

        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(async () => {
            if (trimmed.length < 2) return;
            try {
                const res = await fetch(`${this.geoUrl}/direct?q=${encodeURIComponent(trimmed)}&limit=5&appid=${this.apiKey}`);
                const suggestions = await res.json();
                this.renderSearchSuggestions(suggestions);
            } catch (e) {
                console.error('Geocoding autocomplete failed', e);
            }
        }, 260);
    }

    renderSearchSuggestions(suggestions) {
        this.searchSuggestions.innerHTML = '';
        if (!suggestions || suggestions.length === 0) {
            this.searchSuggestions.classList.add('hidden');
            return;
        }

        suggestions.forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-suggestion-item';
            div.innerHTML = `
                <i class="fas fa-location-dot" style="color:var(--accent-blue)"></i>
                <div>
                    <span class="suggestion-city">${item.name}</span>
                    <span class="suggestion-meta">${item.state ? `${item.state}, ` : ''}${item.country}</span>
                </div>
            `;
            div.addEventListener('click', () => {
                this.searchSuggestions.classList.add('hidden');
                this.citySearchInput.value = '';
                this.clearSearchBtn.classList.add('hidden');
                this.fetchWeatherByCoords(item.lat, item.lon, `${item.name}, ${item.country}`);
            });
            this.searchSuggestions.appendChild(div);
        });

        this.searchSuggestions.classList.remove('hidden');
    }

    saveCityToRecent(weatherData) {
        const cityObj = {
            name: weatherData.name,
            country: weatherData.sys.country,
            lat: weatherData.coord.lat,
            lon: weatherData.coord.lon,
            temp: Math.round(weatherData.main.temp),
            temp_max: Math.round(weatherData.main.temp_max),
            temp_min: Math.round(weatherData.main.temp_min),
            condition: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
            weatherId: weatherData.weather[0].id,
            timezone: weatherData.timezone
        };

        this.savedCities = this.savedCities.filter(c => c.name.toLowerCase() !== cityObj.name.toLowerCase());
        this.savedCities.unshift(cityObj);

        if (this.savedCities.length > 8) {
            this.savedCities = this.savedCities.slice(0, 8);
        }

        localStorage.setItem('savedCities', JSON.stringify(this.savedCities));
        this.renderSavedCities();
    }

    renderSavedCities() {
        if (!this.savedCitiesList) return;
        this.savedCitiesList.innerHTML = '';
        this.savedCountLabel.textContent = `${this.savedCities.length} locations`;

        if (this.savedCities.length === 0) {
            this.savedCitiesList.innerHTML = `
                <div style="grid-column: 1 / -1; text-align:center; padding:30px 10px; color:var(--text-muted);">
                    <i class="fas fa-cloud-moon" style="font-size:2.2rem;margin-bottom:8px;display:block;"></i>
                    <p>No saved cities yet.<br>Click the star icon or tap any popular city above.</p>
                </div>
            `;
            return;
        }

        this.savedCities.forEach((city, index) => {
            const card = document.createElement('div');
            card.className = 'saved-city-card';

            const localTime = this.getCityLocalDateTime(city.timezone);

            card.innerHTML = `
                <div class="city-card-left">
                    <h3>${city.name}</h3>
                    <span class="city-card-time">${localTime.timeStr} • ${city.country}</span>
                    <span class="city-card-desc">${this.capitalizeWords(city.description)}</span>
                </div>
                <div class="city-card-right">
                    <span class="city-card-temp">${this.formatTemp(city.temp)}</span>
                    <span class="city-card-hl">H:${this.formatTemp(city.temp_max)} L:${this.formatTemp(city.temp_min)}</span>
                </div>
                <button class="delete-city-btn" title="Remove city" aria-label="Delete">
                    <i class="fas fa-times"></i>
                </button>
            `;

            card.addEventListener('click', (e) => {
                if (e.target.closest('.delete-city-btn')) return;
                this.fetchWeatherByCoords(city.lat, city.lon, `${city.name}, ${city.country}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            const delBtn = card.querySelector('.delete-city-btn');
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.savedCities.splice(index, 1);
                localStorage.setItem('savedCities', JSON.stringify(this.savedCities));
                this.renderSavedCities();
            });

            this.savedCitiesList.appendChild(card);
        });
    }

    /* ----------------------------------------------------------------------
       Settings Modal
       ---------------------------------------------------------------------- */
    openSettingsModal() {
        this.settingsModalBackdrop.classList.remove('hidden');
    }

    closeSettingsModal() {
        this.settingsModalBackdrop.classList.add('hidden');
    }

    /* ----------------------------------------------------------------------
       Helpers & Formatting
       ---------------------------------------------------------------------- */
    formatTemp(celsius) {
        if (this.units === 'imperial') {
            return `${Math.round((celsius * 9) / 5 + 32)}°`;
        }
        return `${Math.round(celsius)}°`;
    }

    formatTempVal(celsius) {
        if (this.units === 'imperial') {
            return Math.round((celsius * 9) / 5 + 32);
        }
        return Math.round(celsius);
    }

    getCityLocalDateTime(timezoneOffsetSeconds) {
        const utcNow = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
        const targetDate = new Date(utcNow + timezoneOffsetSeconds * 1000);

        const hours = String(targetDate.getHours()).padStart(2, '0');
        const minutes = String(targetDate.getMinutes()).padStart(2, '0');
        const weekday = targetDate.toLocaleDateString('en-US', { weekday: 'long' });
        const month = targetDate.toLocaleDateString('en-US', { month: 'short' });
        const day = targetDate.getDate();

        return {
            timeStr: `${hours}:${minutes}`,
            weekday,
            month,
            day
        };
    }

    formatTimeOnly(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    capitalizeWords(str) {
        if (!str) return '';
        return str.replace(/\b\w/g, l => l.toUpperCase());
    }

    showLoader(msg = 'Gathering atmospheric feeds...') {
        this.loaderMessage.textContent = msg;
        this.appLoader.classList.remove('hidden');
    }

    hideLoader() {
        this.appLoader.classList.add('hidden');
    }

    showToast(message) {
        this.toastText.textContent = message;
        this.toastNotification.classList.remove('hidden');
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => {
            this.toastNotification.classList.add('hidden');
        }, 3200);
    }
}

/* ==========================================================================
   Bootstrap
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    window.aeroCast = new WeatherDashboardWebsite();
});
