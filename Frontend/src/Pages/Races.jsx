import React, { useEffect, useState } from "react";
import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    Trophy,
    Flag,
    Clock,
    ChevronRight,
} from "lucide-react";
import Navbar from "../Navbar";
import { handleNextRaceDate } from "../hooks/NextRace.function";
import { handleStanding } from "../hooks/Standings.function";
import { handleSchedule } from "../hooks/Schedule.function";
import handleRaceData from "../hooks/RaceData.function";
import circuits from "../data/circuit.json";

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

    const [nextRace, setNextRace] = useState(null);
    const [standing, setStanding] = useState(null);
    const [schedule, setSchedule] = useState(null);
    const [weather, setWeather] = useState(null);
    const [raceData, setRaceData] = useState(null);

    useEffect(() => {
        const fetchRace = async () => {
            const race = await handleNextRaceDate();
            setNextRace(race);
            console.log("race", race);
        };

        const fetchStanding = async () => {
            const stand = await handleStanding();
            setStanding(stand);
            console.log("stand", stand);
        };

        const fetchWeather = async () => {
            const weath = await handleStanding(nextRace?.country_name);
            setWeather(weath);
            console.log("weather", weather);
        };
        const fetchRaceData = async () => {
            const raceData = await handleRaceData();
            setRaceData(raceData);
        };

        fetchWeather();
        fetchRace();
        fetchStanding();
        fetchRaceData();
    }, []);

    // useEffect(() => {
    //     const fetchScheduling = async () => {
    //         console.log(standing?.StandingsTable?.round);

    //         const stand = await handleSchedule(standing?.StandingsTable?.round);
    //         setSchedule(stand);
    //         console.log("schedule", schedule);
    //     };

    //     fetchScheduling();
    // }, [standing]);

    const start = new Date(nextRace?.date_start);
    const end = new Date(nextRace?.date_end);

    const formatRaceDate = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const startMonth = start.toLocaleString("en-US", { month: "long" });
        const endMonth = end.toLocaleString("en-US", { month: "long" });

        const startDay = start.getDate();
        const endDay = end.getDate();
        const year = end.getFullYear();

        if (startMonth === endMonth) {
            return `${startMonth} ${startDay} – ${endDay}, ${year}`;
        }

        return `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${year}`;
    };

    // console.log(race.Circuit.circuitId);

    // console.log(circuits);

    // console.log();
    const circuit = circuits.find(
        (item) =>
            item?.grandPrix.toLowerCase ===
            nextRace?.meeting_name.toLowerCase(),
    );

    console.log(circuit);
    

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#0D1117] text-white">
                {/* Header */}
                <section className="relative overflow-hidden border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-10 relative">
                        {/* Back Button */}
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            {/* LEFT */}

                            <div>
                                <span className="px-4 py-1 rounded-full bg-red-600 text-sm font-semibold">
                                    ROUND {standing?.StandingsTable?.round}
                                </span>

                                <h1 className="text-5xl font-black mt-5 leading-tight">
                                    {nextRace?.meeting_name}
                                </h1>

                                {/* <p className="text-gray-400 mt-4 text-lg">
                                    Circuit de Barcelona-Catalunya
                                </p> */}

                                <div className="flex flex-wrap gap-6 mt-8">
                                    <div className="flex items-center gap-3">
                                        <CalendarDays className="text-red-500" />

                                        <div>
                                            <p className="text-gray-500 text-sm">
                                                Race Weekend
                                            </p>

                                            <p className="font-semibold">
                                                {formatRaceDate(
                                                    nextRace?.date_start,
                                                    nextRace?.date_end,
                                                )}
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
                                                {nextRace?.location},{" "}
                                                {nextRace?.country_name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}

                            <div className="relative">
                                <img
                                    src={nextRace?.country_flag}
                                    alt=""
                                    className="rounded-3xl h-[420px] w-full object-cover"
                                />

                                <div className="absolute bottom-5 right-5 bg-[#161B22]/95 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl">
                                    <img
                                        src={nextRace?.circuit_image}
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

                                {/* {[
                                    race?.FirstPractice && {
                                        title: "Practice 1",
                                        day: new Date(
                                            race.FirstPractice.date,
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        }),
                                        time: race.FirstPractice.time.slice(
                                            0,
                                            5,
                                        ),
                                    },

                                    race?.SecondPractice && {
                                        title: "Practice 2",
                                        day: new Date(
                                            race.SecondPractice.date,
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        }),
                                        time: race.SecondPractice.time.slice(
                                            0,
                                            5,
                                        ),
                                    },

                                    race?.ThirdPractice && {
                                        title: "Practice 3",
                                        day: new Date(
                                            race.ThirdPractice.date,
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        }),
                                        time: race.ThirdPractice.time.slice(
                                            0,
                                            5,
                                        ),
                                    },

                                    race?.SprintQualifying && {
                                        title: "Sprint Qualifying",
                                        day: new Date(
                                            race.SprintQualifying.date,
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        }),
                                        time: race.SprintQualifying.time.slice(
                                            0,
                                            5,
                                        ),
                                    },

                                    race?.Sprint && {
                                        title: "Sprint",
                                        day: new Date(
                                            race.Sprint.date,
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        }),
                                        time: race.Sprint.time.slice(0, 5),
                                    },

                                    race?.Qualifying && {
                                        title: "Qualifying",
                                        day: new Date(
                                            race.Qualifying.date,
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        }),
                                        time: race.Qualifying.time.slice(0, 5),
                                    },

                                    {
                                        title: "Race",
                                        day: new Date(
                                            race.date,
                                        ).toLocaleDateString("en-US", {
                                            weekday: "long",
                                        }),
                                        time: race.time.slice(0, 5),
                                    },
                                ]
                                    .filter(Boolean)
                                    .map((item) => (
                                        <div
                                            key={item.title}
                                            className="flex justify-between items-center py-3 border-b border-gray-700"
                                        >
                                            <div>
                                                <h3 className="font-semibold">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-400">
                                                    {item.day}
                                                </p>
                                            </div>

                                            <span className="font-bold text-red-500">
                                                {item.time}
                                            </span>
                                        </div>
                                    ))} */}
                            </div>

                            {/* Weather */}

                            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-7">
                                <h2 className="text-2xl font-bold mb-6">
                                    Race Weather
                                </h2>

                                <div className="text-center">
                                    <div className="text-6xl mb-4">☀️</div>

                                    <h3 className="text-5xl font-black">
                                        29°C
                                    </h3>

                                    <p className="mt-2 text-red-100">
                                        Sunny Conditions
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <p className="text-red-100 text-sm">
                                            Humidity
                                        </p>

                                        <h4 className="text-2xl font-bold">
                                            58%
                                        </h4>
                                    </div>

                                    <div className="bg-white/10 rounded-xl p-4">
                                        <p className="text-red-100 text-sm">
                                            Wind
                                        </p>

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
                                        <span className="text-gray-400">
                                            Turns
                                        </span>

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

                                        <span className="font-bold">
                                            1:18.149
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-400">
                                            Capacity
                                        </span>

                                        <span className="font-bold">
                                            140,700
                                        </span>
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
                                        Home of the Spanish Grand Prix since
                                        1991.
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
            </div>
        </>
    );
}
