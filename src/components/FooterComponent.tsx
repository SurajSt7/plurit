import {StyleSheet, Text, View} from 'react-native';
import React, {SetStateAction} from 'react';
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../navigation/HomeNavigator';
import {eventPrice} from '../config/utils/data';

const FooterComponent: React.FC<{
  pressed: boolean;
  data: string;
}> = ({pressed, data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const params = eventPrice.find(item => item.eventName === data);

  const handlePress = () => {
    navigation.navigate('BookEvent', params!);
  };

  return (
    <View style={styles.stikcyfooter}>
      {pressed && (
        <TextComponent text="Select time slot to proceed" color="#757575" />
      )}
      <View style={styles.width}>
        <ButtonComponent
          title="Proceed"
          onPress={handlePress}
          disabled={pressed}
        />
      </View>
    </View>
  );
};

export default FooterComponent;

const styles = StyleSheet.create({
  stikcyfooter: {
    height: 65,
    borderTopWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#E5E5E5',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    alignItems: 'center',
    paddingRight: 24,
    paddingBlock: 12,
  },
  width: {
    width: '25%',
  },
});
