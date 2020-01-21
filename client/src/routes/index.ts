import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Login, EmailLogin, NameLogin } from '~/scenes';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: createStackNavigator(
          {
            Login,
            EmailLogin,
            NameLogin,
          },
          {
            headerMode: 'none',
          },
        ),
        Intro: createStackNavigator(
          {
            Login,
            EmailLogin,
          },
          {
            headerMode: 'none',
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'Intro' : 'Login',
      },
    ),
  );

export default Routes;
