import { Workflow } from "lucide-react";

const PromotionCard = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col items-center text-center">
                <Workflow className="text-white" />
                <h4 className="font-bold mb-2 dark:text-white">
                    QuizMaster Premium
                </h4>
                <p className="text-slate-500 text-xs mb-4">
                    Unlimited quizzes, detailed analytics, and ad-free
                    experience.
                </p>
                <button className="text-primary text-sm font-bold hover:underline">
                    Learn More
                </button>
            </div>
        </div>
    );
};
export default PromotionCard;
