import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';

const Imageheader = ({imgUri}: {imgUri: ImageSourcePropType}) => {
  return (
    <>
      <View style={styles.row}>
        <Image source={imgUri} style={styles.imgStyles} />
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.optionsStyles}>
          <TextComponent text="About" color="#7E2CCF" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={StyleSheet.compose(styles.optionsStyles, styles.bgWhite)}>
          <TextComponent text="Crew" color="#757575" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Imageheader;

const styles = StyleSheet.create({
  optionsStyles: {
    backgroundColor: '#F9F5FD',
    padding: 12,
    bottom: 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  optionContainer: {
    bottom: -12,
    left: 20,
    flexDirection: 'row',
  },
  imgStyles: {
    height: 250,
    resizeMode: 'cover',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    height: 200,
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
});
