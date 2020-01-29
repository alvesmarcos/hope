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
} from '~/components';

interface LayoutProps {
  isConfirmationPassword: boolean;
  loading: boolean;
  text: string;
  helpText: string;
  error: boolean;
  onPressBack(): void;
  onPressNext(): void;
  onChangeText(text): void;
}

const Layout: React.FC<LayoutProps> = ({
  isConfirmationPassword,
  loading,
  text,
  helpText,
  error,
  onPressBack,
  onPressNext,
  onChangeText,
}) => {
  return (
    <Container p="medium">
      <Flex
        flex={0.1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <IconButton name="arrow-left" onPress={onPressBack} />
      </Flex>
      <StatusBar variant="secondary" />
      <Flex m="medium">
        <Text color={'neutralDark'} fontSize="small" mt="medium">
          Estamos quase lá!
        </Text>
        <Text mt="small">
          {isConfirmationPassword ? 'Confirme' : 'Escolha'} sua{' '}
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
        <Text
          color={error ? 'danger' : 'neutralDark'}
          fontSize="small"
          mt="medium">
          {helpText}
        </Text>
      </Flex>
      <Flex>
        <Flex justifyContent="flex-end">
          {loading ? (
            <LoadingIndicator variant="primary" size="large" />
          ) : (
            <Button variant="secondary" onPress={onPressNext}>
              {isConfirmationPassword ? 'Resetar' : 'Próximo'}
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default React.memo(Layout);
