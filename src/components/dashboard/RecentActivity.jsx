import { Calendar, EllipsisVertical } from "lucide-react";

const RecentActivity = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg dark:text-white">
                    Recent Activity
                </h3>
                <EllipsisVertical className="w-4" />
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Calendar className="w-4" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold dark:text-white">
                            World War II Master
                        </p>
                        <p className="text-xs text-slate-500">
                            Score: 940 pts • 2 hours ago
                        </p>
                        <div className="mt-2 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[94%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RecentActivity;
