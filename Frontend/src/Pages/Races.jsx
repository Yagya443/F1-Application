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
import circuits from "../data/circuit.json";
import handleWeather from "../hooks/Weather.function";
import PreviousRaceWinners from "../hooks/PreviousRaceWinners.function";
import Footer from "../Footer";
import { handleAllRace } from "../hooks/AllRace.function";
import handleRaceData from "../hooks/RaceData.function";
import axios from "axios";

import "../../src/index.css";
// import './index.css'

export default function Races() {
    const [nextRace, setNextRace] = useState(null);
    const [standing, setStanding] = useState(null);
    const [schedule, setSchedule] = useState(null);
    const [weather, setWeather] = useState(null);
    const [raceData, setRaceData] = useState(null);
    const [circuitData, setCircuitData] = useState(null);
    const [previousWinner, setPreviousWinner] = useState(null);
    const [aiFacts, setAiFacts] = useState(null);

    useEffect(() => {
        const fetchRace = async () => {
            const race = await handleNextRaceDate();
            setNextRace(race);
            // console.log("handleNextRace", race);

            // console.log("nextRace", nextRace);

            const circuit = circuits.find(
                (item) => item?.grandPrix === race?.meeting_name,
            );
            // console.log(circuits);
            setCircuitData(circuit);
            // console.log("circuits", circuits);
            // console.log("nextRace", nextRace);
            // console.log("circuit", circuit);
        };

        const fetchStanding = async () => {
            const stand = await handleStanding();
            setStanding(stand);
            // console.log("stand", stand);
        };

        const fetchRaceData = async () => {
            const raceData = await handleRaceData();
            setRaceData(raceData);
            // console.log("raceData2", raceData);
        };

        fetchRace();
        fetchStanding();
        fetchRaceData();
        // fetchWeather();
    }, []);

    useEffect(() => {
        if (!circuitData) return;
        const fetchWeather = async () => {
            const weath = await handleWeather(circuitData?.country);
            setWeather(weath);
            // console.log("weather", weather);
        };

        const fetchPreviousWinner = async () => {
            const previous = await PreviousRaceWinners(circuitData?.circuitId);
            // console.log("fetchPreviousWinner", previous);
            setPreviousWinner(previous);
        };

        const handleQuickFact = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/api/facts",
                    {
                        answer: circuitData?.grandPrix,
                    },
                );

                setAiFacts(response.data.response);
                // console.log((response.data.response));
            } catch (error) {
                console.log(error.response?.data || error.message);
            }
        };

        fetchWeather();
        fetchPreviousWinner();
        handleQuickFact();
    }, [circuitData]);

    // console.log("circuitData", circuitData);

    // const start = new Date(nextRace?.date_start);
    // const end = new Date(nextRace?.date_end);

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const [race, standing, raceData] = await Promise.all([
    //                 handleAllRace(),
    //                 handleStanding(),
    //                 handleRaceData(),
    //             ]);

    //             setNextRace(race);
    //             setStanding(standing);
    //             setRaceData(raceData);

    //             const circuit = circuits.find(
    //                 (item) => item.grandPrix === race.meeting_name,
    //             );

    //             setCircuitData(circuit);

    //             if (circuit) {
    //                 const [weather, previousWinner] = await Promise.all([
    //                     handleWeather(circuit.country),
    //                     PreviousRaceWinners(circuit.circuitId),
    //                 ]);

    //                 setWeather(weather);
    //                 setPreviousWinner(previousWinner);
    //             }
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     loadData();
    // }, []);

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

    // console.log(circuitData);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#0D1117] text-white page-wrapper">
                {/* Header */}
                <section className="relative pt-6 sm:pt-8 overflow-hidden border-b border-white/10 header-section">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 relative header-container">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center header-grid">
                            {/* LEFT */}
                            <div className="header-left">
                                <span className="px-4 py-1 rounded-full bg-red-600 text-xs sm:text-sm font-semibold round-badge">
                                    ROUND {standing?.StandingsTable?.round}
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 sm:mt-5 leading-tight race-title">
                                    {nextRace?.meeting_name}
                                </h1>

                                <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8 header-meta-row">
                                    <div className="flex items-center gap-3 race-weekend-info">
                                        <CalendarDays className="text-red-500 shrink-0 calendar-icon" />
                                        <div className="race-weekend-text">
                                            <p className="text-gray-500 text-xs sm:text-sm race-weekend-label">
                                                Race Weekend
                                            </p>
                                            <p className="font-semibold text-sm sm:text-base race-weekend-value">
                                                {formatRaceDate(
                                                    nextRace?.date_start,
                                                    nextRace?.date_end,
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 race-location-info">
                                        <MapPin className="text-red-500 shrink-0 location-icon" />
                                        <div className="race-location-text">
                                            <p className="text-gray-500 text-xs sm:text-sm race-location-label">
                                                Location
                                            </p>
                                            <p className="font-semibold text-sm sm:text-base race-location-value">
                                                {nextRace?.location},{" "}
                                                {nextRace?.country_name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative header-right-image">
                                <img
                                    src={nextRace?.country_flag}
                                    alt=""
                                    className="rounded-2xl sm:rounded-3xl h-56 sm:h-80 lg:h-[420px] w-full object-cover country-flag-image"
                                />

                                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-[#161B22]/95 backdrop-blur-md p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 shadow-xl circuit-layout-card">
                                    <img
                                        src={nextRace?.circuit_image}
                                        className="h-16 sm:h-28 object-contain circuit-layout-image"
                                        alt=""
                                    />
                                    <p className="text-center mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400 circuit-layout-caption">
                                        Circuit Layout
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 main-section">
                    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 main-content-grid">
                        <div className="lg:col-span-2 space-y-6 sm:space-y-8 main-content-left">
                            <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-8 race-info-card">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 race-info-title">
                                    Race Information
                                </h2>

                                <div className="grid grid-cols-2 gap-4 sm:gap-6 race-info-grid">
                                    <div className="bg-[#0D1117] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 race-distance-tile">
                                        <Flag className="text-red-500 mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6 race-distance-icon" />
                                        <p className="text-gray-500 text-xs sm:text-sm race-distance-label">
                                            Race Distance
                                        </p>
                                        <h3 className="text-lg sm:text-2xl font-bold mt-1 race-distance-value">
                                            {circuitData?.raceDistance}
                                        </h3>
                                    </div>

                                    <div className="bg-[#0D1117] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 laps-tile">
                                        <Clock className="text-red-500 mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6 laps-icon" />
                                        <p className="text-gray-500 text-xs sm:text-sm laps-label">
                                            Laps
                                        </p>
                                        <h3 className="text-lg sm:text-2xl font-bold mt-1 laps-value">
                                            {circuitData?.laps}
                                        </h3>
                                    </div>

                                    <div className="bg-[#0D1117] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 circuit-length-tile">
                                        <MapPin className="text-red-500 mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6 circuit-length-icon" />
                                        <p className="text-gray-500 text-xs sm:text-sm circuit-length-label">
                                            Circuit Length
                                        </p>
                                        <h3 className="text-lg sm:text-2xl font-bold mt-1 circuit-length-value">
                                            {circuitData?.length}
                                        </h3>
                                    </div>

                                    <div className="bg-[#0D1117] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5 fastest-lap-tile">
                                        <Trophy className="text-red-500 mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6 fastest-lap-icon" />
                                        <p className="text-gray-500 text-xs sm:text-sm fastest-lap-label">
                                            Fastest Lap
                                        </p>
                                        <h3 className="text-lg sm:text-2xl font-bold mt-1 fastest-lap-value">
                                            {circuitData?.firstGrandPrix}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-8 previous-winners-card">
                                <div className="flex items-center justify-between mb-6 sm:mb-8 previous-winners-header">
                                    <h2 className="text-2xl sm:text-3xl font-bold previous-winners-title">
                                        Previous Winners
                                    </h2>
                                </div>

                                <div className="space-y-4 sm:space-y-5 previous-winners-list">
                                    {previousWinner?.map((winner, idx) => (
                                        <div
                                            key={idx}
                                            className={`bg-[#0D1117] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 border border-white/5 hover:border-red-500 transition winner-row winner-row-${idx}`}
                                        >
                                            <div
                                                className={`flex items-center gap-3 sm:gap-5 min-w-0 winner-info winner-info-${idx}`}
                                            >
                                                <div
                                                    className={`w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full ${winner.color} flex items-center justify-center font-bold text-base sm:text-2xl winner-badge winner-badge-${idx}`}
                                                >
                                                    P1
                                                </div>

                                                <div
                                                    className={`min-w-0 winner-name-block winner-name-block-${idx}`}
                                                >
                                                    <h3
                                                        className={`text-lg sm:text-2xl font-semibold truncate winner-name winner-name-${idx}`}
                                                    >
                                                        {winner.firstName}{" "}
                                                        {winner.lastName}
                                                    </h3>
                                                    <p
                                                        className={`text-gray-400 text-sm sm:text-base truncate winner-car winner-car-${idx}`}
                                                    >
                                                        {winner.car}
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className={`text-xl sm:text-3xl font-black text-gray-300 shrink-0 winner-year winner-year-${idx}`}
                                            >
                                                {winner.year}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="space-y-6 sm:space-y-8 main-content-right">
                            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 weather-card">
                                <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 weather-title">
                                    Race Weather
                                </h2>

                                <div className="text-center weather-main">
                                    <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 weather-icon">
                                        {weather?.current?.condition?.icon}
                                    </div>
                                    <h3 className="text-4xl sm:text-5xl font-black weather-temp">
                                        {weather?.current?.temp_c}°C
                                    </h3>
                                    <p className="mt-2 text-red-100 text-sm sm:text-base weather-condition-text">
                                        {weather?.current?.condition?.text}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 weather-stats-grid">
                                    <div className="bg-white/10 rounded-xl p-3 sm:p-4 humidity-tile">
                                        <p className="text-red-100 text-xs sm:text-sm humidity-label">
                                            Humidity
                                        </p>
                                        <h4 className="text-xl sm:text-2xl font-bold humidity-value">
                                            {weather?.humidity}%
                                        </h4>
                                    </div>

                                    <div className="bg-white/10 rounded-xl p-3 sm:p-4 wind-tile">
                                        <p className="text-red-100 text-xs sm:text-sm wind-label">
                                            Wind
                                        </p>
                                        <h4 className="text-xl sm:text-2xl font-bold wind-value">
                                            {weather?.wind_kph}km/h
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Circuit Stats */}
                            <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-7 circuit-stats-card">
                                <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 circuit-stats-title">
                                    Circuit Stats
                                </h2>

                                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base circuit-stats-list">
                                    <div className="flex justify-between stat-turns-row">
                                        <span className="text-gray-400 stat-turns-label">
                                            Turns
                                        </span>
                                        <span className="font-bold stat-turns-value">
                                            {circuitData?.turns}
                                        </span>
                                    </div>
                                    <div className="flex justify-between stat-drs-row">
                                        <span className="text-gray-400 stat-drs-label">
                                            DRS Zones
                                        </span>
                                        <span className="font-bold stat-drs-value">
                                            {circuitData?.drsZones}
                                        </span>
                                    </div>
                                    <div className="flex justify-between stat-firstgp-row">
                                        <span className="text-gray-400 stat-firstgp-label">
                                            First GP
                                        </span>
                                        <span className="font-bold stat-firstgp-value">
                                            {circuitData?.firstGrandPrix}
                                        </span>
                                    </div>
                                    <div className="flex justify-between stat-laprecord-row">
                                        <span className="text-gray-400 stat-laprecord-label">
                                            Lap Record
                                        </span>
                                        <span className="font-bold stat-laprecord-value">
                                            {circuitData?.lapRecord.time}
                                        </span>
                                    </div>
                                    <div className="flex justify-between stat-elevation-row">
                                        <span className="text-gray-400 stat-elevation-label">
                                            Elevation Change
                                        </span>
                                        <span className="font-bold stat-elevation-value">
                                            {circuitData?.elevationChange}
                                        </span>
                                    </div>
                                    <div className="flex justify-between stat-capacity-row">
                                        <span className="text-gray-400 stat-capacity-label">
                                            Capacity
                                        </span>
                                        <span className="font-bold stat-capacity-value">
                                            {circuitData?.capacity}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-[#161B22] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-7 quick-facts-card">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 quick-facts-title">
                                    Quick Facts
                                </h2>

                                <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base quick-facts-list">
                                    <li className="flex gap-3 quick-fact-item quick-fact-item-0">
                                        <span className="text-red-500 shrink-0 quick-fact-bullet quick-fact-bullet-0">
                                            ●
                                        </span>
                                        Excellent track for aerodynamic testing.
                                    </li>
                                    <li className="flex gap-3 quick-fact-item quick-fact-item-1">
                                        <span className="text-red-500 shrink-0 quick-fact-bullet quick-fact-bullet-1">
                                            ●
                                        </span>
                                        Overtaking mainly into Turn 1.
                                    </li>
                                    <li className="flex gap-3 quick-fact-item quick-fact-item-2">
                                        <span className="text-red-500 shrink-0 quick-fact-bullet quick-fact-bullet-2">
                                            ●
                                        </span>
                                        Famous for long sweeping corners.
                                    </li>
                                    <li className="flex gap-3 quick-fact-item quick-fact-item-3">
                                        <span className="text-red-500 shrink-0 quick-fact-bullet quick-fact-bullet-3">
                                            ●
                                        </span>
                                        Home of the Spanish Grand Prix since{" "}
                                        {circuitData?.firstGrandPrix}.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
