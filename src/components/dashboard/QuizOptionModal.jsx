const QuizOptionModal = ({
    open,
    category,
    difficulty,
    setDifficulty,
    type,
    setType,
    onCancel,
    onNext,
    isLoading,
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
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg ">
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            className="w-full rounded-lg bg-slate-100 dark:bg-slate-800 dark:text-white"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2 dark:text-white">
                        Question Type
                    </label>
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg ">
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full dark:text-white bg-slate-100 dark:bg-slate-800"
                        >
                            <option value="multiple">Multiple Choice</option>
                            <option value="boolean">True / False</option>
                        </select>
                    </div>
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
                        className="px-4 py-2 flex gap-2 items-center justify-center rounded-lg bg-primary/80 text-white cursor-pointer hover:bg-primary"
                    >
                        {isLoading && (
                            <svg
                                className="mr-3 -ml-1 size-5 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        )}

                        {isLoading ? "Loading..." : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default QuizOptionModal;
