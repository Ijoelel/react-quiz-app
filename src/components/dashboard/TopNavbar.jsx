import { Bell, School, Search } from "lucide-react";

const TopNavbar = ({ user }) => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-3">
            <div className="max-w-360 mx-auto flex items-center justify-between gap-8">
                <div className="flex items-center gap-3 text-primary dark:text-white">
                    <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
                        <School />
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-text-main dark:text-white">
                        QuizMaster
                    </h2>
                </div>

                <div className="flex-1 max-w-2xl">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                            <Search className="w-4" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a topic, category, or quiz..."
                            className="block w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-sm placeholder:text-slate-500"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
                        <Bell className="w-6" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
                    </button>

                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold leading-none dark:text-white">
                                {user?.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                                {user?.email}
                            </p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden border-2 border-transparent group-hover:border-primary transition-all shadow-sm">
                            <img
                                src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${user?.name.split(" ").join("+")}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default TopNavbar;
