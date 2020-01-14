import React from 'react';
import { StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Feather';
import ActionButton from 'react-native-action-button';
import { scale } from 'react-native-size-matters';

import { colors } from '~/styles';
import { ContainerSlider, Title, Description } from './styles';

// MARK: - Props definitions

interface IData {
  id: string;
  title: string;
  icon: string;
  description: string;
  isLast: boolean;
}

interface ILayoutProps {
  data: IData[];
}

// MARK: - Layout definition

const Intro: React.FC<ILayoutProps> = ({ data }) => {
  return (
    <>
      <StatusBar backgroundColor={colors.purple[800]} />
      <Swiper
        dotColor={colors.gray[400]}
        activeDotColor={colors.white}
        loop={false}>
        {data.map(item => (
          <ContainerSlider key={item.id}>
            <Icon name={item.icon} color={colors.white} size={scale(96)} />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <ActionButton
              buttonColor={colors.white}
              renderIcon={() => (
                <Icon
                  color={colors.purple[700]}
                  name={item.isLast ? 'check' : 'arrow-right'}
                  size={24}
                />
              )}
            />
          </ContainerSlider>
        ))}
      </Swiper>
    </>
  );
};

export default Intro;
