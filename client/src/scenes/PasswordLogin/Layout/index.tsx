import React from 'react';

import {
  IconButton,
  Flex,
  Button,
  Container,
  StatusBar,
  Text,
  Input,
  LoadingIndicator,
  Spinner,
} from '~/components';
import colors from '~/styles/colors';

interface LayoutProps {
  isLogin: boolean;
  loading: boolean;
  spinner: boolean;
  text: string;
  helpText: string;
  error: boolean;
  onPressBack(): void;
  onPressNext(): void;
  onChangeText(text): void;
  onPressRecoveryPassword(): void;
}

const Layout: React.FC<LayoutProps> = ({
  isLogin,
  loading,
  spinner,
  text,
  helpText,
  error,
  onPressBack,
  onPressNext,
  onChangeText,
  onPressRecoveryPassword,
}) => {
  return (
    <Container p="medium">
      <Spinner visible={spinner} text="Enviando..." variant="secondary" />
      <Flex
        flex={0.1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <IconButton name="arrow-left" onPress={onPressBack} />
        {isLogin && (
          <IconButton name="refresh-ccw" onPress={onPressRecoveryPassword} />
        )}
      </Flex>
      <StatusBar variant="secondary" />
      <Flex m="medium">
        {isLogin ? (
          <Text
            color={error ? 'danger' : 'neutralDark'}
            fontSize="small"
            mt="medium">
            {error
              ? 'Ops! Não conseguimos autenticar sua conta, tente novamente.'
              : 'Estamos feliz por ter você de volta'}
          </Text>
        ) : (
          <Text color="neutralDark" fontSize="small" mt="medium">
            Estamos quase lá!
          </Text>
        )}
        <Text mt="small">
          {isLogin ? 'Insira' : 'Escolha'} sua{' '}
          <Text fontFamily="header">senha</Text> de acesso
        </Text>
        <Input
          onChangeText={onChangeText}
          value={text}
          autoFocus
          mt="medium"
          p="none"
          secureTextEntry
        />
        {isLogin && (
          <>
            <Text color="neutralDark" fontSize="small" mt="small">
              Esqueceu a senha?
            </Text>
            <Text color="neutralDark" fontSize="small" mt="small">
              Toque no ícone de atualização
            </Text>
          </>
        )}
        {isLogin ? null : (
          <Text
            color={error ? 'danger' : 'neutralDark'}
            fontSize="small"
            mt="medium">
            {helpText}
          </Text>
        )}
      </Flex>
      <Flex>
        <Flex justifyContent="flex-end">
          {loading ? (
            <LoadingIndicator variant="primary" size="large" />
          ) : (
            <Button variant="secondary" onPress={onPressNext}>
              {isLogin ? 'Entrar' : 'Próximo'}
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default React.memo(Layout);
