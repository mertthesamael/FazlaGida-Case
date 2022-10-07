import './App.scss';
import Main from './pages/Main/Main';
import { ArtistContextWrapper } from './store/context';
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"


const App = () => {


  const queryClient = new QueryClient()
  
  return (

    <QueryClientProvider client={queryClient}>

      <ArtistContextWrapper>

          <Main/>
      
      </ArtistContextWrapper>

      <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>

  );
}

export default App;
