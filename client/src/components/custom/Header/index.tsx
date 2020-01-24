import React from 'react';

import { Flex, Text, Avatar } from '~/components';
import { AccountPlaceholderSrc } from '~/assets';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Flex>
        <Text fontFamily="header" color="primary">
          {`Olá, ${name}`}
        </Text>
        <Text color="neutralDark" fontSize="xsmall" mt="smaller">
          Segura-feira, 04 de Junho
        </Text>
      </Flex>
      <Flex flex={0.3} flexDirection="row" justifyContent="flex-end">
        <Avatar source={AccountPlaceholderSrc} size={32} />
      </Flex>
    </Flex>
  );
};

export default React.memo(Header);
