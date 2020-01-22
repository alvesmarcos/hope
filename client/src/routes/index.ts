import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Login,
  EmailLogin,
  NameLogin,
  PasswordLogin,
  ProfileLogin,
  Intro,
} from '~/scenes';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login: createStackNavigator(
          {
            Login,
            EmailLogin,
            NameLogin,
            PasswordLogin,
            ProfileLogin,
            Intro,
          },
          {
            headerMode: 'none',
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'Login' : 'Login',
      },
    ),
  );

export default Routes;
