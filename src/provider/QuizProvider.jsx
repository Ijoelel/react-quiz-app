import { useReducer } from "react";
import { initialQuizState, quizReducer } from "../stores/quiz/quiz.reducer.";
import QuizContext from "../context/quiz.context";

const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizReducer, initialQuizState);

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizProvider;
