
interface StatsProps {
    dayStats: {
        humidity: number;
        windSpeed: number;
        sunrise: number;
        sunset: number;
    };
}

const Stats = ({ dayStats }: StatsProps) => {
    return (
        <div className="grid md:grid-cols-4 pt-12">
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-2 md:py-0 stats-border border-b-2 border-beje-300 md:border-b-0">
                <span className="stats-text">
                    Wind speed
                </span>

                <span className="stats-text">
                    {dayStats.windSpeed}m/s
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 px-4 py-2 md:py-0 stats-border border-b-2 border-beje-300 md:border-b-0">
                <span className="stats-text">
                    Sunrise
                </span>


                <span className="stats-text">
                    {new Date(dayStats.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1  px-4 py-2 md:py-0 stats-border border-b-2 border-beje-300 md:border-b-0">
                <span className="stats-text">
                    Sunset
                </span>

                <span className="stats-text">
                    {new Date(dayStats.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 gap-1 ">
                <span className="stats-text">
                    Humidity
                </span>


                <span className="stats-text">
                    {dayStats.humidity}%
                </span>
            </div>
        </div>
    )
}

export default Stats