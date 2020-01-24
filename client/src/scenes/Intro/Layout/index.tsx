import React from 'react';
import ActionButton from 'react-native-action-button';
import Swiper from 'react-native-swiper';

import { StatusBar, Container, Icon, Text, Flex } from '~/components';
import colors from '~/styles/colors';

interface Data {
  id: number;
  title: string;
  icon: string;
  description: string;
  isLast: boolean;
}

interface LayoutProps {
  data: Data[];
  onPress(currentItem: number): void;
}

const Layout: React.FC<LayoutProps> = ({ data, onPress }) => {
  return (
    <Container>
      <StatusBar variant="primary" />
      <Swiper
        dotColor={colors.neutralDark}
        activeDotColor={colors.accent}
        loop={false}>
        {data.map(item => (
          <Flex
            justifyContent="center"
            alignItems="center"
            backgroundColor="primary"
            p="small"
            key={item.id}>
            <Icon name={item.icon} fontSize="xxlarge" color="accent" />
            <Text fontSize="large" color="accent" mt="large">
              {item.title}
            </Text>
            <Text fontSize="small" color="accent" textAlign="center" mt="small">
              {item.description}
            </Text>
            <ActionButton
              buttonColor={colors.accent}
              onPress={() => onPress(item.id)}
              renderIcon={() => (
                <Icon
                  name={item.isLast ? 'check' : 'arrow-right'}
                  fontSize="medium"
                  color="primary"
                />
              )}
            />
          </Flex>
        ))}
      </Swiper>
    </Container>
  );
};

export default React.memo(Layout);
