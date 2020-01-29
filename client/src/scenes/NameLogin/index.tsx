import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import { setName } from '~/store/modules/account/actions';
import navService from '~/services/NavigationService';
import LayoutNameLogin from './Layout';

const NameLogin: React.FC = () => {
  // consts
  const hint = 'Ex. Jane Doe';
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
    const isLength = validator.isLength(inputText, { min: 3 });

    if (isLength) {
      return true;
    }
    setMessage('Nome inválido');
    setError(true);
    return false;
  }

  function back() {
    navService.pop();
  }

  function next() {
    if (handleValidate()) {
      dispatch(setName(inputText));
      navService.push('PasswordLogin');
    }
  }

  // render
  return (
    <LayoutNameLogin
      onChangeText={onChangeText}
      onPressBack={back}
      onPressNext={next}
      text={inputText}
      helpText={message}
      error={error}
    />
  );
};

export default NameLogin;
