import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

function RaceCard({ race }) {
    return (
        <div
            className={`race-card flex-shrink-0 glass-card glass-card-hover rounded-xl p-5 border cursor-pointer transition-all duration-300 ${
                race.isNext
                    ? "border-[#E10600]/50 bg-[#E10600]/5 shadow-[0_0_25px_rgba(225,6,0,0.15)]"
                    : "border-[#1A1A1A]"
            }`}
            style={{ width: "185px" }}
        >
            {/* Round badge */}
            <div className="flex items-center justify-between mb-4">
                <span
                    className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                        race.isNext
                            ? "bg-[#E10600] text-white"
                            : "bg-[#1A1A1A] text-gray-400"
                    }`}
                >
                    R{race.round}
                </span>
                {race.isNext && (
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse" />
                        <span className="text-[#E10600] text-xs font-semibold tracking-wider">
                            NEXT
                        </span>
                    </div>
                )}
            </div>

            {/* Flag & Date */}
            <div className="mb-3">
                <span className="text-3xl block mb-2">{race.flag}</span>
                <div
                    className={`text-xs font-mono font-semibold ${race.isNext ? "text-[#E10600]" : "text-gray-500"}`}
                >
                    {race.date}
                </div>
            </div>

            {/* Race Name */}
            <div className="mb-3">
                <div className="text-white font-bold text-sm leading-tight mb-1">
                    {race.shortName}
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin size={10} className="flex-shrink-0" />
                    <span className="truncate">{race.circuit}</span>
                </div>
            </div>

            {/* Bottom accent */}
            {race.isNext && (
                <div className="mt-3 pt-3 border-t border-[#E10600]/20">
                    <div className="text-[#E10600] text-xs font-semibold uppercase tracking-wider">
                        View Details →
                    </div>
                </div>
            )}
        </div>
    );
}

export default function UpcomingRaces() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 220, behavior: "smooth" });
        }
    };

    return (
        <section id="races" className="py-20 relative">
            {/* Section separator */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex items-end justify-between">
                    <div>
                        <span className="section-label block mb-3">
                            2026 Season
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Upcoming Races
                        </h2>
                    </div>
                    <div className="hidden sm:flex gap-2">
                        <button
                            onClick={() => scroll(-1)}
                            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1A1A1A] bg-[#0F0F0F] text-gray-400 hover:text-white hover:border-[#E10600]/40 transition-all"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#1A1A1A] bg-[#0F0F0F] text-gray-400 hover:text-white hover:border-[#E10600]/40 transition-all"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Timeline visual */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="relative">
                    <div className="h-px bg-[#1A1A1A] w-full" />
                    <div className="h-px bg-gradient-to-r from-[#E10600] to-[#E10600]/10 w-1/3 absolute top-0 left-0" />
                </div>
            </div>

            {/* Scrollable Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
                ></div>
            </div>

            {/* View Full Calendar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-center">
                <button className="btn-secondary flex items-center gap-2 text-sm">
                    View Full Calendar
                    <ChevronRight size={16} />
                </button>
            </div>
        </section>
    );
}
