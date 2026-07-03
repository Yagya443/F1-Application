

export async function handleAllRace() {
    const response = await fetch(
        "https://api.openf1.org/v1/meetings?year=2026",
    );
    
    const races = await response.json();
    // console.log("handleAllRace2", races);

    return races;
}
