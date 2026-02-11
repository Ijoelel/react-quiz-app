const QuizHeader = () => {
    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-6 h-16 flex items-center gap-3">
                <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">
                        auto_stories
                    </span>
                </div>
                <span className="font-bold text-xl tracking-tight">
                    EduQuest
                </span>
            </div>
        </header>
    );
};
export default QuizHeader;
