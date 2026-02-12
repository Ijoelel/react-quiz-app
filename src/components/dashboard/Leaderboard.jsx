import { Medal } from "lucide-react";

const Leaderboard = () => {
    const rankColors = [
        "bg-[#FFD700]", // Gold
        "bg-[#C0C0C0]", // Silver
        "bg-[#CD7F32]", // Bronze
    ];
    return (
        <div className="bg-primary rounded-3xl p-6 text-white overflow-hidden relative">
            <div className="absolute right-0 bottom-0 opacity-10">
                <Medal className="size-24" />
            </div>

            <h3 className="font-bold text-lg mb-6 relative z-10">
                Top Challengers
            </h3>

            <div className="space-y-4 relative z-10">
                {["Maria K.", "John Doe", "Sam L."].map((name, i) => (
                    <div
                        key={name}
                        className="flex items-center justify-between bg-white/10 p-3 rounded-2xl"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-8 h-8 rounded-full text-primary flex items-center justify-center text-xs font-black ${rankColors[i]} `}
                            >
                                {i + 1}
                            </div>
                            <span className="text-sm font-bold">{name}</span>
                        </div>
                        <span className="text-sm font-bold">
                            {2450 - i * 200} pts
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Leaderboard;
