const QuestionCard = ({ current, total, question, type }) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded uppercase tracking-wider">
                    Question {current + 1} of {total}
                </span>
                <span className="text-xs font-medium text-slate-500">
                    {type === "multiple" ? "Multiple Choice" : "True / False"}
                </span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-10 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-semibold leading-relaxed dark:text-white/90">
                    {question}
                </h2>
            </div>
        </>
    );
};
export default QuestionCard;
