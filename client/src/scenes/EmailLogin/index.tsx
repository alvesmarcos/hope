import React, { useState } from 'react';
import validator from 'validator';

import navService from '~/services/NavigationService';
import LayoutEmailLogin from './Layout';

const EmailLogin: React.FC = () => {
  // consts
  const hint = 'Digite um e-mail válido';
  // states
  const [message, setMessage] = useState<string>(hint);
  const [error, setError] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');

  function onChangeText(text: string): void {
    setInputText(text);
    setError(false);
    setMessage(hint);
  }

  async function handleValidate(): Promise<boolean> {
    const isEmail = validator.isEmail(inputText);

    if (isEmail) {
    } else {
      setMessage('E-mail inválido');
      setError(true);
    }
    return true;
  }

  function back() {
    navService.push('Login');
  }

  async function next() {
    if (await handleValidate()) {
    }
  }

  // render
  return (
    <LayoutEmailLogin
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      helpText={message}
      error={error}
    />
  );
};

export default EmailLogin;
