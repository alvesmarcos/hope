import React from 'react';
import { StatusBar } from 'react-native';

import { Button, BackButton, ErrorText, Input } from '~/components';
import { colors } from '~/styles';
import { Variants } from '~/styles/variants';
import { Container, Title, Bold, Header, Footer, Margin } from './styles';

const EmailLogin: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Header>
        <BackButton />
        <Margin>
          <Title>
            Qual é o seu <Bold>e-mail</Bold>?
          </Title>
          <Input keyboardType="email-address" />
          <ErrorText>E-mail Inválido</ErrorText>
        </Margin>
      </Header>
      <Footer>
        <Button text="Próximo" variant={Variants.SECONDARY} />
      </Footer>
    </Container>
  );
};

export default React.memo(EmailLogin);
