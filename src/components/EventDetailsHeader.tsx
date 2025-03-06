import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ChevronLeft from '../assets/svg/ChevronLeft';
import ShareSvg from '../assets/svg/ShareSvg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../navigation/HomeNavigator';

const EventDetailsHeader: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.svgContainerStyles}>
      <View style={styles.rowView}>
        <TouchableOpacity onPress={handleBackPress} activeOpacity={0.6}>
          <ChevronLeft />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <ShareSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventDetailsHeader;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  svgContainerStyles: {
    top: 40,
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});
