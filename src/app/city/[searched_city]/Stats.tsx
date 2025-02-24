
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
            <div className="flex flex-col items-center justify-center gap-1 px-4 stats-border ">
                <span className="text-xl">
                    Wind speed
                </span>

                <span className="text-xl">
                    {dayStats.windSpeed}m/s
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 px-4 stats-border">
                <span className="text-xl">
                    Sunrise
                </span>


                <span className="text-xl">
                    {new Date(dayStats.sunrise * 1000).toLocaleTimeString()}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 px-4 stats-border">
                <span className="text-xl">
                    Sunset
                </span>

                <span className="text-xl">
                    {new Date(dayStats.sunset * 1000).toLocaleTimeString()}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 gap-1 ">
                <span className="text-xl">
                    Humidity
                </span>


                <span className="text-xl">
                    {dayStats.humidity}%
                </span>
            </div>
        </div>
    )
}

export default Stats