export const initialQuizState = {
    questions: [],
    currentIndex: 0,
    answers: [],
    status: "idle", // idle | ready | in_progress | finished
    timeLeft: 600,
};

export function quizReducer(state, action) {
    switch (action.type) {
        case "QUIZ/SET_QUESTIONS":
            return {
                ...state,
                questions: action.payload,
                status: "ready",
            };

        case "QUIZ/SET_INDEX":
            return {
                ...state,
                currentIndex: action.payload,
            };

        case "QUIZ/START":
            return {
                ...state,
                currentIndex: 0,
                answers: [],
                status: "in_progress",
                timeLeft: 600,
            };

        case "QUIZ/TICK":
            return {
                ...state,
                timeLeft: state.timeLeft > 0 ? state.timeLeft - 1 : 0,
            };

        case "QUIZ/SET_TIME":
            return {
                ...state,
                timeLeft: action.payload,
            };

        case "QUIZ/ANSWER": {
            const { questionIndex, selected, correct } = action.payload;

            const updatedAnswers = [...state.answers];
            updatedAnswers[questionIndex] = { selected, correct };

            return {
                ...state,
                answers: updatedAnswers,
            };
        }

        case "QUIZ/RESTART":
            return {
                ...state,
                answers: [],
                currentIndex: 0,
                status: "in_progress",
                timeLeft: 600, // reset timer
            };

        case "QUIZ/FINISH":
            return {
                ...state,
                status: "finished",
            };

        case "QUIZ/RESET":
            return initialQuizState;

        default:
            return state;
    }
}
