import React from 'react';
import { ThemeProvider } from 'styled-components';

import { EmailLogin } from './scenes';
import theme from './styles';

console.disableYellowBox = true;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <EmailLogin />
    </ThemeProvider>
  );
};

export default App;
