import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ViewComponent from '../../components/ViewComponent';
import Happening from '../../assets/svg/HappeningSVG';
import SpaceComponent from '../../components/SpaceComponent';
import TextComponent from '../../components/TextComponent';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import Facebook from '../../assets/svg/FacebookSvg';
import Instagram from '../../assets/svg/InstagramSvg';
import Twitter from '../../assets/svg/TwitterSvg';
import {useUser} from '../../config/utils/userContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../navigation/AuthNavigator';

type LoginProps = NativeStackScreenProps<AuthStackParams, 'Login'>;

const Login: React.FC<LoginProps> = (): React.JSX.Element => {
  const [phone, setPhone] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [phoneRef, setPhoneRef] = useState<string>('');
  const [otpRef, setOtpRef] = useState<string>('');
  const {setUser} = useUser();

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const onChangePhone = (txt: string): void => {
    if (/^[a-zA-Z]$/.test(txt[0])) {
      if (!validateEmail(txt.trim())) {
        setPhoneRef('Please enter valid email');
      } else {
        setPhoneRef('');
      }
    } else if (txt[0] > '0' || txt[0] <= '9') {
      if (txt.trim().length < 10) {
        setPhoneRef('Enter at least 10 digits');
      } else setPhoneRef('');
    } else setPhoneRef('');
    setPhone(txt);
  };

  const onChangeOtp = (txt: string): void => {
    const regex = /^\d+$/;
    if (!regex.test(txt)) {
      setOtpRef('Only numbers are allowed');
    } else setOtpRef('');
    setOtp(txt);
  };

  const handlePress = () => {
    if (otp === '1234') {
      setUser({user: phone});
    }
  };

  const onDisabled = (): boolean => {
    if (phoneRef.length || otpRef.length || !otp.length || !phone.length) {
      return true;
    } else if (!phoneRef.length && !otpRef.length) {
      return false;
    }
    return true;
  };

  return (
    <ViewComponent>
      <View style={styles.container}>
        <View style={styles.centerView}>
          <Happening />
          <SpaceComponent height={50} />
          <View style={{width: '75%'}}>
            <TextComponent
              lineHeight={25}
              text="Login now to find whats happening around you "
              size={16}
              fontWeight="400"
              textAlign="center"
            />
          </View>
          <SpaceComponent height={40} />
          <InputComponent
            keyboardType="numbers-and-punctuation"
            errorMessage={phoneRef}
            onChange={onChangePhone}
            value={phone}
            placeholder="Email Address or Mobile number"
          />
          <InputComponent
            keyboardType="decimal-pad"
            value={otp}
            errorMessage={otpRef}
            onChange={onChangeOtp}
            placeholder="Click on Send OTP "
          />
          <View style={styles.buttonView}>
            <ButtonComponent
              onPress={handlePress}
              title="Login"
              disabled={onDisabled()}
            />
          </View>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={styles.otpView}>
            <TextComponent
              text="Send OTP"
              color="#7E2CCF"
              size={16}
              textAlign="right"
            />
          </TouchableOpacity>
          <TextComponent text="or" color="#A3A3A3" size={16} />
          <TextComponent
            text="Sign in with other accounts"
            color="#A3A3A3"
            size={16}
          />
          <View style={styles.shareIconStyles}>
            <Facebook />
            <Instagram />
            <Twitter />
          </View>
        </View>
      </View>
    </ViewComponent>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    width: '90%',
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
  },
  otpView: {
    alignSelf: 'flex-end',
    right: 8,
    marginVertical: 20,
  },
  shareIconStyles: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 20,
  },
});
