import { WeatherMain } from "@/app/types/weather"
import Image from "next/image"

interface CurrentTempProps {
    main: WeatherMain
}
const CurrentTemp = ({ main }: CurrentTempProps) => {
    return (
        <div className="py-6 font-extralight">
            <div className="flex gap-2">
                <h1 className="text-9xl">{Math.round(main.temp)}</h1>

                <div className="flex flex-col justify-center pl-2 pt-4 pb-2">
                    <div className="flex flex-col justify-between items-center gap-6">
                        <span className="text-4xl">°C</span>

                        <div className="flex flex-col justify-center items-start">
                            <div className="flex items-center text-lg">
                                <Image className="toggle-fill-svg" src={`/assets/icons/arrow-up.svg`} alt={""} width={18} height={18} /> {Math.round(main.temp_max)}°
                            </div>

                            <div className="flex items-center text-lg">
                                <Image className="toggle-fill-svg" src={`/assets/icons/arrow-down.svg`} alt={""} width={18} height={18} /> {Math.round(main.temp_min)}°
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentTemp