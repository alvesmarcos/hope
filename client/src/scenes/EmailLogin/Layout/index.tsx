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
  text: string;
  helpText: string;
  error: boolean;
  loading: boolean;
  onPressBack(): void;
  onPressNext(): void;
  onChangeText(text): void;
}

const Layout: React.FC<LayoutProps> = ({
  text,
  helpText,
  error,
  loading,
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
          Qual é o seu <Text fontFamily="header">e-mail</Text>?
        </Text>
        <Input
          keyboardType="email-address"
          onChangeText={onChangeText}
          value={text}
          autoFocus
          mt="medium"
          p="none"
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
              Próximo
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default React.memo(Layout);
