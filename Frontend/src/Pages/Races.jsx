import React from "react";
import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    Trophy,
    Flag,
    Clock,
    ChevronRight,
} from "lucide-react";

export default function Races() {
    const previousWinners = [
        {
            year: "2025",
            driver: "Oscar Piastri",
            team: "McLaren",
            position: "P1",
            color: "bg-orange-500",
        },
        {
            year: "2024",
            driver: "Max Verstappen",
            team: "Red Bull Racing",
            position: "P1",
            color: "bg-blue-600",
        },
        {
            year: "2023",
            driver: "Max Verstappen",
            team: "Red Bull Racing",
            position: "P1",
            color: "bg-blue-600",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0D1117] text-white">
            {/* Header */}
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-transparent" />

                <div className="max-w-7xl mx-auto px-6 py-10 relative">
                    {/* Back Button */}

                    <button className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition mb-10">
                        <ArrowLeft size={18} />
                        Back to Races
                    </button>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* LEFT */}

                        <div>
                            <span className="px-4 py-1 rounded-full bg-red-600 text-sm font-semibold">
                                ROUND 9
                            </span>

                            <h1 className="text-5xl font-black mt-5 leading-tight">
                                Spanish Grand Prix 🇪🇸
                            </h1>

                            <p className="text-gray-400 mt-4 text-lg">
                                Circuit de Barcelona-Catalunya
                            </p>

                            <div className="flex flex-wrap gap-6 mt-8">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="text-red-500" />

                                    <div>
                                        <p className="text-gray-500 text-sm">
                                            Race Weekend
                                        </p>

                                        <p className="font-semibold">
                                            May 30 – June 1, 2025
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MapPin className="text-red-500" />

                                    <div>
                                        <p className="text-gray-500 text-sm">
                                            Location
                                        </p>

                                        <p className="font-semibold">
                                            Barcelona, Spain
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
                                alt=""
                                className="rounded-3xl h-[420px] w-full object-cover"
                            />

                            <div className="absolute bottom-5 right-5 bg-[#161B22]/95 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Circuit_Catalunya.png/800px-Circuit_Catalunya.png"
                                    className="h-28 object-contain"
                                    alt=""
                                />

                                <p className="text-center mt-3 text-sm text-gray-400">
                                    Circuit Layout
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN */}

            <section className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* LEFT */}

                    <div className="lg:col-span-2 space-y-8">
                        {/* Race Info */}

                        <div className="bg-[#161B22] rounded-3xl border border-white/10 p-8">
                            <h2 className="text-3xl font-bold mb-8">
                                Race Information
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[#0D1117] rounded-2xl p-6 border border-white/5">
                                    <Flag className="text-red-500 mb-4" />

                                    <p className="text-gray-500 text-sm">
                                        Race Distance
                                    </p>

                                    <h3 className="text-2xl font-bold mt-1">
                                        307.236 km
                                    </h3>
                                </div>

                                <div className="bg-[#0D1117] rounded-2xl p-6 border border-white/5">
                                    <Clock className="text-red-500 mb-4" />

                                    <p className="text-gray-500 text-sm">
                                        Laps
                                    </p>

                                    <h3 className="text-2xl font-bold mt-1">
                                        66
                                    </h3>
                                </div>

                                <div className="bg-[#0D1117] rounded-2xl p-6 border border-white/5">
                                    <MapPin className="text-red-500 mb-4" />

                                    <p className="text-gray-500 text-sm">
                                        Circuit Length
                                    </p>

                                    <h3 className="text-2xl font-bold mt-1">
                                        4.657 km
                                    </h3>
                                </div>

                                <div className="bg-[#0D1117] rounded-2xl p-6 border border-white/5">
                                    <Trophy className="text-red-500 mb-4" />

                                    <p className="text-gray-500 text-sm">
                                        Fastest Lap
                                    </p>

                                    <h3 className="text-2xl font-bold mt-1">
                                        1:16.330
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Previous Winners */}

                        <div className="bg-[#161B22] rounded-3xl border border-white/10 p-8">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-bold">
                                    Previous Winners
                                </h2>

                                <button className="text-red-500 hover:text-red-400 flex items-center gap-2">
                                    View Full History
                                    <ChevronRight size={18} />
                                </button>
                            </div>

                            <div className="space-y-5">
                                {previousWinners.map((winner) => (
                                    <div
                                        key={winner.year}
                                        className="bg-[#0D1117] rounded-2xl p-5 flex items-center justify-between border border-white/5 hover:border-red-500 transition"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div
                                                className={`w-14 h-14 rounded-full ${winner.color} flex items-center justify-center font-bold text-lg`}
                                            >
                                                {winner.position}
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-semibold">
                                                    {winner.driver}
                                                </h3>

                                                <p className="text-gray-400">
                                                    {winner.team}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-3xl font-black text-gray-500">
                                            {winner.year}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Weekend Schedule */}

                        <div className="bg-[#161B22] rounded-3xl border border-white/10 p-7">
                            <h2 className="text-2xl font-bold mb-6">
                                Weekend Schedule
                            </h2>

                            {[
                                {
                                    title: "Practice 1",
                                    day: "Friday",
                                    time: "13:30",
                                },
                                {
                                    title: "Practice 2",
                                    day: "Friday",
                                    time: "17:00",
                                },
                                {
                                    title: "Practice 3",
                                    day: "Saturday",
                                    time: "12:30",
                                },
                                {
                                    title: "Qualifying",
                                    day: "Saturday",
                                    time: "16:00",
                                },
                                {
                                    title: "Race",
                                    day: "Sunday",
                                    time: "15:00",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex justify-between items-center py-4 border-b border-white/10 last:border-none"
                                >
                                    <div>
                                        <p className="font-semibold">
                                            {item.title}
                                        </p>

                                        <p className="text-sm text-gray-400">
                                            {item.day}
                                        </p>
                                    </div>

                                    <span className="font-bold text-red-500">
                                        {item.time}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Weather */}

                        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-7">
                            <h2 className="text-2xl font-bold mb-6">
                                Race Weather
                            </h2>

                            <div className="text-center">
                                <div className="text-6xl mb-4">☀️</div>

                                <h3 className="text-5xl font-black">29°C</h3>

                                <p className="mt-2 text-red-100">
                                    Sunny Conditions
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-white/10 rounded-xl p-4">
                                    <p className="text-red-100 text-sm">
                                        Humidity
                                    </p>

                                    <h4 className="text-2xl font-bold">58%</h4>
                                </div>

                                <div className="bg-white/10 rounded-xl p-4">
                                    <p className="text-red-100 text-sm">Wind</p>

                                    <h4 className="text-2xl font-bold">
                                        12 km/h
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Circuit Stats */}

                        <div className="bg-[#161B22] rounded-3xl border border-white/10 p-7">
                            <h2 className="text-2xl font-bold mb-6">
                                Circuit Stats
                            </h2>

                            <div className="space-y-5">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Turns</span>

                                    <span className="font-bold">16</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">
                                        DRS Zones
                                    </span>

                                    <span className="font-bold">2</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">
                                        First GP
                                    </span>

                                    <span className="font-bold">1991</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">
                                        Lap Record
                                    </span>

                                    <span className="font-bold">1:18.149</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-400">
                                        Capacity
                                    </span>

                                    <span className="font-bold">140,700</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Facts */}

                        <div className="bg-[#161B22] rounded-3xl border border-white/10 p-7">
                            <h2 className="text-2xl font-bold mb-5">
                                Quick Facts
                            </h2>

                            <ul className="space-y-4 text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-red-500">●</span>
                                    Home of the Spanish Grand Prix since 1991.
                                </li>

                                <li className="flex gap-3">
                                    <span className="text-red-500">●</span>
                                    Famous for long sweeping corners.
                                </li>

                                <li className="flex gap-3">
                                    <span className="text-red-500">●</span>
                                    Excellent track for aerodynamic testing.
                                </li>

                                <li className="flex gap-3">
                                    <span className="text-red-500">●</span>
                                    Overtaking mainly into Turn 1.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}

            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-900 p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-4xl font-black mb-4">
                                Ready for Race Weekend?
                            </h2>

                            <p className="text-red-100 max-w-xl">
                                Stay updated with qualifying results, live race
                                timings, driver standings, and post-race
                                analysis throughout the Formula 1 season.
                            </p>
                        </div>

                        <button className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition">
                            View Live Timing
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
