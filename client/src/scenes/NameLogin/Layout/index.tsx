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
  text: string;
  helpText: string;
  error: boolean;
  onPressBack(): void;
  onPressNext(): void;
  onChangeText(text): void;
}

const Layout: React.FC<LayoutProps> = ({
  text,
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
          Qual é o seu <Text fontFamily="header">nome?</Text>
        </Text>
        <Input
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
          <Button variant="secondary" onPress={onPressNext}>
            Próximo
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default React.memo(Layout);
