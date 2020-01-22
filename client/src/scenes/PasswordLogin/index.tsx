import React, { useState } from 'react';
import validator from 'validator';

import navService from '~/services/NavigationService';
import LayoutPasswordLogin from './Layout';

const PasswordLogin: React.FC = () => {
  // consts
  const hint = 'No mínimo 6 caracteres';
  // states
  const [message, setMessage] = useState<string>(hint);
  const [error, setError] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');

  function onChangeText(text: string) {
    setInputText(text);
    setError(false);
    setMessage(hint);
  }

  async function handleValidate(): Promise<boolean> {
    const isLength = validator.isLength(inputText, { min: 6 });

    if (isLength) {
    } else {
      setMessage('Senha inválida');
      setError(true);
    }
    return true;
  }

  function back() {
    navService.pop();
  }

  async function next() {
    if (await handleValidate()) {
      navService.push('ProfileLogin');
    }
  }

  // render
  return (
    <LayoutPasswordLogin
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      helpText={message}
      error={error}
    />
  );
};

export default PasswordLogin;
