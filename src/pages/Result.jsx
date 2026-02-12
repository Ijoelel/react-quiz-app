import { useNavigate } from "react-router";
import TopNavbar from "../components/dashboard/TopNavbar";
import { useQuizStore } from "../stores/quiz/quiz.store";
import { useMemo } from "react";
import ResultFooter from "../components/result/ResultFooter";
import QuestionReviewList from "../components/result/QuestionReviewList";
import StatsGrid from "../components/result/StatsGrid";

const Result = () => {
    const navigate = useNavigate();
    const { questions, answers, resetQuiz, restartQuiz, timeLeft } =
        useQuizStore();

    const total = questions.length;

    const correctCount = useMemo(() => {
        return answers.filter((a) => a?.selected === a?.correct).length;
    }, [answers]);

    const percentage = total ? Math.round((correctCount / total) * 100) : 0;

    const handleRetry = () => {
        restartQuiz();
        navigate("/quiz");
    };

    const handleBack = () => {
        resetQuiz();
        navigate("/");
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
            <TopNavbar />

            <main className="max-w-360 mx-auto px-4 py-12">
                <StatsGrid
                    percentage={percentage}
                    correct={correctCount}
                    total={total}
                    timeLeft={timeLeft}
                />

                <QuestionReviewList questions={questions} answers={answers} />

                <ResultFooter onRetry={handleRetry} onBack={handleBack} />
            </main>
            {/* Background Gradients */}
            <div className="fixed top-0 left-0 -z-10 w-full h-full overflow-hidden opacity-50 dark:opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-accent/10 blur-[120px]" />
            </div>
        </div>
    );
};
export default Result;
