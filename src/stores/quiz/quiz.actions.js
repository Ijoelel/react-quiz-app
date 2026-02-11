export const setQuestions = (questions) => ({
    type: "QUIZ/SET_QUESTIONS",
    payload: questions,
});

export const startQuiz = () => ({
    type: "QUIZ/START",
});

export const answerQuestion = (answer) => ({
    type: "QUIZ/ANSWER",
    payload: answer,
});

export const finishQuiz = () => ({
    type: "QUIZ/FINISH",
});

export const resetQuiz = () => ({
    type: "QUIZ/RESET",
});
