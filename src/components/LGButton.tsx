import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from './TextComponent';

const LGButton: React.FC<{
  colors: string[];
  text: string;
  lgButton?: boolean;
}> = ({colors, text, lgButton}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.radius}
      colors={colors}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={
          lgButton
            ? StyleSheet.compose(styles.lguButonStyles, {
                height: 70,
              })
            : styles.lguButonStyles
        }>
        <TextComponent text={text} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LGButton;

const styles = StyleSheet.create({
  radius: {
    borderRadius: 4,
  },
  lguButonStyles: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
