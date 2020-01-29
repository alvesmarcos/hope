import React from 'react';

import { Flex, Text, Button } from '~/components';

interface CardFaqProps {
  question: string;
  answer: string;
  onPress?(): void;
}

const CardFaq: React.FC<CardFaqProps> = ({ question, answer }) => {
  return (
    <Flex
      backgroundColor="paper"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong"
      p="medium">
      <Text fontFamily="header">Dúvidas Frequentes</Text>
      <Text fontSize="small" mt="medium" fontFamily="header" color="primary">
        {question}
      </Text>
      <Text fontSize="small" mt="medium">
        {answer}
      </Text>
      <Button variant="secondary" p="xsmall" mt="medium">
        Ver mais
      </Button>
    </Flex>
  );
};

export default React.memo(CardFaq);
