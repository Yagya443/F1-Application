import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Races from "./Pages/Races";
import Calendar from "./Pages/Calender";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Races" element={<Races />} />
                <Route path="/Calender" element={<Calendar/>} />
            </Routes>
        </>
    );
};

export default App;
