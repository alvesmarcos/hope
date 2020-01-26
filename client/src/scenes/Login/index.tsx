import React from 'react';

import navService from '~/services/NavigationService';
import LayoutLogin from './Layout';

const Login: React.FC = () => {
  function createAccount() {
    navService.push('EmailLogin', { isLogin: false });
  }

  function signIn() {
    navService.push('EmailLogin', { isLogin: true });
  }

  return (
    <LayoutLogin onPressCreateAccount={createAccount} onPressSignIn={signIn} />
  );
};

export default Login;
