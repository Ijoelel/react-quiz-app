import { Play, Rocket } from "lucide-react";

const HeroBanner = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white min-h-80 flex items-center group">
            <div className="absolute inset-0 z-0 opacity-50 bg-linear-to-r from-primary to-purple-600" />
            <div className="absolute right-0 bottom-0 z-0 opacity-20 h-fit w-fit scale-150 group-hover:scale-125 transition-transform duration-1000">
                <Rocket className="size-40" />
            </div>

            <div className="relative z-10 px-10 py-12 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="material-symbols-outlined text-sm">
                        stars
                    </span>
                    Featured Quiz
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    The Wonders of Deep Space
                </h2>

                <p className="text-slate-100/80 text-lg mb-8 leading-relaxed">
                    Embark on a journey through the cosmos and test your
                    knowledge of galaxies, stars, and distant planets.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
                        Start Now
                        <Play className="h-4" />
                    </button>

                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border border-white/20">
                        Save for later
                        <span className="material-symbols-outlined">
                            bookmark
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};
export default HeroBanner;
