import React from "react";

const handleWeather = async (city) => {

    
    
    const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=c4813accea20441fa22181647250609&q=${city}`,
        
        
    );
    
    const data = await response.json();
    
    // console.log('cityNAme', data);
    return data;
};

export default handleWeather;


