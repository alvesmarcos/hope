import { ReactNode } from 'react';
import {
  TextProps,
  TouchableOpacityProps,
  ViewProps,
  TextInputProps,
} from 'react-native';
import {
  FontSizeProps,
  ColorProps,
  FontFamilyProps,
  TextAlignProps,
  SpaceProps,
  ButtonStyleProps,
  FlexboxProps,
  LayoutProps,
  BorderProps,
} from 'styled-system';

export interface ChildrenProps {
  children: ReactNode;
}

export interface ContainerStyleProps
  extends LayoutProps,
    ColorProps,
    SpaceProps {}

export interface ContainerElementProps
  extends ViewProps,
    ContainerStyleProps,
    ColorProps,
    ChildrenProps {}

export interface IconStyleProps extends FontSizeProps, ColorProps {}

export interface IconElementProps extends IconStyleProps {
  name: string;
}

export interface IconButtonElementProps
  extends IconElementProps,
    TouchableOpacityProps {}

export interface InputStyleProps
  extends FontSizeProps,
    ColorProps,
    SpaceProps,
    FontFamilyProps {}

export interface InputElementProps extends TextInputProps, InputStyleProps {}

export interface FlexStyleProps extends FlexboxProps, ColorProps, SpaceProps {}

export interface FlexElementProps
  extends ViewProps,
    FlexStyleProps,
    FlexStyleProps,
    ColorProps,
    ChildrenProps {}

export interface StatusBarElementProps {
  variant: 'primary' | 'secondary';
}

export interface TextStyleProps
  extends FontFamilyProps,
    FontSizeProps,
    ColorProps,
    TextAlignProps,
    SpaceProps {}

export interface TextElementProps
  extends TextProps,
    TextStyleProps,
    ChildrenProps {}

export interface TouchableStyleProps extends ButtonStyleProps, BorderProps, SpaceProps {}

export interface TouchableElementProps
  extends TouchableStyleProps,
    TouchableOpacityProps,
    ChildrenProps {}
