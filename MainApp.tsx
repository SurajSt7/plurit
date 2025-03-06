import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useUser} from './src/config/utils/userContext';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';

const MainApp: React.FC = (): React.JSX.Element => {
  const {user} = useUser();
  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainApp;
