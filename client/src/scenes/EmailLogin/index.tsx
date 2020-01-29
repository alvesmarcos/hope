import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import api from '~/services/HopeService';
import { setEmail } from '~/store/modules/account/actions';
import navService from '~/services/NavigationService';
import LayoutEmailLogin from './Layout';

interface NavigationParams {
  isLogin: boolean;
}

type NavigationProps = NavigationScreenProp<NavigationState, NavigationParams>;

interface EmailLoginProps {
  navigation: NavigationProps;
}

const EmailLogin: React.FC<EmailLoginProps> = ({ navigation }) => {
  // consts
  const hint = 'Ex. seunome@mail.com';
  // states
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(hint);
  const [error, setError] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  // redux
  const dispatch = useDispatch();

  function onChangeText(text: string) {
    setInputText(text);
    setError(false);
    setMessage(hint);
  }

  function isEmail(): boolean {
    const isEmail = validator.isEmail(inputText);

    if (isEmail) {
      return true;
    }
    setMessage('E-mail inválido');
    setError(true);
    return false;
  }

  async function handleValidate(): Promise<boolean> {
    setLoading(true);
    try {
      if (isEmail()) {
        const isAvailable = await api.verifyEmail(inputText);
        if (isAvailable) {
          return true;
        }
        setMessage('E-mail indisponível no momento');
        setError(true);
        return false;
      }
      return false;
    } catch (e) {
      setMessage('Não foi possível verificar seu e-mail');
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
    const isLogin = navigation.getParam('isLogin');

    if (isLogin && isEmail()) {
      navService.push('PasswordLogin', { isLogin });
    } else if (!isLogin && (await handleValidate())) {
      navService.push('NameLogin');
    }
    dispatch(setEmail(inputText));
  }

  // render
  return (
    <LayoutEmailLogin
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      text={inputText}
      loading={loading}
      helpText={message}
      error={error}
    />
  );
};

export default EmailLogin;
