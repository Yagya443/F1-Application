import React from "react";

const handleWeather = async (city) => {

    // console.log('cityNAme', city);
    

    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=24d5716aa0ce14f765c7eca931c89bb5&q=${city}`,
    );

    const data = await response.json();

    return data;
};

export default handleWeather;


