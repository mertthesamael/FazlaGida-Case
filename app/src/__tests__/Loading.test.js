import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
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

  it('should be in the screen after the loading phase', async () => {
  
    const Mock = () => {

        const queryClient = new QueryClient()

        return (

            <BrowserRouter>

                <QueryClientProvider client={queryClient}>

                    <Main />
                        
                </QueryClientProvider>
                
            </BrowserRouter>
        )
    }

    render(<Mock></Mock>);
    const data =  await screen.findByText(/Kanye West/i)
  

    expect(data).toBeInTheDocument();
  
  });