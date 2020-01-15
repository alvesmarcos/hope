import React from 'react';
import { StatusBar } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import { Button } from '~/components';
import { colors } from '~/styles';
import { Container, Header, Footer } from './styles';
import { Variants } from '~/styles/variants';

const Login: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Header>
        <Icon name="shield" size={scale(124)} color={colors.primary} />
      </Header>
      <Footer>
        <Button text="Entrar" variant={Variants.PRIMARY} />
        <Button text="Criar Conta" variant={Variants.SECONDARY} />
      </Footer>
    </Container>
  );
};

export default React.memo(Login);
