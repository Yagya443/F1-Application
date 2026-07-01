import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import { UpcomingRace } from "./hooks/UpcomingRace.function";
import { useState } from "react";
import { useEffect } from "react";


export default function UpcomingRaces() {
    const [upcomingRaces, setUpcomingRaces] = useState(null);

    useEffect(() => {
        const fetchUpcoming = async () => {
            const upcoming = await UpcomingRace();
            setUpcomingRaces(upcoming);
            // console.log("upcoming",upcoming);
        };

        fetchUpcoming();
    }, []);

    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 250, behavior: "smooth" });
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
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                >
                    {upcomingRaces?.map((races) => (
                        <div
                            key={races?.meeting_key}
                            className="glass-card rounded-xl min-w-56 px-4 pt-2 border border-[#1A1A1A] cursor-pointer hover:border-red-500 transition-all duration-200"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <img
                                    className="text-[#E10600] text-xs h-6 font-mono font-bold"
                                    src={races?.country_flag}
                                />
                                <span className="text-lg">
                                    {/* {driver.Driver.code} */}
                                    {races?.country_code}
                                </span>
                            </div>
                            <div className="text-white text-sm font-bold truncate">
                                {/* {driver.Driver.givenName} */}
                                {races?.location}, {races?.country_name}
                            </div>
                            <div className="text-gray-500 text-xs mt-0.5 truncate">
                                {/* {driver.Constructors[0].name} */}
                                {races?.date_start.split("T")[0]} to{" "}
                                {races?.date_end.split("T")[0]}
                            </div>
                            <div className="mt-4 text-[#E10600] text-sm font-mono font-semibold">
                                {/* {driver.points} pts */}
                                {races?.meeting_name}
                            </div>
                        </div>
                    ))}
                </div>
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
