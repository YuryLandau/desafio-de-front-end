import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import fetchMock from "jest-fetch-mock";
import { describe } from 'node:test';
import CurrentTemp from '../src/app/city/[searched_city]/CurrentTemp.tsx';

describe('Cities', () => {

    const main = {
        temp: 30,
        feels_like: 29,
        temp_min: 18,
        temp_max: 17,
        pressure: 16,
        humidity: 215,
        sea_level: 14,
        grnd_level: 12,
    }

    it('Renders current temp', () => {
        fetchMock.mockResponseOnce(JSON.stringify({ main }));
        render(<CurrentTemp main={main} />)

        const temperature = screen.getByText(main.temp);
        expect(temperature).toBeInTheDocument()

    })

    it('Renders max temp', () => {
        fetchMock.mockResponseOnce(JSON.stringify({ main }));
        render(<CurrentTemp main={main} />)

        const maxTemp = main.temp_max;
        const maxTempText = screen.getAllByTestId('maxTemp')[0];
        expect(maxTempText).toHaveTextContent(maxTemp);

    })

    it('Renders min temp', () => {
        render(<CurrentTemp main={main} />)

        const minTemp = main.temp_min;
        const minTempText = screen.getAllByTestId('minTemp')[0];
        expect(minTempText).toHaveTextContent(minTemp);
    })
    cleanup()
})
