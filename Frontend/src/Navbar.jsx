import React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            className={`fixed top-0 left-[50%] -translate-x-1/2 z-50 transition-all duration-300 `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-[100vw] lg:px-8 ">
                <div className="flex items-center justify-between  h-16">
                    {/* Logo */}
                    <a className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-8 h-8 bg-[#E10600] rounded flex items-center justify-center shadow-lg group-hover:shadow-red-600/50 transition-all duration-200">
                                <span className="font-bold text-white text-xs tracking-tighter">
                                    F1
                                </span>
                            </div>
                            <div className="absolute -inset-0.5 bg-[#E10600] rounded opacity-0 group-hover:opacity-30 blur-sm transition-all duration-200" />
                        </div>
                        <span className="text-white font-bold tracking-widest uppercase text-sm">
                            F1 <span className="text-[#E10600]">Tracker</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="flex items-center gap-8 ">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#E10600] font-semibold"
                                    : "text-gray-300 hover:text-white"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/Races"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#E10600] font-semibold"
                                    : "text-gray-300 hover:text-white"
                            }
                        >
                            Races
                        </NavLink>
                        <NavLink
                            to="/Calender"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#E10600] font-semibold"
                                    : "text-gray-300 hover:text-white"
                            }
                        >
                            Calender
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
