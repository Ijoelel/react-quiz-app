export const initialQuizState = {
    questions: [],
    currentIndex: 0,
    answers: [],
    status: "idle", // idle | ready | in_progress | finished
};

export function quizReducer(state, action) {
    switch (action.type) {
        case "QUIZ/SET_QUESTIONS":
            return {
                ...state,
                questions: action.payload,
                status: "ready",
            };

        case "QUIZ/START":
            return {
                ...state,
                currentIndex: 0,
                answers: [],
                status: "in_progress",
            };

        case "QUIZ/ANSWER":
            return {
                ...state,
                answers: [...state.answers, action.payload],
                currentIndex: state.currentIndex + 1,
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
