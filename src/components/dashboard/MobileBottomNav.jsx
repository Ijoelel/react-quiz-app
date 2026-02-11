const MobileBottomNav = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-2 flex justify-between items-center z-50">
            {[
                { icon: "dashboard", label: "Home", active: true },
                { icon: "explore", label: "Explore" },
                { icon: "add_circle", label: "Create" },
                { icon: "leaderboard", label: "Ranks" },
                { icon: "settings", label: "Settings" },
            ].map((item) => (
                <button
                    key={item.label}
                    className={`flex flex-col items-center gap-1 ${
                        item.active ? "text-primary" : "text-slate-400"
                    }`}
                >
                    <span className="material-symbols-outlined">
                        {item.icon}
                    </span>
                    <span className="text-[10px] font-bold">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};
export default MobileBottomNav;
