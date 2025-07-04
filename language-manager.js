// Language Manager for the English Tenses Course
class LanguageManager {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.init();
    }

    init() {
        this.createLanguageSelector();
        this.updateInterface();
        this.setupEventListeners();
    }

    detectLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && ['pt', 'es', 'en'].includes(urlLang)) {
            return urlLang;
        }

        // Check localStorage
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && ['pt', 'es', 'en'].includes(savedLang)) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('es')) return 'es';
        if (browserLang.startsWith('en')) return 'en';
        
        // Default to Portuguese
        return 'pt';
    }

    createLanguageSelector() {
        const header = document.querySelector('.header');
        if (!header) return;

        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <div class="language-flags">
                <button class="flag-button ${this.currentLanguage === 'pt' ? 'active' : ''}" 
                        data-lang="pt" title="Português (Brasil)">
                    <span class="flag">🇧🇷</span>
                </button>
                <button class="flag-button ${this.currentLanguage === 'es' ? 'active' : ''}" 
                        data-lang="es" title="Español (España)">
                    <span class="flag">🇪🇸</span>
                </button>
                <button class="flag-button ${this.currentLanguage === 'en' ? 'active' : ''}" 
                        data-lang="en" title="English (UK)">
                    <span class="flag">🇬🇧</span>
                </button>
            </div>
        `;

        // Add CSS styles
        const style = document.createElement('style');
        style.textContent = `
            .language-selector {
                position: absolute;
                top: 20px;
                right: 20px;
                z-index: 1000;
            }

            .language-flags {
                display: flex;
                gap: 8px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 25px;
                padding: 8px;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .flag-button {
                background: none;
                border: none;
                cursor: pointer;
                padding: 8px 12px;
                border-radius: 20px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .flag-button:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }

            .flag-button.active {
                background: rgba(255, 255, 255, 0.3);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }

            .flag-button .flag {
                font-size: 24px;
                display: block;
                filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
            }

            .flag-button:active {
                transform: translateY(0);
            }

            @media (max-width: 768px) {
                .language-selector {
                    top: 15px;
                    right: 15px;
                }

                .language-flags {
                    gap: 6px;
                    padding: 6px;
                }

                .flag-button {
                    padding: 6px 10px;
                }

                .flag-button .flag {
                    font-size: 20px;
                }
            }
        `;

        document.head.appendChild(style);
        header.appendChild(languageSelector);
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.flag-button')) {
                const button = e.target.closest('.flag-button');
                const lang = button.dataset.lang;
                this.changeLanguage(lang);
            }
        });
    }

    changeLanguage(lang) {
        if (!['pt', 'es', 'en'].includes(lang)) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
        
        this.updateInterface();
        this.updateActiveFlag();
        
        // Reload current tense content if available
        if (window.course && window.course.currentTense) {
            window.course.loadTense(window.course.currentTense);
        }
    }

    updateActiveFlag() {
        document.querySelectorAll('.flag-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === this.currentLanguage) {
                button.classList.add('active');
            }
        });
    }

    updateInterface() {
        const t = translations[this.currentLanguage];
        if (!t) return;

        // Update main title and subtitle
        const title = document.querySelector('.main-title');
        if (title) title.textContent = t.title;

        const subtitle = document.querySelector('.subtitle');
        if (subtitle) subtitle.textContent = t.subtitle;

        // Update progress text
        const progressText = document.getElementById('progressText');
        if (progressText) {
            const completedCount = window.course ? window.course.completedTenses.length : 0;
            const totalTenses = Object.keys(tensesData).length;
            progressText.textContent = `${completedCount}/${totalTenses} ${t.tenses}`;
        }

        // Update menu
        this.updateMenu();

        // Update welcome message if no tense is selected
        this.updateWelcomeMessage();
    }

    updateMenu() {
        const t = translations[this.currentLanguage];
        
        // Update menu title
        const menuTitle = document.querySelector('.menu-title');
        if (menuTitle) menuTitle.textContent = t.menuTitle;

        const menuSubtitle = document.querySelector('.menu-subtitle');
        if (menuSubtitle) menuSubtitle.textContent = t.menuSubtitle;

        // Update category headers
        const categories = {
            'simple-category': t.simpleCategory,
            'continuous-category': t.continuousCategory,
            'perfect-category': t.perfectCategory,
            'perfect-continuous-category': t.perfectContinuousCategory
        };

        Object.entries(categories).forEach(([id, text]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = text;
        });

        // Update tense names in menu
        const tenseNames = {
            'simple_present': t.simplePresent,
            'simple_past': t.simplePast,
            'simple_future': t.simpleFuture,
            'present_continuous': t.presentContinuous,
            'past_continuous': t.pastContinuous,
            'future_continuous': t.futureContinuous,
            'present_perfect': t.presentPerfect,
            'past_perfect': t.pastPerfect,
            'future_perfect': t.futurePerfect,
            'present_perfect_continuous': t.presentPerfectContinuous,
            'past_perfect_continuous': t.pastPerfectContinuous,
            'future_perfect_continuous': t.futurePerfectContinuous
        };

        Object.entries(tenseNames).forEach(([tenseKey, name]) => {
            const menuItem = document.querySelector(`[data-tense="${tenseKey}"] .menu-item-text`);
            if (menuItem) menuItem.textContent = name;
        });
    }

    updateWelcomeMessage() {
        const contentArea = document.getElementById('contentArea');
        if (!contentArea || contentArea.querySelector('.tense-content')) return;

        const t = translations[this.currentLanguage];
        contentArea.innerHTML = `
            <div class="welcome-message">
                <div class="welcome-content">
                    <h2>${t.selectTense}</h2>
                    <p>${t.openMenu}</p>
                </div>
            </div>
        `;
    }

    translate(key, fallback = '') {
        const t = translations[this.currentLanguage];
        return t && t[key] ? t[key] : fallback;
    }

    getTenseDescription(tenseKey) {
        const descriptions = tenseDescriptions[this.currentLanguage];
        return descriptions && descriptions[tenseKey] ? descriptions[tenseKey] : '';
    }

    getTenseUsageCases(tenseKey) {
        const cases = usageCases[this.currentLanguage];
        return cases && cases[tenseKey] ? cases[tenseKey] : [];
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// Export for global access
window.LanguageManager = LanguageManager;

