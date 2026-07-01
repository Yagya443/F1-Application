import React from "react";

export const PreviousRacesFunc = async () => {
    const response = await fetch("https://api.jolpi.ca/ergast/f1/current/last/results.json");

    const data = await response.json();

    // console.log(data);

    // const previousfilteredData = data.filter(
    //     (ele) => new Date(ele.date_start) < new Date(),
    // );

    return data.MRData.RaceTable.Races;
};
