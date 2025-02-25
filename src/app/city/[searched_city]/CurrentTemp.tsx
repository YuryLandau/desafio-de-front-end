import { WeatherMain } from "@/app/types/weather"
import { ArrowDown, ArrowUp } from "lucide-react"

interface CurrentTempProps {
    main: WeatherMain
}
const CurrentTemp = ({ main }: CurrentTempProps) => {
    return (
        <div className="pt-2">
            <div className="flex font-extralight py-2">
                <span className="text-9xl text-beje-200">{Math.round(main.temp)}</span>

                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-between items-center gap-4">
                        <span className="text-3xl">°C</span>

                        <div className="flex flex-col justify-center text-antique-100 text-xl">
                            <div className="flex items-center">
                                <ArrowUp className="size-5" /> {Math.round(main.temp_max)}°
                            </div>

                            <div className="flex items-center">
                                <ArrowDown className="size-5" /> {Math.round(main.temp_min)}°
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentTemp