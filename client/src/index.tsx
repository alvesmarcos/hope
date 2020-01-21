import React from 'react';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import navService from './services/NavigationService';
import createRouter from './routes';
import theme from './styles';

console.disableYellowBox = true;

const App: React.FC = () => {
  const Routes = createRouter(false);

  return (
    <ThemeProvider theme={theme}>
      <Routes
        ref={navigationRef => navService.setRefNavigator(navigationRef)}
      />
    </ThemeProvider>
  );
};

export default App;
