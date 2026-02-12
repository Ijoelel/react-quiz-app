import { Calendar, EllipsisVertical } from "lucide-react";
import { useNavigate } from "react-router";

const RecentActivity = ({ questions = [], currentIndex = 0, status }) => {
    const navigate = useNavigate();

    if (!questions.length) return null;

    const progress = ((currentIndex + 1) / questions.length) * 100;
    const statusMap = {
        idle: {
            text: "Belum Dimulai",
            style: "text-slate-500",
        },

        ready: {
            text: "Siap Dimulai",
            style: "text-blue-600",
        },

        in_progress: {
            text: "Sedang Dikerjakan",
            style: "text-amber-600",
        },

        finished: {
            text: "Selesai",
            style: "text-green-600",
        },
    };

    const handleResume = () => {
        navigate("/quiz");
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg dark:text-white">
                    Recent Activity
                </h3>
                <EllipsisVertical className="w-4 text-slate-400" />
            </div>

            {/* Content */}
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Calendar className="w-4" />
                    </div>

                    <div className="flex-1">
                        <p className="text-sm font-semibold dark:text-white">
                            {questions[currentIndex]?.category}
                        </p>

                        <p className="text-xs text-slate-500">
                            <span className={statusMap[status].style}>
                                {statusMap[status].text}
                            </span>{" "}
                            number {currentIndex + 1}
                        </p>

                        {/* Progress Bar */}
                        <div className="mt-2 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleResume}
                        className="w-fit px-2 bg-slate-100 dark:bg-slate-800 dark:text-white hover:bg-primary hover:text-white py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
