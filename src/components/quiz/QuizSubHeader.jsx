const QuizSubHeader = ({ category, current = 0, total }) => {
    const progress = ((current + 1) / total) * 100;

    return (
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-40">
            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                <h2 className="font-semibold text-sm md:text-base truncate dark:text-white">
                    {category}
                </h2>
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
