import { ChevronRight, CalendarDays, Flag } from "lucide-react";

const upcomingRaces = [
    {
        month: "JUN",
        date: "26-28",
        year: "2026",
        flag: "🇦🇹",
        name: "AUSTRIAN GRAND PRIX",
        location: "Red Bull Ring, Spielberg",
    },
    {
        month: "JUL",
        date: "05-07",
        year: "2026",
        flag: "🇬🇧",
        name: "BRITISH GRAND PRIX",
        location: "Silverstone Circuit, Silverstone",
    },
    {
        month: "JUL",
        date: "19-21",
        year: "2026",
        flag: "🇧🇪",
        name: "BELGIAN GRAND PRIX",
        location: "Circuit de Spa-Francorchamps, Stavelot",
    },
    {
        month: "AUG",
        date: "02-04",
        year: "2026",
        flag: "🇭🇺",
        name: "HUNGARIAN GRAND PRIX",
        location: "Hungaroring, Budapest",
    },
    {
        month: "AUG",
        date: "30-04",
        year: "2026",
        flag: "🇳🇱",
        name: "DUTCH GRAND PRIX",
        location: "Circuit Zandvoort, Zandvoort",
    },
];

const previousRaces = [
    {
        month: "MAY",
        date: "16-18",
        year: "2026",
        flag: "🇮🇹",
        race: "EMILIA ROMAGNA GRAND PRIX",
        location: "Imola Circuit, Imola",
        winner: "Max Verstappen",
        team: "Red Bull Racing",
    },
    {
        month: "MAY",
        date: "02-04",
        year: "2026",
        flag: "🇺🇸",
        race: "MIAMI GRAND PRIX",
        location: "Miami International Autodrome, Miami",
        winner: "Lando Norris",
        team: "McLaren",
    },
    {
        month: "APR",
        date: "18-20",
        year: "2026",
        flag: "🇯🇵",
        race: "JAPANESE GRAND PRIX",
        location: "Suzuka Circuit, Suzuka",
        winner: "Max Verstappen",
        team: "Red Bull Racing",
    },
    {
        month: "APR",
        date: "11-13",
        year: "2026",
        flag: "🇧🇭",
        race: "BAHRAIN GRAND PRIX",
        location: "Bahrain International Circuit, Sakhir",
        winner: "Charles Leclerc",
        team: "Ferrari",
    },
];

const RaceCard = ({ race, previous }) => {
    return (
        <div className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-[#0a0d14] px-6 py-5 transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/10">
            {/* Date */}
            <div className="w-32 text-center">
                <p className="text-red-500 font-semibold">{race.month}</p>
                <h3 className="text-4xl font-bold">{race.date}</h3>
                <p className="text-zinc-500">{race.year}</p>
            </div>

            {/* Flag */}
            <div className="text-5xl">{race.flag}</div>

            {/* Race Info */}
            <div className="flex-1 ml-8">
                <h3 className="text-2xl font-bold">{race.name || race.race}</h3>
                <p className="text-zinc-400 mt-1">{race.location}</p>
            </div>

            {/* Winner Section */}
            {previous && (
                <div className="hidden md:block mr-12">
                    <p className="text-xs uppercase text-zinc-500">Winner</p>
                    <h4 className="font-bold text-lg">{race.winner}</h4>
                    <p className="text-zinc-400">{race.team}</p>
                </div>
            )}

            {/* Arrow */}
            <ChevronRight
                size={26}
                className="text-zinc-500 group-hover:text-white"
            />
        </div>
    );
};

export default function Calendar() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-5xl font-bold">RACE CALENDAR</h1>

                    <div className="w-20 h-1 bg-red-500 mx-auto mt-5 rounded-full"></div>
                </div>

                {/* Upcoming */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <CalendarDays className="text-red-500" />
                        <h2 className="text-2xl font-bold uppercase">
                            Upcoming Races
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {upcomingRaces.map((race, index) => (
                            <RaceCard key={index} race={race} />
                        ))}
                    </div>
                </div>

                {/* Previous */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <Flag className="text-red-500" />
                        <h2 className="text-2xl font-bold uppercase">
                            Previous Races
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {previousRaces.map((race, index) => (
                            <RaceCard key={index} race={race} previous={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
