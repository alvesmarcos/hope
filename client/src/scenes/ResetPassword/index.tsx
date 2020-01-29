import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import {
  setPassword,
  resetLoadingError,
} from '~/store/modules/account/actions';
import navService from '~/services/NavigationService';
import api from '~/services/HopeService';
import LayoutResetPassword from './Layout';
import {
  getAccountLoading,
  getAccountData,
} from '~/store/modules/account/selectors';

interface NavigationParams {
  isConfirmationPassword: boolean;
}

type NavigationProps = NavigationScreenProp<NavigationState, NavigationParams>;

interface ResetPasswordProps {
  navigation: NavigationProps;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ navigation }) => {
  // consts
  const isConfirmationPassword = navigation.getParam('isConfirmationPassword');
  const hint = 'No mínimo 6 caracteres';
  // states
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(hint);
  const [error, setError] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');

  // redux
  const dispatch = useDispatch();
  const account = useSelector(getAccountData);

  useEffect(() => refreshError(), []);

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

  function handleValidateEquals(): boolean {
    if (account.password === inputText) {
      return true;
    }
    setMessage('Vamos com calma, as senhas não conferem');
    setError(true);
    return false;
  }

  async function updatePassword() {
    setLoading(true);
    try {
      if (handleValidateEquals()) {
        await api.resetPassword(
          account.email,
          account.password,
          account.recovery_token,
        );
        Alert.alert('Hope', 'Senha atualizado com sucesso!');
        navService.push('Login', {}, true);
      }
    } catch (error) {
      setMessage('Ops! Ocorreu um erro na atualização, tente novamente');
      setError(true);
      return false;
    } finally {
      setLoading(false);
    }
  }

  function back() {
    navService.pop();
  }

  async function next() {
    if (handleValidate()) {
      if (isConfirmationPassword) {
        await updatePassword();
      } else {
        dispatch(setPassword(inputText));
        navService.push('ResetPassword', { isConfirmationPassword: true });
      }
    }
  }

  // render
  return (
    <LayoutResetPassword
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      isConfirmationPassword={isConfirmationPassword}
      text={inputText}
      helpText={message}
      error={error}
      loading={loading}
    />
  );
};

export default ResetPassword;
