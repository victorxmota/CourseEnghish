// Activities data and functions for the English tenses course
const activitiesData = {
    simple_present: {
        multipleChoice: [
            {
                question: "Qual tempo verbal é usado para ações habituais e rotinas?",
                options: ["Simple Present", "Present Continuous", "Simple Past", "Present Perfect"],
                correct: 0,
                explanation: "Simple Present é usado para ações habituais, rotinas e verdades universais. Ex: 'I work every day.'"
            },
            {
                question: "Complete: 'She _____ coffee every morning.'",
                options: ["drink", "drinks", "drinking", "drank"],
                correct: 1,
                explanation: "Para he/she/it no Simple Present, adicionamos -s ao verbo. 'She drinks coffee every morning.'"
            },
            {
                question: "Qual palavra-chave indica Simple Present?",
                options: ["yesterday", "now", "always", "tomorrow"],
                correct: 2,
                explanation: "'Always' é uma palavra-chave do Simple Present, indicando frequência/hábito."
            },
            {
                question: "Como formar a negativa de 'I work'?",
                options: ["I not work", "I don't work", "I am not work", "I doesn't work"],
                correct: 1,
                explanation: "Para I/you/we/they usamos 'don't' + verbo base. 'I don't work.'"
            },
            {
                question: "Qual frase está correta?",
                options: ["He don't like pizza", "He doesn't like pizza", "He not like pizza", "He isn't like pizza"],
                correct: 1,
                explanation: "Para he/she/it usamos 'doesn't' + verbo base. 'He doesn't like pizza.'"
            }
        ],
        fillBlanks: [
            {
                sentence: "I _____ (work) at a bank.",
                answer: "work",
                explanation: "Para 'I' no Simple Present, usamos o verbo na forma base: 'work'."
            },
            {
                sentence: "She _____ (study) English every day.",
                answer: "studies",
                explanation: "Para 'she' no Simple Present, verbos terminados em consoante+y mudam para -ies: 'studies'."
            },
            {
                sentence: "They _____ (not/like) coffee.",
                answer: "don't like",
                explanation: "Para they na negativa: don't + verbo base = 'don't like'."
            },
            {
                sentence: "_____ you speak English? (Do/Does)",
                answer: "Do",
                explanation: "Para 'you' na interrogativa usamos 'Do': 'Do you speak English?'"
            },
            {
                sentence: "The sun _____ (rise) in the east.",
                answer: "rises",
                explanation: "Para verdades universais com 'the sun' (it), adicionamos -s: 'rises'."
            }
        ],
        wordOrder: [
            {
                words: ["I", "every", "work", "day"],
                correct: "I work every day",
                explanation: "Ordem: Sujeito + verbo + complemento de tempo. 'I work every day.'"
            },
            {
                words: ["She", "coffee", "drinks", "morning", "every"],
                correct: "She drinks coffee every morning",
                explanation: "Ordem: Sujeito + verbo + objeto + complemento de tempo. 'She drinks coffee every morning.'"
            },
            {
                words: ["don't", "We", "on", "work", "Sundays"],
                correct: "We don't work on Sundays",
                explanation: "Negativa: Sujeito + don't + verbo + complemento. 'We don't work on Sundays.'"
            },
            {
                words: ["Does", "he", "English", "speak", "?"],
                correct: "Does he speak English?",
                explanation: "Interrogativa: Does + sujeito + verbo base + objeto? 'Does he speak English?'"
            },
            {
                words: ["always", "They", "happy", "are"],
                correct: "They are always happy",
                explanation: "Com verbo 'be': Sujeito + be + advérbio + adjetivo. 'They are always happy.'"
            }
        ]
    },

    simple_past: {
        multipleChoice: [
            {
                question: "Quando usamos Simple Past?",
                options: ["Para ações habituais", "Para ações que aconteceram e terminaram no passado", "Para ações futuras", "Para ações em progresso"],
                correct: 1,
                explanation: "Simple Past é usado para ações que aconteceram e terminaram no passado. Ex: 'I worked yesterday.'"
            },
            {
                question: "Qual é o passado de 'go'?",
                options: ["goed", "went", "gone", "going"],
                correct: 1,
                explanation: "'Go' é um verbo irregular. Seu passado é 'went'. Ex: 'I went to school yesterday.'"
            },
            {
                question: "Complete: 'She _____ to Paris last year.'",
                options: ["travel", "traveled", "travels", "traveling"],
                correct: 1,
                explanation: "Verbo regular 'travel' + ed = 'traveled'. 'She traveled to Paris last year.'"
            },
            {
                question: "Como formar a negativa de 'I worked'?",
                options: ["I not worked", "I didn't work", "I wasn't work", "I don't worked"],
                correct: 1,
                explanation: "Negativa no Simple Past: didn't + verbo base. 'I didn't work.'"
            },
            {
                question: "Qual palavra indica Simple Past?",
                options: ["always", "now", "yesterday", "tomorrow"],
                correct: 2,
                explanation: "'Yesterday' indica tempo passado, sendo palavra-chave do Simple Past."
            }
        ],
        fillBlanks: [
            {
                sentence: "I _____ (visit) my grandmother last week.",
                answer: "visited",
                explanation: "Verbo regular 'visit' + ed = 'visited'. 'I visited my grandmother last week.'"
            },
            {
                sentence: "They _____ (not/go) to the party.",
                answer: "didn't go",
                explanation: "Negativa: didn't + verbo base = 'didn't go'."
            },
            {
                sentence: "She _____ (buy) a new car yesterday.",
                answer: "bought",
                explanation: "'Buy' é irregular. Passado = 'bought'. 'She bought a new car yesterday.'"
            },
            {
                sentence: "_____ you see the movie? (Did/Do)",
                answer: "Did",
                explanation: "Interrogativa no Simple Past: Did + sujeito + verbo base. 'Did you see the movie?'"
            },
            {
                sentence: "We _____ (study) English last year.",
                answer: "studied",
                explanation: "Verbo terminado em consoante+y: y→ied = 'studied'."
            }
        ],
        wordOrder: [
            {
                words: ["I", "yesterday", "worked"],
                correct: "I worked yesterday",
                explanation: "Ordem: Sujeito + verbo no passado + complemento de tempo. 'I worked yesterday.'"
            },
            {
                words: ["She", "to", "went", "school", "last", "week"],
                correct: "She went to school last week",
                explanation: "Ordem: Sujeito + verbo irregular no passado + complemento. 'She went to school last week.'"
            },
            {
                words: ["didn't", "They", "the", "watch", "movie"],
                correct: "They didn't watch the movie",
                explanation: "Negativa: Sujeito + didn't + verbo base + objeto. 'They didn't watch the movie.'"
            },
            {
                words: ["Did", "you", "breakfast", "have", "?"],
                correct: "Did you have breakfast?",
                explanation: "Interrogativa: Did + sujeito + verbo base + objeto? 'Did you have breakfast?'"
            },
            {
                words: ["last", "We", "traveled", "month", "to", "Europe"],
                correct: "We traveled to Europe last month",
                explanation: "Ordem: Sujeito + verbo + complemento + tempo. 'We traveled to Europe last month.'"
            }
        ]
    },

    simple_future: {
        multipleChoice: [
            {
                question: "Como formar o Simple Future?",
                options: ["will + verbo base", "going to + verbo", "verbo + ing", "verbo + ed"],
                correct: 0,
                explanation: "Simple Future: will + verbo na forma base. Ex: 'I will travel tomorrow.'"
            },
            {
                question: "Complete: 'She _____ call you later.'",
                options: ["will", "is", "was", "has"],
                correct: 0,
                explanation: "'Will' é usado para formar o Simple Future. 'She will call you later.'"
            },
            {
                question: "Qual é a forma contraída de 'I will'?",
                options: ["I'm", "I'd", "I'll", "I've"],
                correct: 2,
                explanation: "A contração de 'I will' é 'I'll'. Ex: 'I'll help you.'"
            },
            {
                question: "Como formar a negativa de 'I will go'?",
                options: ["I will not go", "I won't go", "I don't will go", "Ambas A e B"],
                correct: 3,
                explanation: "Negativa: 'I will not go' ou 'I won't go' (contração). Ambas estão corretas."
            },
            {
                question: "Quando usamos Simple Future?",
                options: ["Para ações passadas", "Para decisões espontâneas e previsões", "Para ações habituais", "Para ações em progresso"],
                correct: 1,
                explanation: "Simple Future é usado para decisões espontâneas, previsões e promessas."
            }
        ],
        fillBlanks: [
            {
                sentence: "I _____ (help) you with your homework.",
                answer: "will help",
                explanation: "Simple Future: will + verbo base = 'will help'."
            },
            {
                sentence: "She _____ (not/come) to the party.",
                answer: "won't come",
                explanation: "Negativa: won't + verbo base = 'won't come'."
            },
            {
                sentence: "_____ you be there tomorrow? (Will/Do)",
                answer: "Will",
                explanation: "Interrogativa no Simple Future: Will + sujeito + verbo base. 'Will you be there?'"
            },
            {
                sentence: "It _____ (rain) tomorrow.",
                answer: "will rain",
                explanation: "Para previsões: will + verbo base = 'will rain'."
            },
            {
                sentence: "We _____ (travel) next summer.",
                answer: "will travel",
                explanation: "Para planos futuros: will + verbo base = 'will travel'."
            }
        ],
        wordOrder: [
            {
                words: ["I", "will", "tomorrow", "travel"],
                correct: "I will travel tomorrow",
                explanation: "Ordem: Sujeito + will + verbo base + complemento. 'I will travel tomorrow.'"
            },
            {
                words: ["She", "won't", "the", "attend", "meeting"],
                correct: "She won't attend the meeting",
                explanation: "Negativa: Sujeito + won't + verbo base + objeto. 'She won't attend the meeting.'"
            },
            {
                words: ["Will", "you", "me", "help", "?"],
                correct: "Will you help me?",
                explanation: "Interrogativa: Will + sujeito + verbo base + objeto? 'Will you help me?'"
            },
            {
                words: ["They", "will", "next", "move", "month"],
                correct: "They will move next month",
                explanation: "Ordem: Sujeito + will + verbo + complemento de tempo. 'They will move next month.'"
            },
            {
                words: ["It", "will", "sunny", "be", "tomorrow"],
                correct: "It will be sunny tomorrow",
                explanation: "Com verbo 'be': It + will + be + adjetivo + tempo. 'It will be sunny tomorrow.'"
            }
        ]
    },

    present_continuous: {
        multipleChoice: [
            {
                question: "Quando usamos Present Continuous?",
                options: ["Para ações habituais", "Para ações acontecendo agora", "Para ações passadas", "Para verdades universais"],
                correct: 1,
                explanation: "Present Continuous é usado para ações acontecendo no momento da fala. Ex: 'I am studying now.'"
            },
            {
                question: "Complete: 'She _____ dinner right now.'",
                options: ["cook", "cooks", "is cooking", "cooked"],
                correct: 2,
                explanation: "Present Continuous: is + verbo + ing = 'is cooking'."
            },
            {
                question: "Qual é a forma -ing de 'run'?",
                options: ["runing", "running", "runn", "runs"],
                correct: 1,
                explanation: "Verbos CVC (consoante-vogal-consoante) dobram a última consoante: 'running'."
            },
            {
                question: "Como formar a negativa de 'I am working'?",
                options: ["I am not working", "I don't working", "I not working", "I amn't working"],
                correct: 0,
                explanation: "Negativa: am/is/are + not + verbo + ing = 'I am not working'."
            },
            {
                question: "Qual palavra indica Present Continuous?",
                options: ["always", "now", "yesterday", "never"],
                correct: 1,
                explanation: "'Now' indica ação no momento presente, palavra-chave do Present Continuous."
            }
        ],
        fillBlanks: [
            {
                sentence: "I _____ (study) English right now.",
                answer: "am studying",
                explanation: "Para 'I': am + verbo + ing = 'am studying'."
            },
            {
                sentence: "They _____ (not/watch) TV at the moment.",
                answer: "aren't watching",
                explanation: "Negativa para 'they': aren't + verbo + ing = 'aren't watching'."
            },
            {
                sentence: "_____ she working today? (Is/Does)",
                answer: "Is",
                explanation: "Interrogativa no Present Continuous: Is + sujeito + verbo + ing. 'Is she working?'"
            },
            {
                sentence: "We _____ (have) lunch now.",
                answer: "are having",
                explanation: "Para 'we': are + verbo + ing = 'are having'."
            },
            {
                sentence: "He _____ (run) in the park.",
                answer: "is running",
                explanation: "Para 'he': is + verbo + ing. 'Run' → 'running' (dobra o 'n')."
            }
        ],
        wordOrder: [
            {
                words: ["I", "am", "now", "studying"],
                correct: "I am studying now",
                explanation: "Ordem: Sujeito + am/is/are + verbo + ing + tempo. 'I am studying now.'"
            },
            {
                words: ["She", "is", "dinner", "cooking"],
                correct: "She is cooking dinner",
                explanation: "Ordem: Sujeito + is + verbo + ing + objeto. 'She is cooking dinner.'"
            },
            {
                words: ["aren't", "They", "TV", "watching"],
                correct: "They aren't watching TV",
                explanation: "Negativa: Sujeito + aren't + verbo + ing + objeto. 'They aren't watching TV.'"
            },
            {
                words: ["Are", "you", "English", "learning", "?"],
                correct: "Are you learning English?",
                explanation: "Interrogativa: Are + sujeito + verbo + ing + objeto? 'Are you learning English?'"
            },
            {
                words: ["We", "are", "to", "listening", "music"],
                correct: "We are listening to music",
                explanation: "Ordem: Sujeito + are + verbo + ing + preposição + objeto. 'We are listening to music.'"
            }
        ]
    },

    present_perfect: {
        multipleChoice: [
            {
                question: "Quando usamos Present Perfect?",
                options: ["Para ações em tempo específico passado", "Para experiências de vida sem tempo específico", "Para ações futuras", "Para ações habituais"],
                correct: 1,
                explanation: "Present Perfect é usado para experiências sem tempo específico. Ex: 'I have been to Japan.'"
            },
            {
                question: "Complete: 'She _____ never _____ sushi.'",
                options: ["has/eat", "have/eaten", "has/eaten", "had/ate"],
                correct: 2,
                explanation: "Para 'she': has + past participle = 'has eaten'. 'She has never eaten sushi.'"
            },
            {
                question: "Qual é o past participle de 'go'?",
                options: ["went", "gone", "going", "goed"],
                correct: 1,
                explanation: "'Go' é irregular: go-went-gone. Past participle = 'gone'."
            },
            {
                question: "Qual palavra é típica do Present Perfect?",
                options: ["yesterday", "now", "already", "tomorrow"],
                correct: 2,
                explanation: "'Already' é palavra-chave do Present Perfect, indicando ação já completada."
            },
            {
                question: "Como formar a negativa de 'I have finished'?",
                options: ["I haven't finished", "I don't have finished", "I not have finished", "I hasn't finished"],
                correct: 0,
                explanation: "Negativa: haven't/hasn't + past participle = 'I haven't finished'."
            }
        ],
        fillBlanks: [
            {
                sentence: "I _____ (finish) my homework.",
                answer: "have finished",
                explanation: "Para 'I': have + past participle = 'have finished'."
            },
            {
                sentence: "She _____ (not/see) that movie yet.",
                answer: "hasn't seen",
                explanation: "Negativa para 'she': hasn't + past participle = 'hasn't seen'."
            },
            {
                sentence: "_____ you ever been to London? (Have/Did)",
                answer: "Have",
                explanation: "Para experiências: Have + sujeito + ever + past participle. 'Have you ever been?'"
            },
            {
                sentence: "They _____ (live) here for 5 years.",
                answer: "have lived",
                explanation: "Para duração até agora: have + past participle = 'have lived'."
            },
            {
                sentence: "He _____ just _____ (arrive).",
                answer: "has arrived",
                explanation: "Para 'he' com 'just': has + past participle = 'has arrived'."
            }
        ],
        wordOrder: [
            {
                words: ["I", "have", "my", "finished", "homework"],
                correct: "I have finished my homework",
                explanation: "Ordem: Sujeito + have + past participle + objeto. 'I have finished my homework.'"
            },
            {
                words: ["She", "has", "never", "sushi", "eaten"],
                correct: "She has never eaten sushi",
                explanation: "Com 'never': Sujeito + has + never + past participle + objeto. 'She has never eaten sushi.'"
            },
            {
                words: ["haven't", "We", "the", "seen", "movie"],
                correct: "We haven't seen the movie",
                explanation: "Negativa: Sujeito + haven't + past participle + objeto. 'We haven't seen the movie.'"
            },
            {
                words: ["Have", "you", "ever", "to", "been", "Paris", "?"],
                correct: "Have you ever been to Paris?",
                explanation: "Experiência: Have + sujeito + ever + past participle + complemento? 'Have you ever been to Paris?'"
            },
            {
                words: ["They", "have", "here", "lived", "for", "years", "5"],
                correct: "They have lived here for 5 years",
                explanation: "Duração: Sujeito + have + past participle + lugar + for + tempo. 'They have lived here for 5 years.'"
            }
        ]
    }
};

