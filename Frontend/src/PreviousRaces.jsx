import { useEffect, useState } from "react";
import { Trophy, ChevronRight, Clock, Flag } from "lucide-react";
import { PreviousRacesFunc } from "./hooks/PreviousRace.function";
import circuits from "./data/circuit.json";
import { handleNextRaceDate } from "./hooks/NextRace.function";

export default function PreviousRaces() {
    const [previous, setPrevious] = useState(null);
    // const [nextRace, setNextRace] = useState(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const fetchPrevious = async () => {
            const previousRaces = await PreviousRacesFunc(8);
            setPrevious(previousRaces);
            console.log(previousRaces);
        };

        fetchPrevious();
    }, []);

    // console.log("season", nextRace  );

    return (
        <section className="py-20 relative">
            {/* Background accent */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E10600]/3 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <span className="section-label block mb-3">
                        Race Results
                    </span>
                    <div className="flex items-end justify-between">
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Previous Races
                        </h2>
                        <button className="btn-secondary hidden sm:flex items-center gap-2 text-sm">
                            All Results
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Race Cards */}
                <div className="flex flex-col sm:flex-row">
                    {previous &&
                        previous?.map((race) => (
                            <div>
                                <div
                                    className="relative sm:w-52 lg:w-64 flex-shrink-0 overflow-hidden"
                                    style={{ minHeight: "160px" }}
                                >
                                    <img
                                        className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
                                        style={{ minHeight: "160px" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0F0F] opacity-50 sm:opacity-70" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent sm:hidden" />

                                    <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur-sm border border-[#1A1A1A] rounded-lg px-2 py-1">
                                        <span className="text-[#E10600] text-xs font-mono font-bold">
                                            {/* R{race[0]?.round} */}
                                            
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 p-5 sm:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-gray-500 text-xs font-mono">
                                                    {/* {race?.date} */}
                                                </span>
                                            </div>

                                            <h3 className="text-white font-bold text-lg leading-tight mb-1">
                                                {/* {race?.raceName} */}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-4">
                                                2ec
                                            </p>

                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#252525]">
                                                    <Trophy
                                                        size={14}
                                                        className="text-[#E10600]"
                                                    />
                                                    <div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-wider leading-none mb-0.5">
                                                            Winner
                                                        </div>
                                                        <div className="text-white text-sm font-semibold leading-none">
                                                            {/* {
                                                                race?.Results[0]
                                                                    ?.Driver
                                                                    ?.givenName
                                                            } */}
                                                        </div>
                                                    </div>
                                                    <div className="ml-2 pl-2 border-l border-[#2A2A2A]">
                                                        {/* {
                                                            race?.Results[0]
                                                                ?.Constructor
                                                                ?.name
                                                        } */}
                                                        <div className="w-6 h-6 rounded-full bg-[#2A2A2A]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0 text-right">
                                            <div className="mb-4">
                                                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                                                    Fastest Lap
                                                </div>
                                                <div className="text-white text-sm font-mono font-semibold flex items-center gap-1 justify-end">
                                                    <Clock
                                                        size={12}
                                                        className="text-[#E10600]"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                className={`flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 ${
                                                    hovered
                                                        ? "text-[#E10600]"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                Results
                                                <ChevronRight
                                                    size={14}
                                                    className={`transition-transform duration-200 ${hovered ? "translate-x-1" : ""}`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Mobile All Results */}
                <div className="mt-8 sm:hidden flex justify-center">
                    <button className="btn-secondary flex items-center gap-2">
                        All Results
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
