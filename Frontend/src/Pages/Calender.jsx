import React, { useEffect, useState } from "react";
import { CalendarDays, Clock3, CheckCircle2 } from "lucide-react";
import { handleAllRace } from "../hooks/AllRace.function";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function CalendarPage() {
    const [races, setRaces] = useState([]);
    const [selectedTab, setSelectedTab] = useState("all");

    useEffect(() => {
        const fetchAllRaces = async () => {
            const data = await handleAllRace();
            setRaces(data);
            console.log(data);
        };

        fetchAllRaces();
    }, []);

    const filteredRaces = races.filter((race) => {
        if (race.meeting_name === "Pre-Season Testing") {
            return false;
        }

        if (selectedTab === "upcoming") {
            return new Date(race.date_start) > new Date();
        }

        if (selectedTab === "completed") {
            return new Date(race.date_start) < new Date();
        }

        return true; // All races
    });

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#0A0A0A] text-white">
                <section className="relative h-[520px] overflow-hidden">
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1541773367336-d14b1f3ed4e9?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                    {/* Content */}
                    <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center px-8">
                        <h1 className="text-6xl md:text-7xl font-black uppercase tracking-wide">
                            Calendar 2026
                        </h1>

                        <p className="text-gray-300 mt-5 text-xl">
                            The official Formula One Race Calendar.
                        </p>

                        {/* Red Line */}
                        <div className="mt-8 w-24 h-1 bg-red-600 rounded-full" />
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-8 -mt-12 relative z-30">
                    <div className="bg-[#111111] rounded-2xl border border-neutral-800 overflow-hidden">
                        <div className="grid grid-cols-3">
                            <button
                                onClick={() => setSelectedTab("all")}
                                className={`flex items-center justify-center gap-3 py-5 font-semibold text-lg transition ${
                                    selectedTab === "all"
                                        ? "bg-red-600 text-white"
                                        : "hover:bg-neutral-900"
                                }`}
                            >
                                <CalendarDays size={22} />
                                All Races
                            </button>

                            <button
                                onClick={() => setSelectedTab("upcoming")}
                                className={`flex items-center justify-center gap-3 py-5 border-l border-neutral-800 transition ${
                                    selectedTab === "upcoming"
                                        ? "bg-red-600 text-white"
                                        : "hover:bg-neutral-900"
                                }`}
                            >
                                <Clock3 size={21} />
                                Upcoming
                            </button>

                            <button
                                onClick={() => setSelectedTab("completed")}
                                className={`flex items-center justify-center gap-3 py-5 border-l border-neutral-800 transition ${
                                    selectedTab === "completed"
                                        ? "bg-red-600 text-white"
                                        : "hover:bg-neutral-900"
                                }`}
                            >
                                <CheckCircle2 size={21} />
                                Completed
                            </button>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-8 mt-8">
                    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#111111]">
                        <div className="hidden md:grid grid-cols-6 bg-[#161616] border-b border-neutral-800 px-8 py-5 uppercase text-sm tracking-widest text-neutral-400 font-semibold">
                            <div>Round</div>
                            <div>Grand Prix</div>
                            <div>Date</div>
                            <div>Circuit</div>
                            <div>Location</div>
                            <div className="text-center">Status</div>
                        </div>

                        {filteredRaces.map((race, idx) => (
                            <div
                                key={idx}
                                className="grid md:grid-cols-6 gap-4 px-8 py-6 border-b border-neutral-800 hover:bg-neutral-900 transition duration-300"
                            >
                                {/* Round */}

                                <div className="font-bold text-lg">
                                    {/* {race.round} */}
                                    {idx + 1}
                                </div>

                                {/* GP */}

                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-4"
                                        src={race?.country_flag}
                                    />

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {
                                                race.meeting_name.split(
                                                    "Grand",
                                                )[0]
                                            }
                                        </h3>
                                    </div>
                                </div>
                                {/* Date */}
                                <div className="flex items-center text-neutral-300">
                                    {new Date(
                                        race.date_start,
                                    ).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "short",
                                    })}
                                </div>

                                {/* Circuit */}

                                <img
                                    className="flex items-center h-8 text-neutral-300"
                                    src={race.circuit_image}
                                    alt={`${race.circuit_short_name}`}
                                />

                                {/* Location */}

                                <div className="flex items-center text-neutral-300">
                                    {race.location}
                                </div>

                                {/* Status */}

                                <div className="flex justify-center items-center">
                                    {race.is_cancelled ? (
                                        <span className="bg-red-600/20 text-red-400 border border-red-500 px-4 py-2 rounded-full text-sm font-semibold">
                                            ○ Cancelled
                                        </span>
                                    ) : new Date(race.date_start) <
                                      new Date() ? (
                                        <span className="bg-green-600/20 text-green-400 border border-green-500 px-4 py-2 rounded-full text-sm font-semibold">
                                            ✓ Completed
                                        </span>
                                    ) : (
                                        <span className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-4 py-2 rounded-full text-sm font-semibold">
                                            ○ Upcoming
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