// Activity management functions
class ActivityManager {
    constructor() {
        this.currentTense = null;
        this.currentActivityType = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = 0;
        this.userAnswers = [];
    }

    initializeActivities(tense) {
        this.currentTense = tense;
        this.currentActivityType = 'multipleChoice';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = 0;
        this.userAnswers = [];
        
        this.renderActivityTabs();
        this.showActivity('multipleChoice');
    }

    renderActivityTabs() {
        const tabsContainer = document.querySelector('.activity-tabs');
        if (!tabsContainer) return;

        tabsContainer.innerHTML = `
            <div class="activity-tab active" data-activity="multipleChoice">
                📝 Múltipla Escolha
            </div>
            <div class="activity-tab" data-activity="fillBlanks">
                ✏️ Preencher Lacunas
            </div>
            <div class="activity-tab" data-activity="wordOrder">
                🔤 Organizar Palavras
            </div>
        `;

        // Add event listeners to tabs
        tabsContainer.querySelectorAll('.activity-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const activityType = tab.dataset.activity;
                this.showActivity(activityType);
                
                // Update active tab
                tabsContainer.querySelectorAll('.activity-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }

    showActivity(activityType) {
        this.currentActivityType = activityType;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];

        const activities = activitiesData[this.currentTense];
        if (!activities || !activities[activityType]) return;

        this.totalQuestions = activities[activityType].length;

        // Hide all activity contents
        document.querySelectorAll('.activity-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show current activity content
        const contentContainer = document.getElementById(`${activityType}Content`);
        if (contentContainer) {
            contentContainer.classList.add('active');
            this.renderQuestion();
        } else {
            this.createActivityContent(activityType);
        }
    }

    createActivityContent(activityType) {
        const activitiesSection = document.querySelector('.activities-section');
        if (!activitiesSection) return;

        // Remove existing content
        const existingContent = document.getElementById(`${activityType}Content`);
        if (existingContent) {
            existingContent.remove();
        }

        const contentDiv = document.createElement('div');
        contentDiv.id = `${activityType}Content`;
        contentDiv.className = 'activity-content active';

        activitiesSection.appendChild(contentDiv);
        this.renderQuestion();
    }

    renderQuestion() {
        const activities = activitiesData[this.currentTense];
        const questions = activities[this.currentActivityType];
        const question = questions[this.currentQuestionIndex];

        const contentContainer = document.getElementById(`${this.currentActivityType}Content`);
        if (!contentContainer) return;

        let html = `
            <div class="score-display">
                <div class="score-text">Questão ${this.currentQuestionIndex + 1} de ${this.totalQuestions} | Pontuação: ${this.score}/${this.totalQuestions}</div>
            </div>
        `;

        if (this.currentActivityType === 'multipleChoice') {
            html += this.renderMultipleChoice(question);
        } else if (this.currentActivityType === 'fillBlanks') {
            html += this.renderFillBlanks(question);
        } else if (this.currentActivityType === 'wordOrder') {
            html += this.renderWordOrder(question);
        }

        contentContainer.innerHTML = html;
        this.attachEventListeners();
    }

    renderMultipleChoice(question) {
        return `
            <div class="question">
                <div class="question-text">${question.question}</div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" data-index="${index}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <div class="feedback" id="feedback"></div>
            </div>
        `;
    }

    renderFillBlanks(question) {
        return `
            <div class="question">
                <div class="question-text">Complete a frase:</div>
                <div class="question-text" style="font-size: 1.2rem; margin: 15px 0;">
                    "${question.sentence}"
                </div>
                <input type="text" class="input-field" id="answerInput" placeholder="Digite sua resposta...">
                <button class="check-button" onclick="activityManager.checkFillBlanks()">Verificar Resposta</button>
                <div class="feedback" id="feedback"></div>
            </div>
        `;
    }

    renderWordOrder(question) {
        const shuffledWords = [...question.words].sort(() => Math.random() - 0.5);
        
        return `
            <div class="question">
                <div class="question-text">Organize as palavras para formar uma frase correta:</div>
                <div class="word-bank" id="wordBank">
                    ${shuffledWords.map(word => `
                        <div class="word-item" data-word="${word}">${word}</div>
                    `).join('')}
                </div>
                <div class="sentence-builder" id="sentenceBuilder">
                    <span style="color: #999;">Arraste as palavras aqui...</span>
                </div>
                <button class="check-button" onclick="activityManager.checkWordOrder()">Verificar Resposta</button>
                <div class="feedback" id="feedback"></div>
            </div>
        `;
    }

    attachEventListeners() {
        if (this.currentActivityType === 'multipleChoice') {
            document.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', () => {
                    const selectedIndex = parseInt(option.dataset.index);
                    this.checkMultipleChoice(selectedIndex);
                });
            });
        } else if (this.currentActivityType === 'fillBlanks') {
            const input = document.getElementById('answerInput');
            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.checkFillBlanks();
                    }
                });
            }
        } else if (this.currentActivityType === 'wordOrder') {
            this.setupWordOrderInteraction();
        }
    }

    setupWordOrderInteraction() {
        const wordBank = document.getElementById('wordBank');
        const sentenceBuilder = document.getElementById('sentenceBuilder');
        
        if (!wordBank || !sentenceBuilder) return;

        wordBank.addEventListener('click', (e) => {
            if (e.target.classList.contains('word-item') && !e.target.classList.contains('used')) {
                const word = e.target.dataset.word;
                this.addWordToSentence(word);
                e.target.classList.add('used');
            }
        });

        sentenceBuilder.addEventListener('click', (e) => {
            if (e.target.classList.contains('word-item')) {
                const word = e.target.dataset.word;
                this.removeWordFromSentence(word);
                
                // Return word to bank
                const wordInBank = wordBank.querySelector(`[data-word="${word}"]`);
                if (wordInBank) {
                    wordInBank.classList.remove('used');
                }
            }
        });
    }

    addWordToSentence(word) {
        const sentenceBuilder = document.getElementById('sentenceBuilder');
        if (!sentenceBuilder) return;

        // Remove placeholder text
        if (sentenceBuilder.children.length === 1 && sentenceBuilder.children[0].tagName === 'SPAN') {
            sentenceBuilder.innerHTML = '';
        }

        const wordElement = document.createElement('div');
        wordElement.className = 'word-item';
        wordElement.dataset.word = word;
        wordElement.textContent = word;
        
        sentenceBuilder.appendChild(wordElement);
        sentenceBuilder.classList.add('has-words');
    }

    removeWordFromSentence(word) {
        const sentenceBuilder = document.getElementById('sentenceBuilder');
        if (!sentenceBuilder) return;

        const wordElement = sentenceBuilder.querySelector(`[data-word="${word}"]`);
        if (wordElement) {
            wordElement.remove();
        }

        if (sentenceBuilder.children.length === 0) {
            sentenceBuilder.innerHTML = '<span style="color: #999;">Arraste as palavras aqui...</span>';
            sentenceBuilder.classList.remove('has-words');
        }
    }

    checkMultipleChoice(selectedIndex) {
        const activities = activitiesData[this.currentTense];
        const question = activities[this.currentActivityType][this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;

        // Update UI
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });

        this.showFeedback(isCorrect, question.explanation);
        
        if (isCorrect) {
            this.score++;
        }

        setTimeout(() => {
            this.nextQuestion();
        }, 3000);
    }

    checkFillBlanks() {
        const input = document.getElementById('answerInput');
        if (!input) return;

        const userAnswer = input.value.trim().toLowerCase();
        const activities = activitiesData[this.currentTense];
        const question = activities[this.currentActivityType][this.currentQuestionIndex];
        const correctAnswer = question.answer.toLowerCase();

        const isCorrect = userAnswer === correctAnswer;

        input.disabled = true;
        input.style.backgroundColor = isCorrect ? '#e8f5e8' : '#ffebee';

        this.showFeedback(isCorrect, question.explanation);
        
        if (isCorrect) {
            this.score++;
        }

        setTimeout(() => {
            this.nextQuestion();
        }, 3000);
    }

    checkWordOrder() {
        const sentenceBuilder = document.getElementById('sentenceBuilder');
        if (!sentenceBuilder) return;

        const userWords = Array.from(sentenceBuilder.querySelectorAll('.word-item')).map(el => el.dataset.word);
        const userSentence = userWords.join(' ');

        const activities = activitiesData[this.currentTense];
        const question = activities[this.currentActivityType][this.currentQuestionIndex];
        const correctSentence = question.correct;

        const isCorrect = userSentence.toLowerCase() === correctSentence.toLowerCase();

        // Disable interaction
        sentenceBuilder.style.pointerEvents = 'none';
        document.getElementById('wordBank').style.pointerEvents = 'none';

        sentenceBuilder.style.backgroundColor = isCorrect ? '#e8f5e8' : '#ffebee';

        this.showFeedback(isCorrect, question.explanation);
        
        if (isCorrect) {
            this.score++;
        }

        setTimeout(() => {
            this.nextQuestion();
        }, 3000);
    }

    showFeedback(isCorrect, explanation) {
        const feedback = document.getElementById('feedback');
        if (!feedback) return;

        feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `
            <strong>${isCorrect ? '✅ Correto!' : '❌ Incorreto'}</strong><br>
            ${explanation}
        `;
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= this.totalQuestions) {
            this.showResults();
        } else {
            this.renderQuestion();
        }
    }

    showResults() {
        const contentContainer = document.getElementById(`${this.currentActivityType}Content`);
        if (!contentContainer) return;

        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        let message = '';
        
        if (percentage >= 80) {
            message = '🎉 Excelente! Você domina este tempo verbal!';
        } else if (percentage >= 60) {
            message = '👍 Bom trabalho! Continue praticando!';
        } else {
            message = '📚 Continue estudando! A prática leva à perfeição!';
        }

        contentContainer.innerHTML = `
            <div class="question">
                <div style="text-align: center; padding: 40px;">
                    <h3 style="color: #2a5298; margin-bottom: 20px;">Atividade Concluída!</h3>
                    <div style="font-size: 3rem; margin-bottom: 20px;">${percentage >= 80 ? '🏆' : percentage >= 60 ? '🎯' : '📖'}</div>
                    <div style="font-size: 1.5rem; margin-bottom: 15px;">
                        Pontuação: ${this.score}/${this.totalQuestions} (${percentage}%)
                    </div>
                    <div style="font-size: 1.1rem; color: #666; margin-bottom: 30px;">
                        ${message}
                    </div>
                    <button class="check-button" onclick="activityManager.restartActivity()" style="margin-right: 10px;">
                        🔄 Tentar Novamente
                    </button>
                    <button class="check-button" onclick="activityManager.showNextActivityType()" style="background: #ff9800;">
                        ➡️ Próxima Atividade
                    </button>
                </div>
            </div>
        `;
    }

    restartActivity() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.renderQuestion();
    }

    showNextActivityType() {
        const activityTypes = ['multipleChoice', 'fillBlanks', 'wordOrder'];
        const currentIndex = activityTypes.indexOf(this.currentActivityType);
        const nextIndex = (currentIndex + 1) % activityTypes.length;
        const nextType = activityTypes[nextIndex];

        // Update active tab
        document.querySelectorAll('.activity-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.activity === nextType) {
                tab.classList.add('active');
            }
        });

        this.showActivity(nextType);
    }
}

// Initialize activity manager
const activityManager = new ActivityManager();

