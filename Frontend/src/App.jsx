import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Races from "./Pages/Races";
import Calendar from "./Pages/Calender";
import About from "./Pages/About";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Races" element={<Races />} />
                <Route path="/Calender" element={<Calendar/>} />
                <Route path="/About" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
