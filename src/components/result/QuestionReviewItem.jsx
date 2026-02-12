import { Check, CircleDot, X } from "lucide-react";

const QuestionReviewItem = ({ index, question, answer }) => {
    const isCorrect = answer?.selected
        ? answer?.selected === answer?.correct
        : false;

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-5 flex gap-4">
            <div className="shrink-0">
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCorrect
                            ? "bg-primary/10"
                            : "bg-rose-100 dark:bg-rose-900/30"
                    }`}
                >
                    <span
                        className={`material-icons ${
                            isCorrect ? "text-primary" : "text-rose-500"
                        }`}
                    >
                        {isCorrect ? <Check /> : <X />}
                    </span>
                </div>
            </div>

            <div className="grow">
                <div className="flex justify-between items-start">
                    <p className="font-semibold mb-2">Question {index + 1}</p>
                    <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                            isCorrect ? "text-primary" : "text-rose-500"
                        }`}
                    >
                        {isCorrect
                            ? "Correct"
                            : answer?.selected
                              ? "Incorrect"
                              : "Not Answered"}
                    </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {question.question}
                </p>

                <div className="space-y-2">
                    {answer?.selected && (
                        <div
                            className={`text-sm p-3 rounded flex items-center justify-between ${
                                isCorrect
                                    ? "bg-primary/10 border border-primary/20"
                                    : "bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-900"
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <CircleDot className="size-4" />
                                <span>{answer?.selected}</span>
                            </div>

                            {!isCorrect && (
                                <span className="text-xs italic text-rose-500">
                                    Your Answer
                                </span>
                            )}
                        </div>
                    )}

                    {!isCorrect && answer?.selected && (
                        <div className="text-sm p-3 rounded bg-primary/10 border border-primary/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <CircleDot className="size-4 stroke-2" />
                                <span>{answer?.correct}</span>
                            </div>
                            <span className="text-xs italic text-primary">
                                Correct Answer
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default QuestionReviewItem;
