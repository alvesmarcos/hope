import React, { useState } from 'react';
import validator from 'validator';

import navService from '~/services/NavigationService';
import LayoutNameLogin from './Layout';

const NameLogin: React.FC = () => {
  // consts
  const hint = 'Ex. Jane Doe';
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
    const isLength = validator.isLength(inputText, { min: 3 });

    if (isLength) {
    } else {
      setMessage('Nome inválido');
      setError(true);
    }
    return true;
  }

  function back() {
    navService.pop();
  }

  async function next() {
    if (await handleValidate()) {
    }
  }

  // render
  return (
    <LayoutNameLogin
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      helpText={message}
      error={error}
    />
  );
};

export default NameLogin;
