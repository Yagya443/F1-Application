import React from "react";

export const handleSchedule = async (id) => {

    // console.log(id);
    

    const response = await fetch(`https://api.jolpi.ca/ergast/f1/2026/${id}.json`);

    const data = await response.json();

    // console.log(data);


    return data.MRData.RaceTable.Races;
};
