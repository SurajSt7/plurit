import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider, useUser} from './src/config/utils/userContext';
import Login from './src/features/auth/Login';
import AuthNavigator from './src/navigation/AuthNavigator';
import HomeNavigator from './src/navigation/HomeNavigator';
import MainApp from './MainApp';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = (): React.JSX.Element => {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <MainApp />
      </SafeAreaProvider>
    </UserProvider>
  );
};

export default App;
