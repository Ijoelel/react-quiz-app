import {
    Calculator,
    FlaskConical,
    Landmark,
    Lightbulb,
    Map,
    Medal,
    MemoryStick,
    Palette,
    PlayCircle,
    Pyramid,
    SquareKanban,
} from "lucide-react";

const CategoryCard = ({ category, onPlay }) => {
    const { name, icon, color } = category;

    const colorMap = {
        blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",

        emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600",

        indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600",

        purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600",

        green: "bg-green-100 dark:bg-green-900/30 text-green-600",

        cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600",

        amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-600",

        red: "bg-red-100 dark:bg-red-900/30 text-red-600",

        pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-600",

        orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600",
    };

    const iconsMap = {
        science: <FlaskConical />,
        memory: <MemoryStick />,
        calculate: <Calculator />,
        auto_awesome: <Pyramid />,
        sports_soccer: <Medal />,
        public: <Map />,
        history_edu: <SquareKanban />,
        gavel: <Landmark />,
        palette: <Palette />,
        lightbulb: <Lightbulb />,
    };

    return (
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                    colorMap[color] ?? colorMap.blue
                }`}
            >
                {iconsMap[icon]}
            </div>

            <h4 className="text-lg font-bold mb-6 dark:text-white">{name}</h4>

            <button
                onClick={onPlay}
                className="w-full bg-slate-100 dark:bg-slate-800 dark:text-white group-hover:bg-primary group-hover:text-white py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
                Play
                <PlayCircle />
            </button>
        </div>
    );
};
export default CategoryCard;
