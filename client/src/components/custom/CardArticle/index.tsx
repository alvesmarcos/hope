import React from 'react';

import { Flex, Text, Image } from '~/components';

interface CardArticleProps {
  imageUri: string;
  title: string;
}

const CardArticle: React.FC<CardArticleProps> = ({ imageUri, title }) => {
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
        height={200}
      />
      <Text fontFamily="header" p="medium">
        {title}
      </Text>
    </Flex>
  );
};

export default React.memo(CardArticle);
