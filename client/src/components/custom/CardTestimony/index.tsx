import React from 'react';

import { Flex, Text, Button, Image } from '~/components';

interface CardTestimonyProps {
  imageUri: string;
  title: string;
  description: string;
  onPress?(): void;
}

const CardTestimony: React.FC<CardTestimonyProps> = ({
  imageUri,
  title,
  description,
  onPress,
}) => {
  return (
    <Flex
      overflow="hidden"
      backgroundColor="paper"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong">
      <Image
        source={{
          uri: imageUri,
        }}
        height={150}
      />
      <Flex p="medium">
        <Text fontFamily="header">{title}</Text>
        <Text fontSize="small" mt="medium">
          {description}
        </Text>
        <Button variant="primary" p="xsmall" mt="medium" onPress={onPress}>
          Ver história completa
        </Button>
      </Flex>
    </Flex>
  );
};

export default React.memo(CardTestimony);
