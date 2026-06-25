import { useEffect, useState } from "react";

export async function handleNextRaceDate() {
    const response = await fetch(
        "https://api.openf1.org/v1/meetings?year=2026",
    );

    const races = await response.json();

    const upcomingRace =races?.find(
        (race) => new Date(race.date_start) > new Date(),
    );
    return upcomingRace;
}
