import React from 'react';

import { Touchable, Text, Icon } from '~/components';
import { TouchableElementWithoutChildrenProps } from '~/components/root/types';

interface CardProfileProps extends TouchableElementWithoutChildrenProps {
  title: string;
  icon: string;
  description: string;
  actived: boolean;
}

const CardProfile: React.FC<CardProfileProps> = ({
  title,
  icon,
  description,
  actived,
  ...rest
}) => {
  const variantTouchable = actived ? 'primary' : 'light';
  const colorTitle = actived ? 'accent' : 'primary';
  const colorDescription = actived ? 'accent' : 'neutralDark';

  return (
    <Touchable
      variant={variantTouchable}
      p="medium"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderWidth="thin"
      borderRadius="medium"
      {...rest}>
      <Icon name={icon} fontSize="xlarge" color={colorTitle} />
      <Text color={colorTitle} fontFamily="header" fontSize="small" mt="small">
        {title}
      </Text>
      <Text
        color={colorDescription}
        textAlign="center"
        mt="small"
        fontSize="small">
        {description}
      </Text>
    </Touchable>
  );
};

export default React.memo(CardProfile);
