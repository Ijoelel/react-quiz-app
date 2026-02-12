const RadialScore = ({ value }) => {
    const angle = (value / 100) * 360;

    return (
        <div className="flex justify-center items-center py-8">
            <div className="relative w-48 h-48">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-zinc-200 dark:bg-zinc-800" />

                {/* Progress Circle */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `conic-gradient(#19e65e ${angle}deg, transparent ${angle}deg)`,
                    }}
                />

                {/* Inner Circle */}
                <div className="absolute inset-4 rounded-full bg-white dark:bg-zinc-900 flex flex-col items-center justify-center">
                    <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                        {value}%
                    </span>

                    <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">
                        Final Score
                    </p>
                </div>
            </div>
        </div>
    );
};
export default RadialScore;
