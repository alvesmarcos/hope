import React from 'react';
import { Flex, Icon, Text } from '~/components';

interface CardQuoteProps {
  description: string;
}

const CardQuote: React.FC<CardQuoteProps> = ({ description }) => {
  return (
    <Flex
      backgroundColor="primary"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong"
      justifyContent="center"
      alignItems="center"
      p="medium">
      <Icon
        name="quote-left"
        fontSize="xlarge"
        color="accent"
        variant="fontawesome"
      />
      <Text mt="medium" color="accent" textAlign="center">
        {description}
      </Text>
    </Flex>
  );
};

export default React.memo(CardQuote);
