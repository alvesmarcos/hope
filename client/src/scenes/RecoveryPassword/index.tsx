import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import { setRecoveryToken } from '~/store/modules/account/actions';
import navService from '~/services/NavigationService';
import LayoutRecoveryPassword from './Layout';

const RecoveryPassword: React.FC = () => {
  // consts
  const hint = 'Enviamos um token para o seu e-mail';
  // states
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

  function handleValidate(): boolean {
    const isLength = validator.isLength(inputText, { min: 6 });

    if (isLength) {
      return true;
    }
    setMessage('Token inválido');
    setError(true);
    return false;
  }

  function back() {
    navService.pop();
  }

  function next() {
    if (handleValidate()) {
      dispatch(setRecoveryToken(inputText));
      navService.push('ResetPassword');
    }
  }

  // render
  return (
    <LayoutRecoveryPassword
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      text={inputText}
      helpText={message}
      error={error}
    />
  );
};

export default RecoveryPassword;
