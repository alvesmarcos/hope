import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  Login,
  EmailLogin,
  NameLogin,
  PasswordLogin,
  ProfileLogin,
  Intro,
  Community,
  Home,
  Message,
} from '~/scenes';
import { Icon } from '~/components';
import colors from '~/styles/colors';

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
        Home: createBottomTabNavigator(
          {
            Home,
            Message,
            Community,
          },
          {
            defaultNavigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;

                switch (routeName) {
                  case 'Home':
                    iconName = 'home';
                    break;
                  case 'Message':
                    iconName = 'message-circle';
                    break;
                  case 'Community':
                    iconName = 'users';
                    break;
                }
                return (
                  <Icon name={iconName} fontSize="large" color={focused ? 'primary': 'neutralDark'} />
                );
              },
            }),
            tabBarOptions: {
              showLabel: false,
              style: {
                backgroundColor: colors.light,
                borderTopWidth: 1,
                borderTopColor: colors.neutralLight,
              },
              showIcon: true, 
            },
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'Login' : 'Home',
      },
    ),
  );

export default Routes;
