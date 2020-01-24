import React from 'react';

import { Flex, Text, Icon, Button } from '~/components';

interface CardTipProps {
  title: string;
  description: string;
  onPress?(): void;
}

const CardTip: React.FC<CardTipProps> = ({ title, description, onPress }) => {
  return (
    <Flex
      backgroundColor="paper"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong"
      p="medium">
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex flex={0.3} alignItems="flex-start">
          <Icon name="star" fontSize="xlarge" color="primary" />
        </Flex>
        <Flex>
          <Text fontFamily="header">{title}</Text>
          <Text fontSize="small" mt="small">
            {description}
          </Text>
        </Flex>
      </Flex>
      <Button variant="primary" p="xsmall" mt="medium" onPress={onPress}>
        Ver mais dicas
      </Button>
    </Flex>
  );
};

export default React.memo(CardTip);
