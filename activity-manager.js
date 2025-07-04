// Activity Manager for handling interactive exercises
class ActivityManager {
    constructor() {
        this.currentActivity = 'multipleChoice';
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 5;
        this.currentTense = null;
    }

    init(tenseKey) {
        this.currentTense = tenseKey;
        this.currentActivity = 'multipleChoice';
        this.currentQuestion = 0;
        this.score = 0;
        this.render();
    }

    render() {
        const container = document.querySelector('.activity-content');
        if (!container) return;

        const t = window.languageManager ? window.languageManager.translate.bind(window.languageManager) : (key, fallback) => fallback;
        const currentLang = window.languageManager ? window.languageManager.currentLanguage : 'pt';

        container.innerHTML = `
            <div class="activity-tabs">
                <button class="activity-tab ${this.currentActivity === 'multipleChoice' ? 'active' : ''}" 
                        onclick="window.activityManager.switchActivity('multipleChoice')">
                    📝 ${t('multipleChoice', 'Múltipla Escolha')}
                </button>
                <button class="activity-tab ${this.currentActivity === 'fillBlanks' ? 'active' : ''}" 
                        onclick="window.activityManager.switchActivity('fillBlanks')">
                    ✏️ ${t('fillBlanks', 'Preencher Lacunas')}
                </button>
                <button class="activity-tab ${this.currentActivity === 'wordOrder' ? 'active' : ''}" 
                        onclick="window.activityManager.switchActivity('wordOrder')">
                    🔤 ${t('wordOrder', 'Organizar Palavras')}
                </button>
            </div>
            <div class="activity-content-area">
                ${this.renderCurrentActivity()}
            </div>
        `;
    }

    renderCurrentActivity() {
        const activities = activitiesData[this.currentTense];
        if (!activities || !activities[this.currentActivity]) {
            return '<p>Atividades não disponíveis para este tempo verbal.</p>';
        }

        const currentLang = window.languageManager ? window.languageManager.currentLanguage : 'pt';
        const t = window.languageManager ? window.languageManager.translate.bind(window.languageManager) : (key, fallback) => fallback;

        switch (this.currentActivity) {
            case 'multipleChoice':
                return this.renderMultipleChoice(activities.multipleChoice, currentLang, t);
            case 'fillBlanks':
                return this.renderFillBlanks(activities.fillBlanks, currentLang, t);
            case 'wordOrder':
                return this.renderWordOrder(activities.wordOrder, currentLang, t);
            default:
                return '<p>Atividade não encontrada.</p>';
        }
    }

    renderMultipleChoice(questions, lang, t) {
        const question = questions[this.currentQuestion];
        if (!question) return this.renderCompleted(t);

        const translatedQuestion = window.translateExerciseText ? window.translateExerciseText(question.question, lang) : question.question;

        return `
            <div class="question-container">
                <div class="question-header">
                    <span>${t('question', 'Questão')} ${this.currentQuestion + 1} ${t('of', 'de')} ${this.totalQuestions}</span>
                    <span>${t('score', 'Pontuação')}: ${this.score}/${this.totalQuestions}</span>
                </div>
                <h4 class="question-text">${translatedQuestion}</h4>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <button class="option-btn" onclick="window.activityManager.selectOption(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
                <div id="feedback" class="feedback"></div>
            </div>
        `;
    }

    renderFillBlanks(exercises, lang, t) {
        const exercise = exercises[this.currentQuestion];
        if (!exercise) return this.renderCompleted(t);

        return `
            <div class="question-container">
                <div class="question-header">
                    <span>${t('question', 'Questão')} ${this.currentQuestion + 1} ${t('of', 'de')} ${this.totalQuestions}</span>
                    <span>${t('score', 'Pontuação')}: ${this.score}/${this.totalQuestions}</span>
                </div>
                <h4 class="question-text">${window.translateExerciseText ? window.translateExerciseText('Complete a frase:', lang) : 'Complete a frase:'}</h4>
                <div class="fill-blank-container">
                    <p class="sentence">${exercise.sentence}</p>
                    <input type="text" id="answer-input" placeholder="${window.translateExerciseText ? window.translateExerciseText('Digite sua resposta...', lang) : 'Digite sua resposta...'}" />
                    <button onclick="window.activityManager.checkFillBlank()" class="check-btn">
                        ${window.translateExerciseText ? window.translateExerciseText('Verificar Resposta', lang) : 'Verificar Resposta'}
                    </button>
                </div>
                <div id="feedback" class="feedback"></div>
            </div>
        `;
    }

