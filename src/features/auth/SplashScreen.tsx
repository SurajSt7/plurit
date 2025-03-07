import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Happening from '../../assets/svg/HappeningSVG';
import {GlobalStyles} from '../bottomTabs/globalStyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../navigation/AuthNavigator';

type SplashScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'SplashScreen'
>;

const SplashScreen: React.FC<SplashScreenProps> = props => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
  }, []);
  return (
    <View style={GlobalStyles.container}>
      <Happening />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
