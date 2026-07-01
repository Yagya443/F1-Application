import { useState } from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import UpcomingRaces from "../UpcomingRaces";
import PreviousRaces from "../PreviousRaces";
import Footer from "../Footer";
import React from "react";

const Home = () => {
    return (
        <div className={`min-h-screen bg-[#050505] text-white `}>
            <Navbar />
            <main>
                <HeroSection />

                {/* Section Divider */}
                {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />
                </div> */}

                <UpcomingRaces />

                {/* Section Divider */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#1A1A1A] to-transparent" />
                </div>

                <PreviousRaces />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
