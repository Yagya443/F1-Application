const API_KEY = "845d14a227fae1a238f42d77f0012242";

const handleRaceData = async () => {
    const response = await fetch(`https://api.jolpi.ca/ergast/f1/circuits/`);

    const data = await response.json();
    console.log("Race Data", data);
    return data.response;
};

export default handleRaceData;
