const AnswerGrid = ({ choices, selected, onSelect }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {choices.map((choice, index) => {
                const letter = String.fromCharCode(65 + index);
                const isSelected = selected === choice;

                return (
                    <button
                        key={choice}
                        onClick={() => onSelect(choice)}
                        className={`group flex items-start gap-4 p-6 border-2 rounded-xl transition-all text-left ${
                            isSelected
                                ? "bg-primary/5 border-primary"
                                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary hover:bg-primary/5"
                        }`}
                    >
                        <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                                isSelected
                                    ? "bg-primary text-white"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                            }`}
                        >
                            {letter}
                        </span>

                        <span className="grow pt-1 font-medium dark:text-white">
                            {choice}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};
export default AnswerGrid;
