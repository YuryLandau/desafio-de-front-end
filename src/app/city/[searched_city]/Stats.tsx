
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
        <div className="grid md:grid-cols-4 font-extralight">
            <div className="flex flex-col items-center justify-center px-4 gap-1 stats-font-setup stats-border">
                <span className="">
                    Wind speed
                </span>

                <span className="">
                    {dayStats.windSpeed}m/s
                </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 gap-1 stats-font-setup stats-border">
                <span className="">
                    Sunrise
                </span>


                <span className="">
                    {new Date(dayStats.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 gap-1 stats-font-setup stats-border">
                <span className="">
                    Sunset
                </span>

                <span className="">
                    {new Date(dayStats.sunset * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 gap-1 stats-font-setup ">
                <span className="">
                    Humidity
                </span>


                <span className="">
                    {dayStats.humidity}%
                </span>
            </div>
        </div>
    )
}

export default Stats