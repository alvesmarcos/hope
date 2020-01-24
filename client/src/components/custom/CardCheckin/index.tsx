import React from 'react';

import { Flex, Text, Icon, Button } from '~/components';

interface CardCheckinProps {
  onPress?(): void;
}

const CardCheckin: React.FC<CardCheckinProps> = ({ onPress }) => {
  return (
    <Flex
      backgroundColor="paper"
      borderColor="neutralLight"
      borderWidth="thin"
      borderRadius="strong"
      p="medium">
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex flex={0.3} alignItems="flex-start">
          <Icon name="airplay" fontSize="xlarge" color="primary" />
        </Flex>
        <Flex>
          <Text fontFamily="header">Check-in diário</Text>
          <Text fontSize="small" mt="small">
            Realize seu check-in diário para ajudamos a melhorar o seu
            tratamento :)
          </Text>
        </Flex>
      </Flex>
      <Button variant="primary" p="xsmall" mt="medium" onPress={onPress}>
        Fazer Check-in
      </Button>
    </Flex>
  );
};

export default React.memo(CardCheckin);
