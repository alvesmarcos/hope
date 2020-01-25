import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import store from './store';
import navService from './services/NavigationService';
import createRouter from './routes';
import theme from './styles';

console.disableYellowBox = true;

const App: React.FC = () => {
  const Routes = createRouter(false);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes
          ref={navigationRef => navService.setRefNavigator(navigationRef)}
        />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
