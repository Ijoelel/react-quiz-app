const QuizOptionModal = ({
    open,
    category,
    difficulty,
    setDifficulty,
    type,
    setType,
    onCancel,
    onNext,
}) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6 dark:text-white">
                    {category?.name}
                </h3>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2 dark:text-white">
                        Difficulty
                    </label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full p-2 rounded-lg bg-slate-100 dark:bg-slate-800 dark:text-white"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2 dark:text-white">
                        Question Type
                    </label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-2 rounded-lg bg-slate-100 dark:bg-slate-800 dark:text-white"
                    >
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </select>
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-lg bg-slate-200/80 dark:bg-slate-700/80 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:text-white"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onNext}
                        className="px-4 py-2 rounded-lg bg-primary/80 text-white cursor-pointer hover:bg-primary"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
export default QuizOptionModal;
