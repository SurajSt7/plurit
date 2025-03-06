import React, {SetStateAction} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import TextComponent from './TextComponent';
import fonts from '../assets/fonts';

type ButtonProps = {
  onPress: () => void | React.Dispatch<SetStateAction<boolean>>;
  title: string;
  buttonStyles?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
  bgColor?: string;
  activeOpacity?: number;
};

const {height} = Dimensions.get('window');

const ButtonComponent: React.FC<ButtonProps> = props => {
  const {
    onPress,
    title,
    buttonStyles,
    loading,
    disabled = false,
    activeOpacity,
    bgColor,
  } = props;

  const renderButton = () => {
    if (loading) {
      return <ActivityIndicator size={'small'} color={'#7E2CCF'} />;
    } else {
      return <TextComponent text={title} size={16} color={'white'} />;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.7}
      style={[
        style.buttonView,
        {
          backgroundColor: bgColor ? bgColor : '#7E2CCF',
          opacity: disabled ? 0.25 : 1,
        },
        buttonStyles,
      ]}
      onPress={onPress}
      disabled={disabled}>
      {renderButton()}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonView: {
    height: height * 0.052,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
});
export default ButtonComponent;
