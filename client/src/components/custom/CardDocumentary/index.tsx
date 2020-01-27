import React from 'react';

import { Flex, Text, Image } from '~/components';

interface CardDocumentaryProps {
  imageUri: string;
  title: string;
  description: string;
}

const CardDocumentary: React.FC<CardDocumentaryProps> = ({
  imageUri,
  title,
  description,
}) => {
  return (
    <Flex
      overflow="hidden"
      backgroundColor="paper"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong">
      {imageUri && (
        <Image
          source={{
            uri: imageUri,
          }}
          height={200}
        />
      )}
      <Flex p="medium">
        <Text fontFamily="header">{title}</Text>
        <Text fontSize="small" mt="medium">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default React.memo(CardDocumentary);
