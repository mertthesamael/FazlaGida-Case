import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import DarkMode from '../components/DarkMode/DarkMode';
import MainCard from '../components/MainCard/MainCard';
import Main from '../pages/Main/Main';

it("should change colors on click", () => {

    const Mock = () => {
        
        const queryClient = new QueryClient()

        return(
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Main></Main>
            </QueryClientProvider>
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

        const queryClient = new QueryClient()

        return(
            <BrowserRouter>
            
                <QueryClientProvider client={queryClient}>

                    <DarkMode></DarkMode>

                    <MainCard></MainCard>

                </QueryClientProvider>

            </BrowserRouter>
        )
    }
    render(<Mock></Mock>);
    const btn = screen.getByRole('button')
    const cardBg = screen.getByTestId('card')
    fireEvent.click(btn)
    expect(cardBg).toHaveStyle('background-color: var(--card)')

})

