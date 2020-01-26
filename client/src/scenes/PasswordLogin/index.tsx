import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import { setPassword } from '~/store/modules/account/actions';
import navService from '~/services/NavigationService';
import LayoutPasswordLogin from './Layout';

const PasswordLogin: React.FC = () => {
  // consts
  const hint = 'No mínimo 6 caracteres';
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
    setMessage('Senha inválida');
    setError(true);
    return false;
  }

  function back() {
    navService.pop();
  }

  function next() {
    if (handleValidate()) {
      dispatch(setPassword(inputText));
      navService.push('ProfileLogin');
    }
  }

  // render
  return (
    <LayoutPasswordLogin
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      text={inputText}
      helpText={message}
      error={error}
    />
  );
};

export default PasswordLogin;
