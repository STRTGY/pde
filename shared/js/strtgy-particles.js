/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * STRTGY PARTICLES - OPTIMIZED FOR PRESENTATIONS
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Performance modes:
 * - 'full': All effects enabled (default, for local viewing)
 * - 'lite': Reduced particles, no animations (for screenshare/video calls)
 * - 'static': CSS gradient only, no particles
 * 
 * Keyboard shortcuts:
 * - 'P': Toggle pause/resume particles
 * - 'Shift+P': Cycle performance modes (full → lite → static → full)
 * 
 * URL Parameters:
 * - ?particles=lite : Start in lite mode
 * - ?particles=off  : Start with particles disabled
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

(function() {
    'use strict';

    // ═══════════════════════════════════════════════════════════════
    // CONFIGURATION PRESETS
    // ═══════════════════════════════════════════════════════════════

    const PARTICLES_CONFIG = {
        // FULL MODE - All effects (local viewing, no screenshare)
        full: {
            fullScreen: { enable: true, zIndex: -1 },
            fpsLimit: 60,
            particles: {
                number: { value: 80, density: { enable: true, area: 1000 } },
                color: { value: ["#00D4AA", "#1E3A5F", "#0ea5e9"] },
                shape: { type: "circle" },
                opacity: {
                    value: { min: 0.2, max: 0.6 },
                    animation: { enable: true, speed: 0.5, minimumValue: 0.1, sync: false }
                },
                size: {
                    value: { min: 1, max: 3 },
                    animation: { enable: true, speed: 1.5, minimumValue: 0.5, sync: false }
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#00D4AA",
                    opacity: 0.2,
                    width: 1,
                    triangles: { enable: true, opacity: 0.03 }
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" },
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: { enable: true, mode: "grab", parallax: { enable: true, force: 20, smooth: 20 } },
                    onClick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 150, links: { opacity: 0.4, color: "#00D4AA" } },
                    push: { quantity: 3 }
                }
            },
            detectRetina: true,
            background: { color: "transparent" }
        },

        // LITE MODE - Optimized for screenshare + video calls
        // Reduces CPU/GPU load significantly
        lite: {
            fullScreen: { enable: true, zIndex: -1 },
            fpsLimit: 30, // Half the FPS = half the work
            particles: {
                number: { value: 25, density: { enable: true, area: 1200 } }, // 75% fewer particles
                color: { value: ["#00D4AA", "#1E3A5F"] }, // Fewer colors
                shape: { type: "circle" },
                opacity: {
                    value: 0.4, // Static opacity, no animation
                    animation: { enable: false }
                },
                size: {
                    value: 2, // Static size, no animation
                    animation: { enable: false }
                },
                links: {
                    enable: true,
                    distance: 200,
                    color: "#00D4AA",
                    opacity: 0.15,
                    width: 1,
                    triangles: { enable: false } // No triangles = major performance boost
                },
                move: {
                    enable: true,
                    speed: 0.3, // Slower movement
                    direction: "none",
                    random: false, // Predictable paths = less CPU
                    straight: false,
                    outModes: { default: "out" },
                    attract: { enable: false } // No attraction = less calculations
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: { enable: false }, // No hover effects
                    onClick: { enable: false }, // No click effects
                    resize: true
                },
                modes: {}
            },
            detectRetina: false, // Single resolution
            background: { color: "transparent" }
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // STATE MANAGEMENT
    // ═══════════════════════════════════════════════════════════════

    let currentMode = 'lite'; // Default to lite for presentations
    let isPaused = false;
    let particlesInstance = null;

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlMode = urlParams.get('particles');
    if (urlMode === 'off' || urlMode === 'static') {
        currentMode = 'static';
    } else if (urlMode === 'full') {
        currentMode = 'full';
    } else if (urlMode === 'lite') {
        currentMode = 'lite';
    }

    // ═══════════════════════════════════════════════════════════════
    // INDICATOR UI
    // ═══════════════════════════════════════════════════════════════

    function createIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'performance-mode-indicator';
        indicator.id = 'particles-indicator';
        document.body.appendChild(indicator);
        return indicator;
    }

    function showIndicator(message, duration = 2000) {
        let indicator = document.getElementById('particles-indicator');
        if (!indicator) {
            indicator = createIndicator();
        }
        indicator.textContent = message;
        indicator.classList.add('visible');
        
        setTimeout(() => {
            indicator.classList.remove('visible');
        }, duration);
    }

    // ═══════════════════════════════════════════════════════════════
    // PARTICLES CONTROL
    // ═══════════════════════════════════════════════════════════════

    function initParticles(mode) {
        const container = document.getElementById('tsparticles');
        if (!container) return;

        if (mode === 'static') {
            // Just hide the particles, show CSS gradient background
            container.style.display = 'none';
            showIndicator('⚡ Partículas desactivadas (Shift+P para ciclar)');
            return;
        }

        container.style.display = 'block';
        const config = PARTICLES_CONFIG[mode] || PARTICLES_CONFIG.lite;

        // Check if tsParticles is loaded
        if (typeof tsParticles !== 'undefined') {
            tsParticles.load("tsparticles", config).then((container) => {
                particlesInstance = container;
                showIndicator(mode === 'full' ? '🎨 Partículas: Modo Completo' : '⚡ Partículas: Modo Ligero');
            });
        }
    }

    function togglePause() {
        const container = document.getElementById('tsparticles');
        if (!container || currentMode === 'static') return;

        isPaused = !isPaused;
        container.classList.toggle('paused', isPaused);

        if (particlesInstance) {
            if (isPaused) {
                particlesInstance.pause();
                showIndicator('⏸️ Partículas pausadas (P para reanudar)');
            } else {
                particlesInstance.play();
                showIndicator('▶️ Partículas activas');
            }
        }
    }

    function cycleMode() {
        const modes = ['full', 'lite', 'static'];
        const currentIndex = modes.indexOf(currentMode);
        currentMode = modes[(currentIndex + 1) % modes.length];
        
        // Destroy current instance and reinitialize
        if (particlesInstance) {
            particlesInstance.destroy();
            particlesInstance = null;
        }
        isPaused = false;
        
        const container = document.getElementById('tsparticles');
        if (container) {
            container.classList.remove('paused');
        }
        
        initParticles(currentMode);
    }

    // ═══════════════════════════════════════════════════════════════
    // KEYBOARD HANDLERS
    // ═══════════════════════════════════════════════════════════════

    function handleKeyPress(e) {
        // 'P' key - toggle pause
        if (e.key === 'p' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
            togglePause();
        }
        // 'Shift+P' - cycle modes
        else if (e.key === 'P' && e.shiftKey && !e.ctrlKey && !e.altKey) {
            cycleMode();
        }
    }

    // ═══════════════════════════════════════════════════════════════
    // INITIALIZATION
    // ═══════════════════════════════════════════════════════════════

    function init() {
        // Wait for DOM and tsParticles to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => initParticles(currentMode));
        } else {
            // Small delay to ensure tsParticles is loaded
            setTimeout(() => initParticles(currentMode), 100);
        }

        // Add keyboard listener
        document.addEventListener('keydown', handleKeyPress);
    }

    // Auto-initialize
    init();

    // ═══════════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════════

    window.STRTGYParticles = {
        setMode: function(mode) {
            if (['full', 'lite', 'static'].includes(mode)) {
                currentMode = mode;
                if (particlesInstance) {
                    particlesInstance.destroy();
                    particlesInstance = null;
                }
                initParticles(currentMode);
            }
        },
        getMode: function() {
            return currentMode;
        },
        pause: function() {
            if (!isPaused) togglePause();
        },
        play: function() {
            if (isPaused) togglePause();
        },
        toggle: togglePause,
        cycleMode: cycleMode
    };

})();
