import { ForecastRoot } from '@/app/types/forecast';
import Image from 'next/image';
import { ComponentProps } from 'react';

interface PeriodRootProps extends ComponentProps<'div'> {
    header?: string;
    temperature?: string;
    children?: React.ReactNode;
}
const PeriodRoot = ({ header, temperature, children, ...props }: PeriodRootProps) => {

    const periodHeader = header?.includes("03:00:00")
        ? "Dawn" : header?.includes("09:00:00")
            ? "Morning" : header?.includes("15:00:00")
                ? "Afternoon" : "Night"

    return (
        <div className="flex flex-col items-center justify-center gap-1 " {...props}>
            <span className="text-xl">
                {periodHeader}
            </span>

            {children}

            <span className="text-xl">
                {`${temperature}°C` ?? '-'}
            </span>
        </div>
    )
}

interface PeriodProps extends ComponentProps<'div'> {
    forecastList: ForecastRoot[]
}
const Periods = (props: PeriodProps) => {

    const { forecastList } = props;

    return (
        <div className="grid gap-4 md:grid-cols-5 pt-2">

            {
                forecastList.filter((forecast) => forecast.dt_txt.includes("03:00:00")
                    || forecast.dt_txt.includes("09:00:00")
                    || forecast.dt_txt.includes("15:00:00")
                    || forecast.dt_txt.includes("21:00:00")).slice(0, 5).map((forecast) => (
                        <PeriodRoot
                            key={forecast.dt}
                            header={forecast.dt_txt}
                            temperature={forecast.main.temp.toFixed(0)}>

                            <Image src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt={forecast.weather[0].description} width={100} height={100} />
                        </PeriodRoot>
                    ))
            }

        </div>
    )
}

export default Periods