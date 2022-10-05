import './App.css';
import Main from './pages/Main/Main';
import { ThemeContext, ThemeContextWrapper } from './store/context';

function App() {
  return (
    <ThemeContextWrapper>

    <Main/>
    
    </ThemeContextWrapper>
  );
}

export default App;
