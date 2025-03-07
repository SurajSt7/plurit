import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../features/auth/Login';
import SplashScreen from '../features/auth/SplashScreen';

export type AuthStackParams = {
  Login: undefined;
  SplashScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, animation: 'fade'}}
      initialRouteName="SplashScreen">
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
