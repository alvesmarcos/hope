import React from 'react';
import {
  IconButton,
  Flex,
  Button,
  Container,
  StatusBar,
  Text,
  CardProfile,
} from '~/components';

interface Data {
  id: number;
  title: string;
  description: string;
  icon: string;
  actived: boolean;
}

interface LayoutProps {
  data: Data[];
  onPressCard(id: number): void;
  onPressBack(): void;
  onPressNext(): void;
}

const Layout: React.FC<LayoutProps> = ({
  data,
  onPressCard,
  onPressBack,
  onPressNext,
}) => {
  function renderCard(item: Data): React.ReactNode {
    return (
      <CardProfile
        flex={0.5}
        title={item.title}
        icon={item.icon}
        description={item.description}
        actived={item.actived}
        onPress={() => onPressCard(item.id)}
      />
    );
  }

  return (
    <Container p="medium">
      <IconButton name="arrow-left" onPress={onPressBack} />
      <StatusBar variant="secondary" />
      <Flex m="medium">
        <Text color="neutralDark" fontSize="small" mt="medium">
          Só mais uma coisinha ...
        </Text>
        <Text mt="small">
          Com qual desses <Text fontFamily="header">perfis</Text> você mais se
          identifica?
        </Text>
        <Flex flexDirection="row" mt="large">
          {renderCard(data[0])}
          {renderCard(data[1])}
        </Flex>
        <Flex flexDirection="row" mt="thin">
          {renderCard(data[2])}
          {renderCard(data[3])}
        </Flex>
      </Flex>
      <Flex flex={0.1}>
        <Flex justifyContent="flex-end">
          <Button variant="secondary" onPress={onPressNext}>
            Finalizar
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default React.memo(Layout);
