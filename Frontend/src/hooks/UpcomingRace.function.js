import React from "react";

export const UpcomingRace = async () => {
    const response = await fetch("https://api.openf1.org/v1/meetings");

    const data = await response.json();

    // console.log(data);

    const upcomingfilteredData = data.filter(
        (ele) => new Date(ele.date_start) > new Date(),
    );

    return upcomingfilteredData;
};
