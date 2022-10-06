import './App.css';
import Main from './pages/Main/Main';
import { ThemeContext, ThemeContextWrapper } from './store/context';
import { QueryClientProvider, QueryClient } from "react-query"
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>

      <ThemeContextWrapper>

          <Main/>
      
      </ThemeContextWrapper>

    </QueryClientProvider>
  );
}

export default App;
