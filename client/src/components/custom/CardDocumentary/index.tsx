import React, { useState } from 'react';

import { Flex, Text, Image, Touchable, LoadingIndicator } from '~/components';
import { openLink } from '~/utils';

interface CardDocumentaryProps {
  imageUri: string;
  title: string;
  description: string;
  url: string;
}

const CardDocumentary: React.FC<CardDocumentaryProps> = ({
  imageUri,
  title,
  description,
  url,
}) => {
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
      <Flex p="medium">
        <Text fontFamily="header">{title}</Text>
        <Text fontSize="small" mt="medium">
          {description}
        </Text>
        {loading && (
          <Flex flex={0.1} mt="medium">
            <LoadingIndicator variant="primary" size="large" />
          </Flex>
        )}
      </Flex>
    </Touchable>
  );
};

export default React.memo(CardDocumentary);
