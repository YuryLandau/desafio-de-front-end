
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
        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-rows-1 md:grid-cols-4 font-extralight">
            <div className="flex flex-col items-center justify-center px-4 gap-1 stats-font-setup stats-border_odd">
                <span className="">
                    Wind speed
                </span>

                <span className="">
                    {dayStats.windSpeed}m/s
                </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 gap-1 stats-font-setup stats-border_even">
                <span className="">
                    Sunrise
                </span>


                <span className="">
                    {new Date(dayStats.sunrise * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 gap-1 stats-font-setup stats-border_odd">
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