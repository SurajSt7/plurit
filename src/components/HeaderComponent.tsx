import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import Happening from '../assets/svg/HappeningSVG';
import NotificationIcon from '../assets/svg/NotificationIcon';

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <TextComponent text="------" color="#fff" />
      <Happening size={100} />
      <TouchableOpacity activeOpacity={0.7}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
