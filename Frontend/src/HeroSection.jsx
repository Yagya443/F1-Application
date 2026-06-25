import { MapPin, Calendar, ChevronRight, Radio } from "lucide-react";
import { useCountdown } from "./hooks/useCountdown";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleNextRaceDate } from "./hooks/NextRace.function";
import { handleStanding } from "./hooks/Standings.function";

// import { getNextRace } from "../services/f1Api";

function CountdownBox({ value, label }) {
    const display = String(value).padStart(2, "0");
    return (
        <div className="countdown-box">
            <div className="countdown-number">{display}</div>
            <div className="countdown-label">{label}</div>
        </div>
    );
}

function HeroSection() {
    const [nextRace, setNextRace] = useState(null);
    const [standing, setStanding] = useState(null);


    // const handleCards=()=>{
        
    // }

    useEffect(() => {
        const fetchRace = async () => {
            const race = await handleNextRaceDate();
            setNextRace(race);
            // console.log(race);
        };

        const fetchStanding = async () => {
            const stand = await handleStanding();
            setStanding(stand);
            // console.log(stand);
        };

        fetchRace();
        fetchStanding();
    }, []);

    const today = new Date();
    const countdown = useCountdown(nextRace?.date_end);
    // const countdown = useCountdown(today);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-16 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                {/* Top Badge */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E10600]/10 border border-[#E10600]/25">
                        <Radio
                            size={12}
                            className="text-[#E10600] animate-pulse"
                        />
                        <span
                            className="section-label"
                            style={{ fontSize: "0.65rem" }}
                        >
                            2026 Season — Round{" "}
                            {standing?.StandingsTable?.round} of{" "}
                            {standing?.total}
                        </span>
                    </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border border-[#1A1A1A] relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left — Race Info */}
                        <div className="p-8 sm:p-12 flex flex-col justify-center bg-[#050505]/40 relative z-10">
                            {/* Label */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="section-label">Next Race</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-[#E10600]/40 to-transparent max-w-16" />
                            </div>

                            <div className="mb-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-1">
                                    {nextRace?.country_name}
                                </h1>
                                <h1
                                    className="text-4xl sm:text-5xl lg:text-6xl font-black "
                                    style={{
                                        WebkitTextStroke: "1px #ffffff",
                                        color: "transparent",
                                    }}
                                >
                                    Grand Prix
                                </h1>
                            </div>

                            <div className="flex flex-col gap-2.5 mb-8">
                                <div className="flex items-center gap-2.5 text-gray-400">
                                    <Calendar
                                        size={14}
                                        className="text-[#E10600] flex-shrink-0"
                                    />
                                    <span className="text-sm">
                                        {nextRace?.date_start?.split("T")[0]}
                                        {"  "}
                                        {
                                            nextRace?.date_start
                                                ?.split("T")[1]
                                                .split("+")[0]
                                        }
                                    </span>
                                </div>
                            </div>

                            <div className="track-line w-24 mb-8" />

                            {/* Countdown */}
                            <div className="mb-8">
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-4">
                                    Race Starts In
                                </p>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <CountdownBox
                                        value={countdown.days}
                                        label="Days"
                                    />
                                    <div className="text-[#E10600] text-2xl font-mono font-light mb-4">
                                        :
                                    </div>
                                    <CountdownBox
                                        value={countdown.hours}
                                        label="Hours"
                                    />
                                    <div className="text-[#E10600] text-2xl font-mono font-light mb-4">
                                        :
                                    </div>
                                    <CountdownBox
                                        value={countdown.minutes}
                                        label="Mins"
                                    />
                                    <div className="text-[#E10600] text-2xl font-mono font-light mb-4">
                                        :
                                    </div>
                                    <CountdownBox
                                        value={countdown.seconds}
                                        label="Secs"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to="/Races"
                                    className="btn-primary flex items-center gap-2"
                                >
                                    Race Details
                                    <ChevronRight size={16} />
                                </Link>
                                <button className="btn-secondary flex items-center gap-2">
                                    View Circuit
                                </button>
                            </div>
                        </div>

                        <div className="relative min-h-[350px] lg:min-h-auto overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={nextRace?.circuit_image}
                                    alt={`${nextRace?.country_name} Circuit`}
                                    className="w-full h-full object-fit object-center opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                {/* <SilverstoneOutline /> */}
                            </div>

                            {/* <div className="  "> */}
                            <div className="absolute top-6 right-6 border px-3 py-2 flex gap-2 rounded-lg border-[#E10600]/60">
                                <img
                                    src={nextRace?.country_flag}
                                    className="h-4"
                                />
                                <div className="text-xs text-gray-400 uppercase tracking-wider">
                                    {nextRace?.meeting_official_name}
                                </div>
                                {/* </div> */}
                            </div>

                            <div className="absolute bottom-6 right-6 left-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-widest">
                                            Circuit
                                        </div>
                                        <div className="text-white text-sm font-semibold">
                                            {nextRace?.location},{" "}
                                            {
                                                nextRace?.meeting_name.split(
                                                    " ",
                                                )[0]
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex overflow-x-hidden gap-5">
                    {standing?.StandingsTable?.StandingsLists[0]?.DriverStandings?.map(
                        (driver) => (
                            <div
                                key={driver.position}
                                className="glass-card glass-card-hover rounded-xl min-w-56 p-4 border border-[#1A1A1A] cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-[#E10600] text-xs font-mono font-bold">
                                        P{driver.position}
                                    </span>
                                    <span className="text-lg">
                                        {driver.Driver.code}
                                    </span>
                                </div>
                                <div className="text-white text-sm font-bold truncate">
                                    {driver.Driver.givenName}
                                </div>
                                <div className="text-gray-500 text-xs mt-0.5 truncate">
                                    {driver.Constructors[0].name}
                                </div>
                                <div className="mt-2 text-[#E10600] text-sm font-mono font-semibold">
                                    {driver.points} pts
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
