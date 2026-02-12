export const setQuestions = (questions) => ({
    type: "QUIZ/SET_QUESTIONS",
    payload: questions,
});

export const setIndex = (index) => ({
    type: "QUIZ/SET_INDEX",
    payload: index,
});

export const startQuiz = () => ({
    type: "QUIZ/START",
});

export const tick = () => ({
    type: "QUIZ/TICK",
});

export const setTime = (time) => ({
    type: "QUIZ/SET_TIME",
    payload: time,
});

export const answerQuestion = (answer) => ({
    type: "QUIZ/ANSWER",
    payload: answer,
});

export const restartQuiz = () => ({
    type: "QUIZ/RESTART",
});

export const finishQuiz = () => ({
    type: "QUIZ/FINISH",
});

export const resetQuiz = () => ({
    type: "QUIZ/RESET",
});
