import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import {
  reqLogin,
  setPassword,
  setError as setReducerError,
} from '~/store/modules/account/actions';
import navService from '~/services/NavigationService';
import LayoutPasswordLogin from './Layout';
import {
  getAccountLoading,
  getAccountError,
} from '~/store/modules/account/selectors';

interface NavigationParams {
  isLogin: boolean;
}

type NavigationProps = NavigationScreenProp<NavigationState, NavigationParams>;

interface PasswordLogin {
  navigation: NavigationProps;
}

const PasswordLogin: React.FC<PasswordLogin> = ({ navigation }) => {
  // consts
  const isLogin = navigation.getParam('isLogin');
  const hint = 'No mínimo 6 caracteres';
  // states
  const [message, setMessage] = useState<string>(hint);
  const [error, setError] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  // redux
  const dispatch = useDispatch();
  const errorReducer = useSelector(getAccountError);
  const loading = useSelector(getAccountLoading);

  useEffect(() => refreshError(), []);

  function refreshError() {
    dispatch(setReducerError(false));
  }

  function onChangeText(text: string) {
    setInputText(text);
    setError(false);
    setMessage(hint);
  }

  function handleValidate(): boolean {
    const isLength = validator.isLength(inputText, { min: 6 });

    if (isLength) {
      return true;
    }
    setMessage('Senha inválida');
    setError(true);
    return false;
  }

  function back() {
    navService.pop();
  }

  function next() {
    dispatch(setPassword(inputText));

    if (!isLogin && handleValidate()) {
      navService.push('ProfileLogin');
    } else if (isLogin) {
      dispatch(reqLogin());
    }
  }

  // render
  return (
    <LayoutPasswordLogin
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      isLogin={isLogin}
      text={inputText}
      helpText={message}
      error={isLogin ? errorReducer : error}
      loading={loading}
    />
  );
};

export default PasswordLogin;
