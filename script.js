// Main JavaScript for the English Tenses Course
class EnglishTensesCourse {
    constructor() {
        this.currentTense = null;
        this.completedTenses = this.loadProgress();
        this.speechSynthesis = window.speechSynthesis;
        this.init();
    }

    init() {
        this.setupMenuToggle();
        this.setupMenuNavigation();
        this.updateProgress();
        this.loadTense('simple_present'); // Load first tense by default
    }

    setupMenuToggle() {
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        hamburgerMenu.addEventListener('click', () => {
            this.toggleMenu();
        });

        overlay.addEventListener('click', () => {
            this.closeMenu();
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        hamburgerMenu.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    closeMenu() {
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        hamburgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    setupMenuNavigation() {
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const tense = item.dataset.tense;
                if (tense) {
                    this.loadTense(tense);
                    this.closeMenu();
                    
                    // Update active menu item
                    menuItems.forEach(mi => mi.classList.remove('active'));
                    item.classList.add('active');
                }
            });
        });
    }

    loadTense(tenseKey) {
        this.currentTense = tenseKey;
        const tenseData = tensesData[tenseKey];
        
        if (!tenseData) {
            console.error('Tense data not found:', tenseKey);
            return;
        }

        this.renderTenseContent(tenseData);
        this.updateActiveMenuItem(tenseKey);
        
        // Initialize activity manager for this tense
        if (window.activityManager) {
            setTimeout(() => {
                window.activityManager.init(tenseKey);
            }, 100);
        }
    }

    renderTenseContent(tenseData) {
        const contentArea = document.getElementById('contentArea');
        const t = window.languageManager ? window.languageManager.translate.bind(window.languageManager) : (key, fallback) => fallback;
        
        const html = `
            <div class="tense-content active">
                <div class="tense-header">
                    <h2>
                        <span class="tense-emoji">${tenseData.emoji}</span>
                        ${tenseData.name}
                    </h2>
                    <p>${window.languageManager ? window.languageManager.getTenseDescription(this.currentTense) : tenseData.description}</p>
                </div>

                ${this.renderGrammarSection(tenseData.grammar)}
                ${this.renderExamplesSection(tenseData.grammar.usage)}
                ${this.renderActivitiesSection()}
            </div>
        `;

        contentArea.innerHTML = html;
        
        // Initialize activities for this tense
        activityManager.initializeActivities(this.currentTense);
        
        // Setup audio buttons
        this.setupAudioButtons();
    }

