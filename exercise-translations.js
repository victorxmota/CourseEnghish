// Traduções para enunciados dos exercícios
const exerciseTranslations = {
    pt: {
        // Multiple Choice questions
        "Qual tempo verbal é usado para ações habituais e rotinas?": "Qual tempo verbal é usado para ações habituais e rotinas?",
        "Complete: 'She _____ coffee every morning.'": "Complete: 'She _____ coffee every morning.'",
        "Qual palavra-chave indica Simple Present?": "Qual palavra-chave indica Simple Present?",
        "Como formar a negativa de 'I work'?": "Como formar a negativa de 'I work'?",
        "Qual frase está correta?": "Qual frase está correta?",
        "Quando usamos Simple Past?": "Quando usamos Simple Past?",
        
        // Fill in the blanks instructions
        "Complete a frase:": "Complete a frase:",
        "Digite sua resposta...": "Digite sua resposta...",
        
        // Word order instructions  
        "Organize as palavras para formar uma frase correta:": "Organize as palavras para formar uma frase correta:",
        "Arraste as palavras aqui...": "Arraste as palavras aqui...",
        
        // Feedback
        "Correto!": "Correto!",
        "Incorreto": "Incorreto",
        "Verificar Resposta": "Verificar Resposta",
        "Atividade Completada!": "Atividade Completada!",
        "Pontuação": "Pontuação",
        "Tentar Novamente": "Tentar Novamente",
        "Próxima Atividade": "Próxima Atividade"
    },
    
    es: {
        // Multiple Choice questions
        "Qual tempo verbal é usado para ações habituais e rotinas?": "¿Qué tiempo verbal se usa para acciones habituales y rutinas?",
        "Complete: 'She _____ coffee every morning.'": "Completa: 'She _____ coffee every morning.'",
        "Qual palavra-chave indica Simple Present?": "¿Qué palabra clave indica Simple Present?",
        "Como formar a negativa de 'I work'?": "¿Cómo formar la negativa de 'I work'?",
        "Qual frase está correta?": "¿Qué frase es correcta?",
        "Quando usamos Simple Past?": "¿Cuándo usamos Simple Past?",
        
        // Fill in the blanks instructions
        "Complete a frase:": "Completa la frase:",
        "Digite sua resposta...": "Escribe tu respuesta...",
        
        // Word order instructions
        "Organize as palavras para formar uma frase correta:": "Organiza las palabras para formar una frase correcta:",
        "Arraste as palavras aqui...": "Arrastra las palabras aquí...",
        
        // Feedback
        "Correto!": "¡Correcto!",
        "Incorreto": "Incorrecto",
        "Verificar Resposta": "Verificar Respuesta",
        "Atividade Completada!": "¡Actividad Completada!",
        "Pontuação": "Puntuación",
        "Tentar Novamente": "Intentar de Nuevo",
        "Próxima Atividade": "Siguiente Actividad"
    },
    
    en: {
        // Multiple Choice questions
        "Qual tempo verbal é usado para ações habituais e rotinas?": "Which verb tense is used for habitual actions and routines?",
        "Complete: 'She _____ coffee every morning.'": "Complete: 'She _____ coffee every morning.'",
        "Qual palavra-chave indica Simple Present?": "Which keyword indicates Simple Present?",
        "Como formar a negativa de 'I work'?": "How to form the negative of 'I work'?",
        "Qual frase está correta?": "Which sentence is correct?",
        "Quando usamos Simple Past?": "When do we use Simple Past?",
        
        // Fill in the blanks instructions
        "Complete a frase:": "Complete the sentence:",
        "Digite sua resposta...": "Type your answer...",
        
        // Word order instructions
        "Organize as palavras para formar uma frase correta:": "Organize the words to form a correct sentence:",
        "Arraste as palavras aqui...": "Drag words here...",
        
        // Feedback
        "Correto!": "Correct!",
        "Incorreto": "Incorrect",
        "Verificar Resposta": "Check Answer",
        "Atividade Completada!": "Activity Completed!",
        "Pontuação": "Score",
        "Tentar Novamente": "Try Again",
        "Próxima Atividade": "Next Activity"
    }
};

// Função para traduzir enunciados dos exercícios
function translateExerciseText(text, language = 'pt') {
    const translations = exerciseTranslations[language];
    return translations && translations[text] ? translations[text] : text;
}

