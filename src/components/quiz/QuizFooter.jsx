const QuizFooter = ({ currentIndex, total, onFinish }) => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 sticky bottom-0 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-end">
                <button
                    onClick={onFinish}
                    className="px-8 py-2.5 bg-primary text-white font-bold rounded-lg shadow-md shadow-primary/20"
                >
                    {currentIndex + 1 === total ? "Finish" : "Next"}
                </button>
            </div>
        </footer>
    );
};
export default QuizFooter;
