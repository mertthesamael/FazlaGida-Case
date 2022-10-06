import './App.css';
import Main from './pages/Main/Main';
import { ThemeContext, ThemeContextWrapper } from './store/context';
import { QueryClientProvider, QueryClient } from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

      <ThemeContextWrapper>

          <Main/>
      
      </ThemeContextWrapper>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
