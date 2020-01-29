import React, { useState } from 'react';

import { Touchable, Text, Image, LoadingIndicator, Flex } from '~/components';
import { openLink } from '~/utils';

interface CardArticleProps {
  imageUri: string;
  title: string;
  url: string;
}

const CardArticle: React.FC<CardArticleProps> = ({ imageUri, title, url }) => {
  const [loading, setLoading] = useState<boolean>(false);

  function loadFalse() {
    setLoading(false);
  }

  async function openContent() {
    setLoading(true);
    await openLink(url, loadFalse);
    setLoading(false);
  }

  return (
    <Touchable
      overflow="hidden"
      variant="light"
      borderWidth="thin"
      borderRadius="strong"
      onPress={openContent}>
      {imageUri && (
        <Image
          source={{
            uri: imageUri,
          }}
          height={200}
        />
      )}
      <Text fontFamily="header" p="medium">
        {title}
      </Text>
      {loading && (
        <Flex flex={0.1} mt="medium">
          <LoadingIndicator variant="primary" size="large" />
        </Flex>
      )}
    </Touchable>
  );
};

export default React.memo(CardArticle);
