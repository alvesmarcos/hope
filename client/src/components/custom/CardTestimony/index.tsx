import React, { useState } from 'react';

import { Flex, Text, Button, Image, LoadingIndicator } from '~/components';
import { openLink } from '~/utils';

interface CardTestimonyProps {
  imageUri: string;
  title: string;
  description: string;
  url: string;
}

const CardTestimony: React.FC<CardTestimonyProps> = ({
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
          height={150}
        />
      )}
      <Flex p="medium">
        <Text fontFamily="header">{title}</Text>
        <Text fontSize="small" mt="medium">
          {description}
        </Text>
        {loading ? (
          <Flex flex={0.1} mt="medium">
            <LoadingIndicator variant="primary" size="large" />
          </Flex>
        ) : (
          <Button
            variant="primary"
            p="xsmall"
            mt="medium"
            onPress={openContent}>
            Ver história completa
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default React.memo(CardTestimony);
