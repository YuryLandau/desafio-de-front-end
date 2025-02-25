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
        <div className="min-w-[90px] flex flex-col items-center justify-center gap-4 " {...props}>
            <span className="text-xl">
                {periodHeader}
            </span>

            {children}

            <span className="text-xl">
                {`${temperature}°C`}
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
        <div className="flex flex-row flex-wrap gap-6 md:gap-12 items-center justify-center pb-6 md:pb-16">

            {
                forecastList.filter((forecast) => forecast.dt_txt.includes("03:00:00")
                    || forecast.dt_txt.includes("09:00:00")
                    || forecast.dt_txt.includes("15:00:00")
                    || forecast.dt_txt.includes("21:00:00")).slice(0, 4).map((forecast) => (
                        <PeriodRoot
                            key={forecast.dt}
                            header={forecast.dt_txt}
                            temperature={forecast.main.temp.toFixed(0)}>

                            <Image className="toggle-fill-svg" src={`/assets/icons/${forecast.weather[0].icon}.svg`} alt={forecast.weather[0].description} width={48} height={48} />
                        </PeriodRoot>
                    ))
            }
        </div>
    )
}

export default Periods