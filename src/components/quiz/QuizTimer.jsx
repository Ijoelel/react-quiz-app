import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuizStore } from "../../stores/quiz/quiz.store";

const QuizTimer = () => {
    const navigate = useNavigate();
    const { timeLeft, tick, finishQuiz, status } = useQuizStore();

    useEffect(() => {
        if (status !== "in_progress") return;

        if (timeLeft <= 0) {
            finishQuiz();
            navigate("/result");
            return;
        }

        const interval = setInterval(() => {
            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, status, tick, finishQuiz, navigate]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formatted = `${String(minutes).padStart(2, "0")}:${String(
        seconds,
    ).padStart(2, "0")}`;

    return (
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg font-medium border border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined text-primary text-[20px]">
                timer
            </span>
            <span className="tabular-nums text-sm">{formatted}</span>
        </div>
    );
};
export default QuizTimer;
