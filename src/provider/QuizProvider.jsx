import { useEffect, useReducer } from "react";
import { initialQuizState, quizReducer } from "../stores/quiz/quiz.reducer.";
import QuizContext from "../context/quiz.context";

const STORAGE_KEY = "quiz_state";

const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        quizReducer,
        initialQuizState,
        (initial) => {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : initial;
        },
    );

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider;
