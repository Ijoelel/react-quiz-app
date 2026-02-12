import { CircleCheck, Crosshair, Timer, Trophy } from "lucide-react";
import RadialScore from "./RadialScore";

const StatsGrid = ({ correct, total, percentage, timeLeft }) => {
    const timeTaken = 600 - timeLeft;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-8 text-center mb-8 relative overflow-hidden">
            {/* Decorative Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary-accent to-primary" />

            <div className="mb-6 flex flex-col items-center gap-2">
                <Trophy className="dark:text-white text-primary size-10" />

                <h1 className="text-4xl font-bold mt-4 dark:text-white">
                    Great job!
                </h1>

                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    You've successfully completed the quiz.
                </p>
            </div>

            {/* Radial */}
            <RadialScore value={percentage} />

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <StatCard
                    icon={<CircleCheck />}
                    color="text-primary"
                    label="Correct Answers"
                    value={`${correct} / ${total}`}
                />

                <StatCard
                    icon={<Timer />}
                    color="text-secondary-accent"
                    label="Time Taken"
                    value={`${minutes}m ${seconds}s`}
                />

                <StatCard
                    icon={<Crosshair />}
                    color="text-amber-500"
                    label="Accuracy"
                    value={`${percentage}%`}
                />
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value, color }) => {
    return (
        <div className="bg-zinc-50 flex flex-col items-center justify-center gap-2 text-center dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800">
            <span className={`material-icons mb-2 ${color}`}>{icon}</span>
            <p className="text-sm text-slate-500 dark:text-slate-400">
                {label}
            </p>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
};
export default StatsGrid;
