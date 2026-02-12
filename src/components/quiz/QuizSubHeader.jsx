import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { finishQuiz } from "../../stores/quiz/quiz.actions";
import QuizTimer from "./QuizTimer";

const QuizSubHeader = ({ category, timeLeft = 0 }) => {
    const progress = 100 - (timeLeft / 600) * 100;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    const handleExpire = () => {
        finishQuiz();
        navigate("/result");
    };

    return (
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-40">
            <div className="max-w-360 mx-auto px-4 h-14 flex items-center justify-between dark:text-white">
                <div className="flex gap-2 items-center justify-center">
                    <button
                        className="rounded-lg hover:bg-slate-800 p-1 flex items-center justify-center"
                        onClick={handleBack}
                    >
                        <ChevronLeft className="cursor-pointer" />
                    </button>
                    <div className="h-6 border-l border-gray-500 mr-2"></div>
                    <h2 className="font-semibold text-sm md:text-base truncate">
                        {category}
                    </h2>
                </div>

                {/* Timer */}
                <QuizTimer duration={600} onExpire={handleExpire} />
            </div>

            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 overflow-hidden">
                <div
                    className="bg-primary h-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};
export default QuizSubHeader;
