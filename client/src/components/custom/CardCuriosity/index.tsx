import React from 'react';

import { Flex, Text, Icon } from '~/components';

interface CardCuriosityProps {
  description: string;
}

const CardCuriosity: React.FC<CardCuriosityProps> = ({ description }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="paper"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong"
      p="medium">
      <Flex>
        <Text fontFamily="header">Curiosidade</Text>
        <Text fontSize="small" mt="small">
          {description}
        </Text>
      </Flex>
      <Flex flex={0.3} alignItems="flex-end">
        <Icon name="package" fontSize="xlarge" color="primary" />
      </Flex>
    </Flex>
  );
};

export default React.memo(CardCuriosity);
