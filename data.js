// Data structure for all tenses with detailed grammar explanations
const tensesData = {
    simple_present: {
        name: "Simple Present",
        emoji: "🌅",
        description: "O tempo verbal mais usado no inglês para rotinas, hábitos e verdades universais",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Subject + verb (base form) + complement",
                negative: "Subject + don't/doesn't + verb (base form) + complement",
                interrogative: "Do/Does + subject + verb (base form) + complement?",
                examples: [
                    "I work every day. (Affirmative)",
                    "I don't work on Sundays. (Negative)", 
                    "Do you work here? (Interrogative)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "For I, you, we, they: use the base form of the verb",
                    "For he, she, it: add -s, -es or -ies to the verb",
                    "Verbs ending in -s, -sh, -ch, -x, -z: add -es",
                    "Verbs ending in consonant + y: change y to ies"
                ],
                examples: [
                    "I play → He plays",
                    "I watch → She watches", 
                    "I study → He studies"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "always", "usually", "often",
                    "sometimes", "never", "every day",
                    "on Mondays", "in the morning"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Rotinas e hábitos",
                        explanation: "Para ações que fazemos regularmente",
                        examples: [
                            { en: "I wake up at 7 AM every day", pt: "Eu acordo às 7 da manhã todos os dias" },
                            { en: "She drinks coffee in the morning", pt: "Ela toma café de manhã" }
                        ]
                    },
                    {
                        case: "Verdades universais e fatos",
                        explanation: "Para coisas que são sempre verdadeiras",
                        examples: [
                            { en: "The sun rises in the east", pt: "O sol nasce no leste" },
                            { en: "Water boils at 100°C", pt: "A água ferve a 100°C" }
                        ]
                    },
                    {
                        case: "Gostos e preferências",
                        explanation: "Para expressar o que gostamos ou não gostamos",
                        examples: [
                            { en: "I like pizza", pt: "Eu gosto de pizza" },
                            { en: "He loves music", pt: "Ele ama música" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Falando sobre seu trabalho: 'I work at a bank' (Eu trabalho em um banco)",
            "Descrevendo família: 'My sister lives in São Paulo' (Minha irmã mora em São Paulo)",
            "Hobbies: 'We play soccer on weekends' (Nós jogamos futebol nos fins de semana)"
        ]
    },

    simple_past: {
        name: "Simple Past",
        emoji: "📖",
        description: "Para falar de ações que aconteceram e terminaram no passado",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Subject + past verb + complement",
                negative: "Subject + didn't + verb (base form) + complement",
                interrogative: "Did + subject + verb (base form) + complement?",
                examples: [
                    "I worked yesterday. (Afirmativa)",
                    "I didn't work yesterday. (Negativa)",
                    "Did you work yesterday? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "Regular verbs: add -ed to the base form",
                    "Verbs ending in -e: add only -d",
                    "Verbs ending in consonant + y: change y to ied",
                    "Irregular verbs: memorize the special forms"
                ],
                examples: [
                    "work → worked", "live → lived", "study → studied",
                    "go → went", "see → saw", "have → had"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "yesterday (ontem)", "last week/month/year (semana/mês/ano passado)",
                    "ago (atrás)", "in 2020 (em 2020)", "when I was young (quando eu era jovem)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Eventos específicos no passado",
                        explanation: "Para ações que aconteceram em um momento específico",
                        examples: [
                            { en: "I traveled to Europe last year", pt: "Eu viajei para a Europa ano passado" },
                            { en: "She graduated in 2020", pt: "Ela se formou em 2020" }
                        ]
                    },
                    {
                        case: "Sequência de eventos",
                        explanation: "Para contar uma história ou sequência de ações",
                        examples: [
                            { en: "I woke up, had breakfast, and went to work", pt: "Eu acordei, tomei café e fui trabalhar" },
                            { en: "He arrived, opened the door, and sat down", pt: "Ele chegou, abriu a porta e se sentou" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Contando sobre o fim de semana: 'Yesterday I watched a movie' (Ontem eu assisti um filme)",
            "Falando de experiências: 'I visited my grandmother last month' (Eu visitei minha avó mês passado)"
        ]
    },

    simple_future: {
        name: "Simple Future",
        emoji: "🔮",
        description: "Para falar sobre ações que vão acontecer no futuro",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Subject + will + verb (base form) + complement",
                negative: "Subject + won't + verb (base form) + complement",
                interrogative: "Will + subject + verb (base form) + complement?",
                examples: [
                    "I will travel tomorrow. (Afirmativa)",
                    "I won't travel tomorrow. (Negativa)",
                    "Will you travel tomorrow? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "Use 'will' para todos os pronomes (I, you, he, she, it, we, they)",
                    "Forma contraída: I'll, you'll, he'll, she'll, we'll, they'll",
                    "Negativa contraída: won't (will not)",
                    "O verbo principal sempre fica na forma base"
                ],
                examples: [
                    "I will go → I'll go",
                    "She will not come → She won't come",
                    "They will study → They'll study"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "tomorrow (amanhã)", "next week/month/year (próxima semana/mês/ano)",
                    "soon (em breve)", "later (mais tarde)", "in the future (no futuro)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Decisões espontâneas",
                        explanation: "Para decisões tomadas no momento da fala",
                        examples: [
                            { en: "I will help you", pt: "Eu vou te ajudar" },
                            { en: "We will see", pt: "Nós veremos" }
                        ]
                    },
                    {
                        case: "Previsões",
                        explanation: "Para fazer previsões sobre o futuro",
                        examples: [
                            { en: "It will rain tomorrow", pt: "Vai chover amanhã" },
                            { en: "She will be a great doctor", pt: "Ela será uma ótima médica" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Fazendo promessas: 'I will call you later' (Eu vou te ligar mais tarde)",
            "Planos: 'We will travel next summer' (Nós vamos viajar no próximo verão)"
        ]
    },

    present_continuous: {
        name: "Present Continuous",
        emoji: "⚡",
        description: "Para ações que estão acontecendo agora ou temporariamente",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Subject + am/is/are + verb + ing + complement",
                negative: "Subject + am/is/are + not + verb + ing + complement",
                interrogative: "Am/Is/Are + subject + verb + ing + complement?",
                examples: [
                    "I am studying now. (Afirmativa)",
                    "I am not studying now. (Negativa)",
                    "Are you studying now? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "I am (I'm), You are (You're), He/She/It is (He's/She's/It's)",
                    "We are (We're), They are (They're)",
                    "Verbos terminados em -e: retire o -e e adicione -ing",
                    "Verbos de uma sílaba terminados em consoante-vogal-consoante: dobre a última consoante"
                ],
                examples: [
                    "work → working", "make → making", "run → running", "swim → swimming"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "now (agora)", "right now (agora mesmo)", "at the moment (no momento)",
                    "currently (atualmente)", "today (hoje)", "this week (esta semana)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Ações no momento exato",
                        explanation: "Para ações que estão acontecendo agora",
                        examples: [
                            { en: "I am studying right now", pt: "Eu estou estudando agora" },
                            { en: "She is cooking dinner", pt: "Ela está cozinhando o jantar" }
                        ]
                    },
                    {
                        case: "Situações temporárias",
                        explanation: "Para situações que não são permanentes",
                        examples: [
                            { en: "I am living with my parents this month", pt: "Eu estou morando com meus pais este mês" },
                            { en: "He is working from home today", pt: "Ele está trabalhando de casa hoje" }
                        ]
                    },
                    {
                        case: "Planos futuros já decididos",
                        explanation: "Para planos já organizados para o futuro próximo",
                        examples: [
                            { en: "I am meeting my friend tomorrow", pt: "Eu vou encontrar meu amigo amanhã" },
                            { en: "We are traveling next week", pt: "Nós vamos viajar semana que vem" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "No telefone: 'Sorry, I am driving' (Desculpa, eu estou dirigindo)",
            "Explicando ausência: 'I am taking English classes' (Eu estou fazendo aulas de inglês)"
        ]
    },

    past_continuous: {
        name: "Past Continuous",
        emoji: "🔄",
        description: "Para ações que estavam em progresso no passado",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Subject + was/were + verb + ing + complement",
                negative: "Subject + wasn't/weren't + verb + ing + complement",
                interrogative: "Was/Were + subject + verb + ing + complement?",
                examples: [
                    "I was sleeping when you called. (Afirmativa)",
                    "I wasn't sleeping when you called. (Negativa)",
                    "Were you sleeping when I called? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "I/He/She/It was + verbo + ing",
                    "You/We/They were + verbo + ing",
                    "Mesmas regras do -ing do Present Continuous",
                    "Frequentemente usado com 'when' e 'while'"
                ],
                examples: [
                    "I was working", "You were studying", "She was reading", "They were playing"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "when (quando)", "while (enquanto)", "as (enquanto)",
                    "at 8 PM yesterday (às 8h ontem)", "all day (o dia todo)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Ação interrompida",
                        explanation: "Para ação que estava acontecendo quando outra aconteceu",
                        examples: [
                            { en: "I was sleeping when you called", pt: "Eu estava dormindo quando você ligou" },
                            { en: "She was studying when the power went out", pt: "Ela estava estudando quando a luz acabou" }
                        ]
                    },
                    {
                        case: "Duas ações simultâneas",
                        explanation: "Para duas ações que aconteciam ao mesmo tempo",
                        examples: [
                            { en: "While I was cooking, he was watching TV", pt: "Enquanto eu estava cozinhando, ele estava assistindo TV" },
                            { en: "They were talking while walking", pt: "Eles estavam conversando enquanto caminhavam" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Explicando o que aconteceu: 'I was walking to work when it started raining' (Eu estava caminhando para o trabalho quando começou a chover)"
        ]
    },

    future_continuous: {
        name: "Future Continuous",
        emoji: "🌊",
        description: "Para ações que estarão em progresso no futuro",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Subject + will be + verb + ing + complement",
                negative: "Subject + won't be + verb + ing + complement",
                interrogative: "Will + subject + be + verb + ing + complement?",
                examples: [
                    "I will be working at 8 PM. (Afirmativa)",
                    "I won't be working at 8 PM. (Negativa)",
                    "Will you be working at 8 PM? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "Will be é igual para todos os pronomes",
                    "Mesmas regras do -ing dos outros tempos contínuos",
                    "Usado para ações em progresso em momento específico futuro"
                ],
                examples: [
                    "I will be studying", "She will be working", "They will be traveling"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "at this time tomorrow (nesta hora amanhã)", "at 8 PM tonight (às 8h hoje à noite)",
                    "next week at this time (semana que vem nesta hora)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Ações em progresso em momento específico futuro",
                        explanation: "Para ações que estarão acontecendo em um momento específico",
                        examples: [
                            { en: "At 8 PM, I will be watching the game", pt: "Às 8 da noite, eu estarei assistindo o jogo" },
                            { en: "This time tomorrow, we will be flying to Paris", pt: "Nesta hora amanhã, nós estaremos voando para Paris" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Planejamento: 'I will be working late tonight' (Eu estarei trabalhando até tarde hoje à noite)"
        ]
    },

    present_perfect: {
        name: "Present Perfect",
        emoji: "🔗",
        description: "Conecta o passado com o presente - muito importante!",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Sujeito + have/has + past participle + complemento",
                negative: "Sujeito + haven't/hasn't + past participle + complemento",
                interrogative: "Have/Has + sujeito + past participle + complemento?",
                examples: [
                    "I have finished my homework. (Afirmativa)",
                    "I haven't finished my homework. (Negativa)",
                    "Have you finished your homework? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "I/You/We/They have + past participle",
                    "He/She/It has + past participle",
                    "Past participle: verbos regulares = verbo + ed",
                    "Past participle: verbos irregulares = terceira coluna"
                ],
                examples: [
                    "work → worked", "go → gone", "see → seen", "eat → eaten"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "already (já)", "just (acabou de)", "ever (alguma vez)", "never (nunca)",
                    "since (desde)", "for (há/por)", "yet (ainda)", "recently (recentemente)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Experiências de vida (sem tempo específico)",
                        explanation: "Para falar de experiências sem mencionar quando",
                        examples: [
                            { en: "I have been to Japan", pt: "Eu já fui ao Japão" },
                            { en: "She has never eaten sushi", pt: "Ela nunca comeu sushi" }
                        ]
                    },
                    {
                        case: "Ações passadas com resultado presente",
                        explanation: "Para ações que aconteceram e têm resultado agora",
                        examples: [
                            { en: "I have finished my homework", pt: "Eu terminei minha lição de casa (e agora está pronta)" },
                            { en: "He has lost his keys", pt: "Ele perdeu as chaves (e ainda não as encontrou)" }
                        ]
                    },
                    {
                        case: "Ações que começaram no passado e continuam",
                        explanation: "Para ações que começaram antes e ainda acontecem",
                        examples: [
                            { en: "I have lived here for 5 years", pt: "Eu moro aqui há 5 anos" },
                            { en: "She has worked there since 2020", pt: "Ela trabalha lá desde 2020" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Falando de experiências: 'Have you ever been to New York?' (Você já foi a Nova York?)",
            "Resultados: 'I have already done the dishes' (Eu já lavei a louça)"
        ]
    },

    past_perfect: {
        name: "Past Perfect",
        emoji: "⏪",
        description: "Para mostrar que algo aconteceu antes de outra coisa no passado",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Sujeito + had + past participle + complemento",
                negative: "Sujeito + hadn't + past participle + complemento",
                interrogative: "Had + sujeito + past participle + complemento?",
                examples: [
                    "I had finished before you arrived. (Afirmativa)",
                    "I hadn't finished before you arrived. (Negativa)",
                    "Had you finished before I arrived? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "Had é igual para todos os pronomes",
                    "Sempre use o past participle",
                    "Mostra sequência temporal no passado",
                    "Frequentemente usado com 'before', 'after', 'when'"
                ],
                examples: [
                    "I had worked", "She had gone", "They had seen", "We had eaten"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "before (antes)", "after (depois)", "when (quando)",
                    "by the time (quando)", "already (já)", "just (acabou de)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Sequência de eventos no passado",
                        explanation: "Para mostrar qual ação aconteceu primeiro",
                        examples: [
                            { en: "When I arrived, she had already left", pt: "Quando eu cheguei, ela já tinha saído" },
                            { en: "I had studied English before moving to the US", pt: "Eu tinha estudado inglês antes de me mudar para os EUA" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Explicando sequências: 'I had never seen snow before I visited Canada' (Eu nunca tinha visto neve antes de visitar o Canadá)"
        ]
    },

    future_perfect: {
        name: "Future Perfect",
        emoji: "⏩",
        description: "Para ações que estarão completas antes de um momento futuro",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Sujeito + will have + past participle + complemento",
                negative: "Sujeito + won't have + past participle + complemento",
                interrogative: "Will + sujeito + have + past participle + complemento?",
                examples: [
                    "I will have graduated by next year. (Afirmativa)",
                    "I won't have graduated by next year. (Negativa)",
                    "Will you have graduated by next year? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "Will have é igual para todos os pronomes",
                    "Sempre use o past participle",
                    "Indica conclusão antes de um prazo futuro"
                ],
                examples: [
                    "I will have finished", "She will have arrived", "They will have completed"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "by (até)", "by the time (quando)", "before (antes)",
                    "by next year (até o ano que vem)", "by Friday (até sexta-feira)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Ações que estarão terminadas antes de um prazo",
                        explanation: "Para ações que estarão completas antes de um momento específico",
                        examples: [
                            { en: "By next year, I will have graduated", pt: "Até o ano que vem, eu terei me formado" },
                            { en: "She will have finished the project by Friday", pt: "Ela terá terminado o projeto até sexta-feira" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Metas: 'By the end of this year, I will have learned English' (Até o final deste ano, eu terei aprendido inglês)"
        ]
    },

    present_perfect_continuous: {
        name: "Present Perfect Continuous",
        emoji: "🔄",
        description: "Enfatiza a duração de uma ação que começou no passado e continua",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Sujeito + have/has been + verbo + ing + complemento",
                negative: "Sujeito + haven't/hasn't been + verbo + ing + complemento",
                interrogative: "Have/Has + sujeito + been + verbo + ing + complemento?",
                examples: [
                    "I have been studying for 2 hours. (Afirmativa)",
                    "I haven't been studying for 2 hours. (Negativa)",
                    "Have you been studying for 2 hours? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "I/You/We/They have been + verbo + ing",
                    "He/She/It has been + verbo + ing",
                    "Enfatiza a duração da ação",
                    "Usado com 'for' e 'since'"
                ],
                examples: [
                    "I have been working", "She has been studying", "They have been waiting"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "for (há/por)", "since (desde)", "all day (o dia todo)",
                    "how long (há quanto tempo)", "lately (ultimamente)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Ações contínuas com duração específica",
                        explanation: "Para enfatizar quanto tempo uma ação está acontecendo",
                        examples: [
                            { en: "I have been studying English for 2 years", pt: "Eu estudo inglês há 2 anos" },
                            { en: "She has been working here since January", pt: "Ela trabalha aqui desde janeiro" }
                        ]
                    },
                    {
                        case: "Ações recentes com resultado visível",
                        explanation: "Para ações que explicam uma situação atual",
                        examples: [
                            { en: "You look tired. Have you been working?", pt: "Você parece cansado. Você tem trabalhado?" },
                            { en: "It has been raining. The streets are wet.", pt: "Tem chovido. As ruas estão molhadas." }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Explicando cansaço: 'I have been studying all day' (Eu estive estudando o dia todo)"
        ]
    },

    past_perfect_continuous: {
        name: "Past Perfect Continuous",
        emoji: "⏪",
        description: "Para ações contínuas que duraram até um ponto no passado",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Sujeito + had been + verbo + ing + complemento",
                negative: "Sujeito + hadn't been + verbo + ing + complemento",
                interrogative: "Had + sujeito + been + verbo + ing + complemento?",
                examples: [
                    "I had been waiting for 2 hours when she arrived. (Afirmativa)",
                    "I hadn't been waiting long when she arrived. (Negativa)",
                    "Had you been waiting long when she arrived? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "Had been é igual para todos os pronomes",
                    "Sempre adicione -ing ao verbo principal",
                    "Enfatiza duração até um ponto no passado"
                ],
                examples: [
                    "I had been working", "She had been studying", "They had been waiting"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "for (por)", "since (desde)", "when (quando)", "before (antes)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Duração antes de outro evento passado",
                        explanation: "Para mostrar quanto tempo algo durou antes de outra ação",
                        examples: [
                            { en: "I had been waiting for 2 hours when she arrived", pt: "Eu estava esperando há 2 horas quando ela chegou" },
                            { en: "They had been living there for 5 years before they moved", pt: "Eles moravam lá há 5 anos antes de se mudarem" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Explicando situações: 'I had been living there for 5 years before I moved' (Eu morava lá há 5 anos antes de me mudar)"
        ]
    },

    future_perfect_continuous: {
        name: "Future Perfect Continuous",
        emoji: "⏩",
        description: "Para ações que estarão durando até um ponto no futuro",
        grammar: {
            structure: {
                title: "Estrutura",
                affirmative: "Sujeito + will have been + verbo + ing + complemento",
                negative: "Sujeito + won't have been + verbo + ing + complemento",
                interrogative: "Will + sujeito + have been + verbo + ing + complemento?",
                examples: [
                    "I will have been working here for 5 years by December. (Afirmativa)",
                    "I won't have been working here for 5 years by December. (Negativa)",
                    "Will you have been working here for 5 years by December? (Interrogativa)"
                ]
            },
            rules: {
                title: "Regras de Conjugação",
                content: [
                    "Will have been é igual para todos os pronomes",
                    "Sempre adicione -ing ao verbo principal",
                    "Enfatiza duração até um ponto futuro"
                ],
                examples: [
                    "I will have been studying", "She will have been working", "They will have been living"
                ]
            },
            keywords: {
                title: "Palavras-chave",
                content: [
                    "by (até)", "for (por)", "by the time (quando)", "by next year (até o ano que vem)"
                ]
            },
            usage: {
                title: "Quando usar",
                cases: [
                    {
                        case: "Duração até um momento futuro",
                        explanation: "Para enfatizar quanto tempo algo terá durado até um ponto futuro",
                        examples: [
                            { en: "By December, I will have been working here for 5 years", pt: "Em dezembro, eu terei trabalhado aqui por 5 anos" },
                            { en: "Next month, we will have been married for 10 years", pt: "Mês que vem, nós teremos estado casados por 10 anos" }
                        ]
                    }
                ]
            }
        },
        dailySituations: [
            "Marcos temporais: 'Next month, we will have been married for 10 years' (Mês que vem, nós teremos estado casados por 10 anos)"
        ]
    }
};

// Tips and common errors
const tips = {
    keywords: [
        "Simple Present: always, usually, often, sometimes, never, every day",
        "Present Continuous: now, right now, at the moment, currently",
        "Simple Past: yesterday, last week, ago, in 2020",
        "Present Perfect: already, just, ever, never, since, for",
        "Future: tomorrow, next week, will, going to"
    ],
    commonErrors: [
        { wrong: "I am having 25 years", correct: "I am 25 years old" },
        { wrong: "I am studying English since 2020", correct: "I have been studying English since 2020" },
        { wrong: "I go to the beach yesterday", correct: "I went to the beach yesterday" },
        { wrong: "She don't like coffee", correct: "She doesn't like coffee" },
        { wrong: "I have seen him yesterday", correct: "I saw him yesterday" }
    ],
    practice: [
        "Descreva sua rotina usando Simple Present",
        "Conte o que fez ontem usando Simple Past",
        "Fale sobre seus planos usando Future",
        "Descreva suas experiências usando Present Perfect"
    ]
};

