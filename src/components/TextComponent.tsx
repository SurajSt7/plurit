import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import fonts from '../assets/fonts';

type TextComponentProps = {
  text: string;
  size?: number;
  styles?: StyleProp<TextStyle>;
  fontWeight?: '400' | '500' | '600' | '700' | 'bold' | 'normal';
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  lineHeight?: number;
  fontFmaily?: string;
  numOfLines?: number;
  underLine?: boolean;
};

const TextComponent = (props: TextComponentProps) => {
  const {
    text,
    size,
    styles,
    fontWeight,
    color,
    fontFmaily,
    textAlign,
    lineHeight,
    numOfLines,
    underLine,
  } = props;
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numOfLines}
      style={[
        {
          fontSize: size || 14,
          fontWeight: fontWeight || 400,
          color: color ? color : '#000000',
          fontFamily: fontFmaily || fonts.poppins.Poppins_Regular,
          textAlign: textAlign ?? 'auto',
          lineHeight: lineHeight,
          textDecorationLine: underLine ? 'underline' : 'none',
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};
export default TextComponent;
