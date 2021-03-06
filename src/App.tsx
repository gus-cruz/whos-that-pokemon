import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/default';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
