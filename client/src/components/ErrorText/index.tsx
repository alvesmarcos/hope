import React from 'react';

import { Help } from './styles';

interface IErrorTextProps {
  children: React.ReactNode;
}

const ErrorText: React.FC<IErrorTextProps> = ({ children, ...rest }) => {
  return <Help {...rest}>{children}</Help>;
};

export default React.memo(ErrorText);
