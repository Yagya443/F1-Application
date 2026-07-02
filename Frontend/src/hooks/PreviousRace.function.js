import React from "react";

export const PreviousRacesFunc = async (id) => {
    const response1 = await fetch(
        `https://api.jolpi.ca/ergast/f1/2026/${id}/results.json`,
    );
    const response2 = await fetch(
        `https://api.jolpi.ca/ergast/f1/2026/${id - 1}/results.json`,
    );
    const response3 = await fetch(
        `https://api.jolpi.ca/ergast/f1/2026/${id - 2}/results.json`,
    );

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    // console.log("data1", data1);
    // console.log("data2", data2);
    // console.log("data3", data3);

    return [{ data1 }, { data2 }, { data3 }];
};