    renderWordOrder(exercises, lang, t) {
        const exercise = exercises[this.currentQuestion];
        if (!exercise) return this.renderCompleted(t);

        return `
            <div class="question-container">
                <div class="question-header">
                    <span>${t('question', 'Questão')} ${this.currentQuestion + 1} ${t('of', 'de')} ${this.totalQuestions}</span>
                    <span>${t('score', 'Pontuação')}: ${this.score}/${this.totalQuestions}</span>
                </div>
                <h4 class="question-text">${window.translateExerciseText ? window.translateExerciseText('Organize as palavras para formar uma frase correta:', lang) : 'Organize as palavras para formar uma frase correta:'}</h4>
                <div class="word-order-container">
                    <div class="words-pool">
                        ${exercise.words.map((word, index) => `
                            <span class="word-item" draggable="true" data-word="${word}" onclick="window.activityManager.addWord('${word}', ${index})">
                                ${word}
                            </span>
                        `).join('')}
                    </div>
                    <div class="sentence-builder" id="sentence-builder">
                        <span class="placeholder">${window.translateExerciseText ? window.translateExerciseText('Arraste as palavras aqui...', lang) : 'Arraste as palavras aqui...'}</span>
                    </div>
                    <button onclick="window.activityManager.checkWordOrder()" class="check-btn">
                        ${window.translateExerciseText ? window.translateExerciseText('Verificar Resposta', lang) : 'Verificar Resposta'}
                    </button>
                </div>
                <div id="feedback" class="feedback"></div>
            </div>
        `;
    }

    renderCompleted(t) {
        return `
            <div class="activity-completed">
                <h3>${window.translateExerciseText ? window.translateExerciseText('Atividade Completada!', window.languageManager ? window.languageManager.currentLanguage : 'pt') : 'Atividade Completada!'}</h3>
                <p>${window.translateExerciseText ? window.translateExerciseText('Pontuação', window.languageManager ? window.languageManager.currentLanguage : 'pt') : 'Pontuação'}: ${this.score}/${this.totalQuestions}</p>
                <button onclick="window.activityManager.resetActivity()" class="reset-btn">
                    ${window.translateExerciseText ? window.translateExerciseText('Tentar Novamente', window.languageManager ? window.languageManager.currentLanguage : 'pt') : 'Tentar Novamente'}
                </button>
                <button onclick="window.activityManager.nextActivity()" class="next-btn">
                    ${window.translateExerciseText ? window.translateExerciseText('Próxima Atividade', window.languageManager ? window.languageManager.currentLanguage : 'pt') : 'Próxima Atividade'}
                </button>
            </div>
        `;
    }

    switchActivity(activityType) {
        this.currentActivity = activityType;
        this.currentQuestion = 0;
        this.score = 0;
        this.render();
    }

    selectOption(optionIndex) {
        const activities = activitiesData[this.currentTense];
        const question = activities.multipleChoice[this.currentQuestion];
        const feedback = document.getElementById('feedback');
        const currentLang = window.languageManager ? window.languageManager.currentLanguage : 'pt';

        if (optionIndex === question.correct) {
            this.score++;
            feedback.innerHTML = `<div class="correct">${window.translateExerciseText ? window.translateExerciseText('Correto!', currentLang) : 'Correto!'} ${question.explanation}</div>`;
        } else {
            feedback.innerHTML = `<div class="incorrect">${window.translateExerciseText ? window.translateExerciseText('Incorreto', currentLang) : 'Incorreto'}. ${question.explanation}</div>`;
        }

        setTimeout(() => {
            this.currentQuestion++;
            this.render();
        }, 2000);
    }

