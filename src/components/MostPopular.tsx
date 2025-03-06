import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import fonts from '../assets/fonts';
import {DATA2, EventItem} from '../config/utils/data';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../navigation/HomeNavigator';

const MostPopular = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const handlePress = (item: EventItem) => {
    navigation.navigate('EventDetailsScreen', item.data);
  };

  return (
    <View>
      <TextComponent
        text="Most Popular"
        size={17}
        fontFmaily={fonts.poppins.Poppins_Medium}
      />
      <ScrollView
        style={styles.row}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {DATA2.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handlePress(item)}
              style={styles.imgContainer}
              key={index}>
              <Image source={item.uri} alt="image" style={styles.imgStyles} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MostPopular;

const styles = StyleSheet.create({
  imgStyles: {
    resizeMode: 'cover',
    height: 200,
    overflow: 'hidden',
    width: 300,
    gap: 12,
    borderRadius: 12,
  },
  imgContainer: {
    borderRadius: 12,
    height: 200,
    width: 300,
    overflow: 'hidden',
    marginRight: 12,
  },
  row: {flexDirection: 'row', marginVertical: 8},
});
