import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import TextComponent from './TextComponent';
import React, {ForwardedRef, forwardRef, useState} from 'react';
import SpaceComponent from './SpaceComponent';
import Eye from '../assets/svg/Eye';
import EyeCrossed from '../assets/svg/EyeCrossed';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {height} = Dimensions.get('window');

type InputComponentProps = {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'decimal-pad'
    | 'number-pad'
    | 'email-address'
    | 'numbers-and-punctuation';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  maxLength?: number;
  inputStyle?: StyleProp<TextStyle>;
  isSecure?: boolean;
  editable?: boolean;
  autoFocus?: boolean;
  ref?: string;
  bgColor?: string;
  color?: string;
  allowBorderWidth?: boolean;
};

const InputComponent = forwardRef(
  (props: InputComponentProps, ref: ForwardedRef<TextInput>) => {
    const {
      value,
      onChange,
      errorMessage,
      placeholder,
      keyboardType,
      leftIcon,
      rightIcon,
      maxLength,
      inputStyle,
      isSecure,
      editable,
      bgColor,
      autoFocus,
      allowBorderWidth = true,
    } = props;
    const [showPassword, setShowPassword] = useState(isSecure);

    return (
      <>
        <View
          style={[
            styles.inputViewStyles,
            {
              borderColor: '#A3A3A3',
              backgroundColor: bgColor ? bgColor : 'transparent',
              borderWidth: allowBorderWidth ? 0.5 : 0,
            },
            inputStyle,
          ]}>
          {leftIcon ?? null}
          <TextInput
            onChangeText={onChange}
            autoFocus={autoFocus}
            editable={editable}
            ref={ref}
            autoCapitalize="none"
            maxLength={maxLength}
            keyboardType={keyboardType ?? 'default'}
            secureTextEntry={isSecure && showPassword}
            placeholderTextColor={'#A3A3A3'}
            cursorColor={'#7E2CCF'}
            style={[
              {
                flex: 1,
                height: height * 0.045,
                color: '#000',
                textAlign: 'center',
              },
              inputStyle,
            ]}
            placeholder={placeholder ?? ''}
          />
          {rightIcon ?? null}
          {isSecure ? (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Eye color={'#676767'} size={18} />
              ) : (
                <EyeCrossed color={'#676767'} size={18} />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
        {errorMessage && value ? (
          <>
            <TextComponent text={errorMessage} color="#cf6679" />
            <SpaceComponent height={10} />
          </>
        ) : (
          <View style={{height: 16}} />
        )}
      </>
    );
  },
);

const styles = StyleSheet.create({
  inputViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    padding: 8,
    gap: 8,
    marginBottom: 4,
  },
});
export default InputComponent;
