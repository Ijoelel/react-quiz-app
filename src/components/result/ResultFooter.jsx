const ResultFooter = ({ onRetry, onBack }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-8 pb-12">
            <button
                onClick={onRetry}
                className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/20 cursor-pointer"
            >
                Try Again
            </button>

            <button
                onClick={onBack}
                className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            >
                Back to Dashboard
            </button>
        </div>
    );
};
export default ResultFooter;
