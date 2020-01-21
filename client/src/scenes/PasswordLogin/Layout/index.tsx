import React from 'react';
import {
  IconButton,
  Flex,
  Button,
  Container,
  StatusBar,
  Text,
  Input,
} from '~/components';

interface LayoutProps {
  helpText: string;
  error: boolean;
  onPressBack(): void;
  onPressNext(): void;
  onChangeText(text): void;
}

const Layout: React.FC<LayoutProps> = ({
  helpText,
  error,
  onPressBack,
  onPressNext,
  onChangeText,
}) => {
  return (
    <Container p="medium">
      <IconButton name="arrow-left" onPress={onPressBack} />
      <StatusBar variant="secondary" />
      <Flex m="medium">
        <Text>
          Estamos quase lá!
        </Text>
        <Text mt="small">
          Escolha sua <Text fontFamily="header">senha</Text> de acesso
        </Text>
        <Input
          onChangeText={onChangeText}
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
          <Button variant="secondary" onPress={onPressNext}>
            Próximo
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default React.memo(Layout);