    renderGrammarSection(grammar) {
        const t = window.languageManager ? window.languageManager.translate.bind(window.languageManager) : (key, fallback) => fallback;
        
        return `
            <div class="grammar-section">
                <h3 class="grammar-title">
                    📚 ${t('grammarTitle', 'Explicação Gramatical')}
                </h3>
                
                <div class="grammar-item">
                    <h4>${t('structure', 'Estrutura')}</h4>
                    <div class="grammar-examples">
                        <ul>
                            <li><strong>${t('affirmative', 'Afirmativa')}:</strong> ${grammar.structure.affirmative}</li>
                            <li><strong>${t('negative', 'Negativa')}:</strong> ${grammar.structure.negative}</li>
                            <li><strong>${t('interrogative', 'Interrogativa')}:</strong> ${grammar.structure.interrogative}</li>
                        </ul>
                        <p><strong>${t('examples', 'Exemplos')}:</strong></p>
                        <ul>
                            ${grammar.structure.examples.map((ex, index) => {
                                const labels = [
                                    t('affirmativeLabel', 'Afirmativa'),
                                    t('negativeLabel', 'Negativa'), 
                                    t('interrogativeLabel', 'Interrogativa')
                                ];
                                const label = labels[index] || '';
                                return `<li>${ex} ${label ? `(${label})` : ''}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                </div>

                <div class="grammar-item">
                    <h4>${t('conjugationRules', 'Regras de Conjugação')}</h4>
                    <div class="grammar-examples">
                        <ul>
                            ${grammar.rules.content.map(rule => `<li>${rule}</li>`).join('')}
                        </ul>
                        <p><strong>${t('examples', 'Exemplos')}:</strong></p>
                        <ul>
                            ${grammar.rules.examples.map((ex, index) => {
                                // Para regras de conjugação, não precisamos de rótulos específicos
                                return `<li>${ex}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                </div>

                <div class="grammar-item">
                    <h4>${t('keywords', 'Palavras-chave')}</h4>
                    <div class="grammar-examples">
                        <ul>
                            ${grammar.keywords.content.map(keyword => `<li>${keyword}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    renderExamplesSection(usage) {
        const t = window.languageManager ? window.languageManager.translate.bind(window.languageManager) : (key, fallback) => fallback;
        const usageCases = window.languageManager ? window.languageManager.getTenseUsageCases(this.currentTense) : usage.cases;
        
        return `
            <div class="examples-section">
                <h3 class="examples-title">
                    💡 ${t('usageTitle', 'Quando usar e Situações do Dia a Dia')}
                </h3>
                
                ${usageCases.map(useCase => `
                    <div class="use-case">
                        <div class="use-case-title">${useCase.case}</div>
                        <p style="margin-bottom: 15px; color: #555;">${useCase.explanation}</p>
                        
                        ${useCase.examples.map(example => {
                            const lang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'pt';
                            const translation = example[lang] || example.pt || example.translation || '';
                            
                            return `
                                <div class="example">
                                    <div class="example-text">
                                        <div class="english-text">${example.en}</div>
                                        <div class="portuguese-text">${translation}</div>
                                    </div>
                                    <button class="play-button" onclick="course.speakText('${example.en}')">
                                        <div class="play-icon"></div>
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderActivitiesSection() {
        const t = window.languageManager ? window.languageManager.translate.bind(window.languageManager) : (key, fallback) => fallback;
        
        return `
            <div class="activities-section">
                <h3 class="activities-title">
                    🎯 ${t('activitiesTitle', 'Atividades Interativas')}
                </h3>
                <p style="margin-bottom: 20px; color: #555;">
                    ${t('activitiesSubtitle', 'Pratique o que aprendeu com exercícios interativos! Cada tipo de atividade tem 5 questões.')}
                </p>
                
                <div class="activity-content">
                    <!-- Content will be generated by ActivityManager -->
                </div>
            </div>
        `;
    }

    setupAudioButtons() {
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                // The onclick attribute handles the audio
            });
        });
    }

    speakText(text) {
        if (!this.speechSynthesis) {
            alert('Síntese de voz não suportada neste navegador');
            return;
        }

        // Cancel any ongoing speech
        this.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.volume = 1;

        // Try to use a native English voice
        const voices = this.speechSynthesis.getVoices();
        const englishVoice = voices.find(voice => 
            voice.lang.startsWith('en') && voice.localService
        ) || voices.find(voice => voice.lang.startsWith('en'));

        if (englishVoice) {
            utterance.voice = englishVoice;
        }

        this.speechSynthesis.speak(utterance);
    }

    updateActiveMenuItem(tenseKey) {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.tense === tenseKey) {
                item.classList.add('active');
            }
        });
    }

    markTenseCompleted(tenseKey) {
        if (!this.completedTenses.includes(tenseKey)) {
            this.completedTenses.push(tenseKey);
            this.saveProgress();
            this.updateProgress();
            this.updateCompletionIndicator(tenseKey);
        }
    }

    updateCompletionIndicator(tenseKey) {
        const indicator = document.getElementById(`completion-${tenseKey}`);
        if (indicator) {
            indicator.classList.add('completed');
        }
    }

    updateProgress() {
        const totalTenses = Object.keys(tensesData).length;
        const completedCount = this.completedTenses.length;
        const percentage = (completedCount / totalTenses) * 100;

        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }

        if (progressText) {
            progressText.textContent = `${completedCount}/${totalTenses} tempos verbais`;
        }

        // Update completion indicators
        this.completedTenses.forEach(tenseKey => {
            this.updateCompletionIndicator(tenseKey);
        });
    }

    saveProgress() {
        try {
            localStorage.setItem('englishTensesProgress', JSON.stringify(this.completedTenses));
        } catch (e) {
            console.warn('Could not save progress to localStorage:', e);
        }
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('englishTensesProgress');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.warn('Could not load progress from localStorage:', e);
            return [];
        }
    }

    // Navigation methods
    getNextTense(currentTenseKey) {
        const tenseKeys = Object.keys(tensesData);
        const currentIndex = tenseKeys.indexOf(currentTenseKey);
        const nextIndex = (currentIndex + 1) % tenseKeys.length;
        return tenseKeys[nextIndex];
    }

    getPreviousTense(currentTenseKey) {
        const tenseKeys = Object.keys(tensesData);
        const currentIndex = tenseKeys.indexOf(currentTenseKey);
        const prevIndex = currentIndex === 0 ? tenseKeys.length - 1 : currentIndex - 1;
        return tenseKeys[prevIndex];
    }

    goToNextTense() {
        const nextTense = this.getNextTense(this.currentTense);
        this.loadTense(nextTense);
    }

    goToPreviousTense() {
        const prevTense = this.getPreviousTense(this.currentTense);
        this.loadTense(prevTense);
    }
}

// Initialize the course when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.course = new EnglishTensesCourse();
});

// Handle voices loading for speech synthesis
window.addEventListener('load', () => {
    if (window.speechSynthesis) {
        // Load voices
        window.speechSynthesis.getVoices();
        
        // Some browsers need this event
        window.speechSynthesis.addEventListener('voiceschanged', () => {
            window.speechSynthesis.getVoices();
        });
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (window.course && e.altKey) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                window.course.goToPreviousTense();
                break;
            case 'ArrowRight':
                e.preventDefault();
                window.course.goToNextTense();
                break;
            case 'm':
                e.preventDefault();
                window.course.toggleMenu();
                break;
        }
    }
});

// Utility functions for activities
function completeCurrentTense() {
    if (window.course && window.course.currentTense) {
        window.course.markTenseCompleted(window.course.currentTense);
    }
}

// Export for global access
window.EnglishTensesCourse = EnglishTensesCourse;

