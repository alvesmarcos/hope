import React from 'react';

import { Flex, Text, Icon, Separator } from '~/components';

interface CardStatusProps {
  days: number;
  hours: number;
  cash: number;
}

const CardStatus: React.FC<CardStatusProps> = ({ days, hours, cash }) => {
  return (
    <Flex backgroundColor="primaryLight" borderRadius="strong">
      <Flex
        backgroundColor="primary"
        borderRadius="strong"
        p="medium"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Flex>
          <Text fontSize="xsmall" color="accent">
            Sóbrio há
          </Text>
          <Text fontSize="large" fontFamily="header" color="accent">
            {`${days} dias`}
          </Text>
        </Flex>
        <Flex alignItems="flex-end">
          <Icon
            name="thumbs-up"
            fontSize="xlarge"
            color="accent"
            variant="fontawesome"
          />
        </Flex>
      </Flex>
      <Flex p="medium">
        <Flex
          borderRadius="strong"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Flex alignItems="center" justifyContent="center">
            <Text fontFamily="header" color="primary">
              {`${hours} horas`}
            </Text>
            <Text fontSize="xsmall" color="primary" mt="thin">
              A mais de vida
            </Text>
          </Flex>
          <Separator backgroundColor="primary" />
          <Flex alignItems="center" justifyContent="center">
            <Text fontFamily="header" color="primary">
              {`R$ ${cash}`}
            </Text>
            <Text fontSize="xsmall" color="primary" mt="thin">
              Economizados
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default React.memo(CardStatus);
