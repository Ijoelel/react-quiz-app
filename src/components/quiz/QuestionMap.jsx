import { Grid } from "lucide-react";

const QuestionMap = ({ questions, answers, currentIndex, onSelect }) => {
    return (
        <aside className="lg:col-span-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-[148px]">
                <h3 className="font-bold mb-4 flex items-center gap-2 dark:text-white">
                    <Grid />
                    Question Map
                </h3>

                <div className="grid grid-cols-5 gap-3">
                    {questions.map((_, index) => {
                        const isAnswered = answers[index];
                        const isCurrent = index === currentIndex;

                        return (
                            <button
                                key={index}
                                onClick={() => onSelect(index)}
                                className={`aspect-square flex items-center justify-center text-sm font-semibold rounded-lg cursor-pointer ${
                                    isCurrent
                                        ? "border-2 border-primary text-primary bg-primary/5"
                                        : isAnswered
                                          ? "bg-green-500 text-white"
                                          : "bg-slate-50 dark:bg-slate-800 text-slate-400 border"
                                }`}
                            >
                                {index + 1}
                            </button>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};
export default QuestionMap;
