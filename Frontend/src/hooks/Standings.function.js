import React from "react";

export const handleStanding = async () => {
    const response = await fetch(
        "https://api.jolpi.ca/ergast/f1/current/driverStandings.json",
    );
    const data = await response.json();

    return data.MRData;
};
