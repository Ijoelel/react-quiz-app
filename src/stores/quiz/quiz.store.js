import { useContext } from "react";
import * as actions from "./quiz.actions";
import QuizContext from "@/context/quiz.context";

export function useQuizStore() {
    const ctx = useContext(QuizContext);

    if (!ctx) {
        throw new Error("useQuizStore harus dipakai di dalam QuizProvider");
    }

    const { state, dispatch } = ctx;

    return {
        // state
        questions: state.questions,
        currentIndex: state.currentIndex,
        answers: state.answers,
        status: state.status,

        // actions
        setQuestions: (q) => dispatch(actions.setQuestions(q)),
        startQuiz: () => dispatch(actions.startQuiz()),
        answerQuestion: (a) => dispatch(actions.answerQuestion(a)),
        finishQuiz: () => dispatch(actions.finishQuiz()),
        resetQuiz: () => dispatch(actions.resetQuiz()),
    };
}
