import React from "react";

const handleWeather = async (city) => {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=de4816e64bc6731be4efdc701ef62893&q=${city}`,
    );

    const data = await response.json();

    return data;
};

export default handleWeather;


