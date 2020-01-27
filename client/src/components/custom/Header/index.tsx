import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Flex, Text, Avatar } from '~/components';
import { capitalize } from '~/utils';
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
          {capitalize(
            format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR }),
          )}
        </Text>
      </Flex>
      <Flex flex={0.3} flexDirection="row" justifyContent="flex-end">
        <Avatar source={AccountPlaceholderSrc} size={32} />
      </Flex>
    </Flex>
  );
};

export default React.memo(Header);
