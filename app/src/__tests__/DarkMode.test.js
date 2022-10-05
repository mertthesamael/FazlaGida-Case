import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DarkMode from '../components/DarkMode/DarkMode';
import MainCard from '../components/MainCard/MainCard';
import Main from '../pages/Main/Main';

it("should change colors on click", () => {
    const Mock = () => {

        return(
            <BrowserRouter>
                <Main></Main>
            </BrowserRouter>
        )
    }
    render(<Mock></Mock>);
    const btn = screen.getByRole('button')
    const mainBg = screen.getByTestId('background')
    fireEvent.click(btn)
    expect(mainBg).toHaveStyle('background-color: var(--background-color)')

})

it("should change colors on click", () => {
    const Mock = () => {

        return(
            <BrowserRouter>
                <DarkMode></DarkMode>
                <MainCard></MainCard>
            </BrowserRouter>
        )
    }
    render(<Mock></Mock>);
    const btn = screen.getByRole('button')
    const cardBg = screen.getByTestId('card')
    fireEvent.click(btn)
    expect(cardBg).toHaveStyle('background-color: var(--card)')

})

