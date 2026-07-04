const PreviousRaceWinners = async (id) => {


    // console.log('id',id);
    // console.log(country, id);
    // console.log(country, id);

    const response1 = await fetch(
        `https://api.jolpi.ca/ergast/f1/2025/circuits/${id}/results.json`,
    );

    const response2 = await fetch(
        `https://api.jolpi.ca/ergast/f1/2024/circuits/${id}/results.json`,
    );

    const response3 = await fetch(
        `https://api.jolpi.ca/ergast/f1/2023/circuits/${id}/results.json`,
    );

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    // console.log("data1",data1);
    // console.log("data1",data1);
    // console.log("data1",data1);

    // const year1=.Driver

    // const data = data1?.MRData?.RaceTable?.Races[0]?.Results[0];

    return [
        {
            year: 2025,
            color: "bg-yellow-400",
            
            firstName:
                data1?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                    ?.givenName,
            lastName:
                data1?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                    ?.familyName,
            code: data1?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                ?.code,
            car: data1?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Constructor
                ?.name,
        },
        {
            year: 2024,
            color: "bg-gray-300",
            firstName:
                data2?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                    ?.givenName,
            lastName:
                data2?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                    ?.familyName,
            code: data2?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                ?.code,
            car: data2?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Constructor
                ?.name,
        },
        {
            year: 2023,
            color: "bg-amber-700",
            firstName:
                data3?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                    ?.givenName,
            lastName:
                data3?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                    ?.familyName,
            code: data3?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Driver
                ?.code,
            car: data3?.MRData?.RaceTable?.Races[0]?.Results?.[0]?.Constructor
                ?.name,
        },
    ];
};

export default PreviousRaceWinners;
