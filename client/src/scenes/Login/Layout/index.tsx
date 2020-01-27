import React from 'react';

import { Button, Icon, StatusBar, Flex, Container } from '~/components';
import { openLink } from '~/utils';

interface LayoutProps {
  onPressCreateAccount(): void;
  onPressSignIn(): void;
}

const Layout: React.FC<LayoutProps> = ({
  onPressCreateAccount,
  onPressSignIn,
}) => {
  return (
    <Container p="medium">
      <StatusBar variant="secondary" />
      <Flex justifyContent="center" alignItems="center">
        <Icon name="shield" fontSize="larger" color="primary" />
      </Flex>
      <Flex justifyContent="flex-end">
        <Button variant="primary" onPress={onPressSignIn}>
          Entrar
        </Button>
        <Button variant="secondary" onPress={onPressCreateAccount}>
          Criar Conta
        </Button>
      </Flex>
    </Container>
  );
};

export default React.memo(Layout);
