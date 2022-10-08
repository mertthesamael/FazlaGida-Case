import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';

it('should be in the screen', () => {
  
    const Mock = () => {
        const queryClient = new QueryClient()
        return (
            <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Main>
                    
                </Main>
            </QueryClientProvider>
            </BrowserRouter>
        )
    }
 
    render(<Mock></Mock>);
    const data = screen.getByTestId('loading')
  

    expect(data).toBeInTheDocument();
  
  });
