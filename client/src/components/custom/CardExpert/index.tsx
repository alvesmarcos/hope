import React from 'react';

import { Flex, Text, Avatar, Button } from '~/components';
import { AccountPlaceholderSrc } from '~/assets';

interface CardExpertProps {
  name: string;
  tip: string;
  onPress?(): void;
}

const CardExpert: React.FC<CardExpertProps> = ({ name, tip }) => {
  return (
    <Flex
      backgroundColor="paper"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong"
      p="medium">
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex flex={0.3} alignItems="flex-start">
          <Avatar source={AccountPlaceholderSrc} size={48} />
        </Flex>
        <Flex>
          <Text fontFamily="header">Palavra de Especialista</Text>
          <Text fontSize="small" color="primary" mt="smaller">
            {name}
          </Text>
          <Text fontSize="small" mt="small">
            {tip}
          </Text>
        </Flex>
      </Flex>
      <Button variant="primary" p="xsmall" mt="medium">
        Conversar com especialista
      </Button>
    </Flex>
  );
};

export default React.memo(CardExpert);