    checkFillBlank() {
        const input = document.getElementById('answer-input');
        const userAnswer = input.value.trim().toLowerCase();
        const activities = activitiesData[this.currentTense];
        const exercise = activities.fillBlanks[this.currentQuestion];
        const correctAnswer = exercise.answer.toLowerCase();
        const feedback = document.getElementById('feedback');
        const currentLang = window.languageManager ? window.languageManager.currentLanguage : 'pt';

        if (userAnswer === correctAnswer) {
            this.score++;
            feedback.innerHTML = `<div class="correct">${window.translateExerciseText ? window.translateExerciseText('Correto!', currentLang) : 'Correto!'} ${exercise.explanation}</div>`;
        } else {
            feedback.innerHTML = `<div class="incorrect">${window.translateExerciseText ? window.translateExerciseText('Incorreto', currentLang) : 'Incorreto'}. ${exercise.explanation}</div>`;
        }

        setTimeout(() => {
            this.currentQuestion++;
            this.render();
        }, 2000);
    }

    addWord(word, index) {
        const builder = document.getElementById('sentence-builder');
        const placeholder = builder.querySelector('.placeholder');
        
        if (placeholder) {
            placeholder.remove();
        }

        const wordSpan = document.createElement('span');
        wordSpan.className = 'selected-word';
        wordSpan.textContent = word;
        wordSpan.onclick = () => this.removeWord(wordSpan);
        builder.appendChild(wordSpan);

        // Hide the word from pool
        const wordItems = document.querySelectorAll('.word-item');
        wordItems[index].style.display = 'none';
    }

    removeWord(wordElement) {
        const word = wordElement.textContent;
        wordElement.remove();

        // Show the word back in pool
        const wordItems = document.querySelectorAll('.word-item');
        wordItems.forEach(item => {
            if (item.dataset.word === word) {
                item.style.display = 'inline-block';
            }
        });

        // Add placeholder if no words
        const builder = document.getElementById('sentence-builder');
        if (builder.children.length === 0) {
            const currentLang = window.languageManager ? window.languageManager.currentLanguage : 'pt';
            builder.innerHTML = `<span class="placeholder">${window.translateExerciseText ? window.translateExerciseText('Arraste as palavras aqui...', currentLang) : 'Arraste as palavras aqui...'}</span>`;
        }
    }

    checkWordOrder() {
        const builder = document.getElementById('sentence-builder');
        const selectedWords = Array.from(builder.querySelectorAll('.selected-word')).map(span => span.textContent);
        const userSentence = selectedWords.join(' ');
        
        const activities = activitiesData[this.currentTense];
        const exercise = activities.wordOrder[this.currentQuestion];
        const correctSentence = exercise.correct;
        const feedback = document.getElementById('feedback');
        const currentLang = window.languageManager ? window.languageManager.currentLanguage : 'pt';

        if (userSentence === correctSentence) {
            this.score++;
            feedback.innerHTML = `<div class="correct">${window.translateExerciseText ? window.translateExerciseText('Correto!', currentLang) : 'Correto!'} ${exercise.explanation}</div>`;
        } else {
            feedback.innerHTML = `<div class="incorrect">${window.translateExerciseText ? window.translateExerciseText('Incorreto', currentLang) : 'Incorreto'}. ${exercise.explanation}</div>`;
        }

        setTimeout(() => {
            this.currentQuestion++;
            this.render();
        }, 2000);
    }

    resetActivity() {
        this.currentQuestion = 0;
        this.score = 0;
        this.render();
    }

    nextActivity() {
        const activities = ['multipleChoice', 'fillBlanks', 'wordOrder'];
        const currentIndex = activities.indexOf(this.currentActivity);
        const nextIndex = (currentIndex + 1) % activities.length;
        this.switchActivity(activities[nextIndex]);
    }
}

// Initialize activity manager
window.activityManager = new ActivityManager();

