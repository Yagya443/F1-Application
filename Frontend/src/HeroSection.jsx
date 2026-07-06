import { MapPin, Calendar, ChevronRight, Radio } from "lucide-react";
import { useCountdown } from "./hooks/useCountdown";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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

    const sliderRef = useRef(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        sliderRef.current.classList.add("cursor-grabbing");
        sliderRef.current.classList.remove("cursor-grab");

        startX.current = e.pageX;
        scrollLeft.current = sliderRef.current.scrollLeft;
    };
    const handleMouseLeave = (e) => {
        isDragging.current = false;
        sliderRef.current.classList.remove("cursor-grabbing");
        sliderRef.current.classList.add("cursor-grab");

        // startX.current = e.pageX;
        // scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        sliderRef.current.classList.remove("cursor-grabbing");
        sliderRef.current.classList.add("cursor-grab");

        const CARD_WIDTH = 244;
        const scroll = sliderRef.current.scrollLeft;

        const snap = Math.round(scroll / CARD_WIDTH) * CARD_WIDTH;

        sliderRef.current.scrollTo({
            left: snap,
            behavior: "smooth",
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const distance = e.pageX - startX.current;

        sliderRef.current.scrollLeft = scrollLeft.current - distance;
    };

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
            className="min-h-screen flex items-center pt-16 relative overflow-hidden hero-section"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 hero-container">
                {/* Top Badge */}
                <div className="flex items-center gap-2 mb-8 season-badge-wrapper">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E10600]/10 border border-[#E10600]/25 season-badge">
                        <Radio
                            size={12}
                            className="text-[#E10600] animate-pulse radio-icon"
                        />
                        <span
                            className="section-label season-badge-text"
                            style={{ fontSize: "0.65rem" }}
                        >
                            2026 Season — Round{" "}
                            {standing?.StandingsTable?.round} of{" "}
                            {standing?.total}
                        </span>
                    </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border border-[#1A1A1A] relative next-race-card">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 next-race-grid">
                        {/* Left — Race Info */}
                        <div className="p-8 sm:p-12 flex flex-col justify-center bg-[#050505]/40 relative z-10 race-info-panel">
                            {/* Label */}
                            <div className="flex items-center gap-3 mb-4 next-race-label-row">
                                <span className="section-label next-race-label">
                                    Next Race
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-r from-[#E10600]/40 to-transparent max-w-16 next-race-divider" />
                            </div>

                            <div className="mb-6 race-heading-block">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-1 race-country-title">
                                    {nextRace?.country_name}
                                </h1>
                                <h1
                                    className="text-4xl sm:text-5xl lg:text-6xl font-black race-gp-title"
                                    style={{
                                        WebkitTextStroke: "1px #ffffff",
                                        color: "transparent",
                                    }}
                                >
                                    Grand Prix
                                </h1>
                            </div>

                            <div className="flex flex-col gap-2.5 mb-8 race-meta-block">
                                <div className="flex items-center gap-2.5 text-gray-400 race-date-row">
                                    <Calendar
                                        size={14}
                                        className="text-[#E10600] flex-shrink-0 calendar-icon"
                                    />
                                    <span className="text-sm race-date-text">
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

                            <div className="track-line w-24 mb-8 track-line-divider" />

                            {/* Countdown */}
                            <div className="mb-8 countdown-block">
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-4 countdown-label">
                                    Race Starts In
                                </p>
                                <div className="flex items-end gap-2 sm:gap-3 countdown-row">
                                    <CountdownBox
                                        value={countdown.days}
                                        label="Days"
                                    />
                                    <div className="text-[#E10600] text-2xl font-mono font-light mb-4 countdown-separator countdown-separator-1">
                                        :
                                    </div>
                                    <CountdownBox
                                        value={countdown.hours}
                                        label="Hours"
                                    />
                                    <div className="text-[#E10600] text-2xl font-mono font-light mb-4 countdown-separator countdown-separator-2">
                                        :
                                    </div>
                                    <CountdownBox
                                        value={countdown.minutes}
                                        label="Mins"
                                    />
                                    <div className="text-[#E10600] text-2xl font-mono font-light mb-4 countdown-separator countdown-separator-3">
                                        :
                                    </div>
                                    <CountdownBox
                                        value={countdown.seconds}
                                        label="Secs"
                                    />
                                </div>
                                <p className="countdown-timezone-note">
                                    Race is According to{" "}
                                    {nextRace?.country_name} Time
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 hero-cta-row">
                                <Link
                                    to="/Races"
                                    className="btn-primary flex items-center gap-2 race-details-link"
                                >
                                    Race Details
                                    <ChevronRight
                                        size={16}
                                        className="race-details-icon"
                                    />
                                </Link>
                                <button className="btn-secondary flex items-center gap-2 view-circuit-button">
                                    View Circuit
                                </button>
                            </div>
                        </div>

                        <div className="relative min-h-[350px] lg:min-h-auto overflow-hidden circuit-image-panel">
                            <div className="absolute inset-0 circuit-image-wrapper">
                                <img
                                    src={nextRace?.circuit_image}
                                    alt={`${nextRace?.country_name} Circuit`}
                                    className="w-full h-full object-fit object-center opacity-50 circuit-background-image"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent circuit-image-overlay" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center p-8 circuit-outline-slot">
                                {/* <SilverstoneOutline /> */}
                            </div>

                            <div className="absolute top-6 right-6 border px-3 py-2 flex gap-2 rounded-lg border-[#E10600]/60 meeting-name-badge">
                                <img
                                    src={nextRace?.country_flag}
                                    className="h-4 meeting-country-flag"
                                />
                                <div className="text-xs text-gray-400 uppercase tracking-wider meeting-official-name">
                                    {nextRace?.meeting_official_name}
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 left-6 circuit-location-block">
                                <div className="flex items-center gap-3 circuit-location-row">
                                    <div className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse circuit-location-dot" />
                                    <div className="circuit-location-text-block">
                                        <div className="text-xs text-gray-500 uppercase tracking-widest circuit-location-label">
                                            Circuit
                                        </div>
                                        <div className="text-white text-sm font-semibold circuit-location-value">
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

                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    className="flex flex-nowrap overflow-x-hidden scrollbar-hide gap-5 cursor-grab select-none driver-standings-slider"
                >
                    {standing?.StandingsTable?.StandingsLists[0]?.DriverStandings?.map(
                        (driver) => (
                            <div
                                key={driver.position}
                                className={`glass-card glass-card-hover rounded-xl min-w-56 p-4 border border-[#1A1A1A] driver-card driver-card-${driver.position}`}
                            >
                                <div
                                    className={`flex items-start justify-between mb-2 driver-card-header driver-card-header-${driver.position}`}
                                >
                                    <span
                                        className={`text-[#E10600] text-xs font-mono font-bold driver-position driver-position-${driver.position}`}
                                    >
                                        P{driver.position}
                                    </span>
                                    <span
                                        className={`text-lg driver-code driver-code-${driver.position}`}
                                    >
                                        {driver.Driver.code}
                                    </span>
                                </div>
                                <div
                                    className={`text-white text-sm font-bold truncate driver-name driver-name-${driver.position}`}
                                >
                                    {driver.Driver.givenName}
                                </div>
                                <div
                                    className={`text-gray-500 text-xs mt-0.5 truncate driver-team driver-team-${driver.position}`}
                                >
                                    {driver.Constructors[0].name}
                                </div>
                                <div
                                    className={`mt-2 text-[#E10600] text-sm font-mono font-semibold driver-points driver-points-${driver.position}`}
                                >
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
