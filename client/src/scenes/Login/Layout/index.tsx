import React from 'react';

import { Button, Icon, StatusBar, Flex, Container } from '~/components';

const Login: React.FC = () => {
  return (
    <Container p="medium">
      <StatusBar variant="secondary" />
      <Flex justifyContent="center" alignItems="center">
        <Icon name="shield" fontSize="larger" color="primary" />
      </Flex>
      <Flex justifyContent="flex-end">
        <Button variant="primary">Entrar</Button>
        <Button variant="secondary">Criar Conta</Button>
      </Flex>
    </Container>
  );
};

export default React.memo(Login);
