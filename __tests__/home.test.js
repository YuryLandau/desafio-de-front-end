import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe } from 'node:test'
import Home from '../src/app/(home)/page'
describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', { level: 1 })
        const heading2 = screen.getByRole('heading', { level: 2 })

        expect(heading).toBeInTheDocument()
        expect(heading2).toBeInTheDocument()
    })

    it('has 6 links to the other pages', () => {
        render(<Home />)
        const dallol = "Dallol";
        const fairbanks = "Fairbanks";
        const londres = "Londres";
        const recife = "Recife";
        const vancouver = "Vancouver";
        const yakutsk = "Yakutsk";

        const dallolLink = screen.getByText(dallol);
        const fairbanksLink = screen.getByText(fairbanks);
        const londresLink = screen.getByText(londres);
        const recifeLink = screen.getByText(recife);
        const vancouverLink = screen.getByText(vancouver);
        const yakutskLink = screen.getByText(yakutsk);

        expect(dallolLink).toBeInTheDocument()
        expect(fairbanksLink).toBeInTheDocument()
        expect(londresLink).toBeInTheDocument()
        expect(recifeLink).toBeInTheDocument()
        expect(vancouverLink).toBeInTheDocument()
        expect(yakutskLink).toBeInTheDocument()
    })
})
