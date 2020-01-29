import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import {
  reqLogin,
  setPassword,
  resetLoadingError,
} from '~/store/modules/account/actions';
import navService from '~/services/NavigationService';
import api from '~/services/HopeService';
import LayoutPasswordLogin from './Layout';
import {
  getAccountLoading,
  getAccountError,
  getAccountData,
} from '~/store/modules/account/selectors';

interface NavigationParams {
  isLogin: boolean;
}

type NavigationProps = NavigationScreenProp<NavigationState, NavigationParams>;

interface PasswordLoginProps {
  navigation: NavigationProps;
}

const PasswordLogin: React.FC<PasswordLoginProps> = ({ navigation }) => {
  // consts
  const isLogin = navigation.getParam('isLogin');
  const hint = 'No mínimo 6 caracteres';
  // states
  const [message, setMessage] = useState<string>(hint);
  const [error, setError] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [spinner, setSpinner] = useState<boolean>(false);

  // redux
  const dispatch = useDispatch();
  const account = useSelector(getAccountData);
  const errorReducer = useSelector(getAccountError);
  const loading = useSelector(getAccountLoading);

  useEffect(() => refreshError(), []);

  const sendTokenForRecoveryPassword = useCallback(async () => {
    try {
      setSpinner(true);
      await api.forgotPasswordSendToken(account.email);
      navService.push('RecoveryPassword');
    } catch (error) {
      Alert.alert(
        'Hope',
        'Ops! Não conseguimos enviar o token de recuperação para o seu e-mail.',
      );
    } finally {
      setSpinner(false);
    }
  }, [account.email]);

  function refreshError() {
    dispatch(resetLoadingError());
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

  async function recoveryPassword() {
    try {
      Alert.alert(
        'Hope',
        `Deseja receber o token de recuperação no e-mail ${account.email}?`,
        [
          {
            text: 'Cancelar',
            onPress: () => false,
            style: 'cancel',
          },
          { text: 'OK', onPress: sendTokenForRecoveryPassword },
        ],
        { cancelable: false },
      );
    } catch (e) {}
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
      onPressRecoveryPassword={recoveryPassword}
      spinner={spinner}
      isLogin={isLogin}
      text={inputText}
      helpText={message}
      error={isLogin ? errorReducer : error}
      loading={loading}
    />
  );
};

export default PasswordLogin;
