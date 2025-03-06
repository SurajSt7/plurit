import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import EventDetailsScreen, {
  EventDetailsScreenParams,
} from '../features/dashboard/EventDetailsScreen';
import BookEvent, {BookEventParams} from '../features/dashboard/BookEvent';

export type HomeStackParams = {
  Dashboard: undefined;
  EventDetailsScreen: EventDetailsScreenParams;
  BookEvent: BookEventParams;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <HomeStack.Screen name="Dashboard" component={TabNavigator} />
      <HomeStack.Screen
        name="EventDetailsScreen"
        component={EventDetailsScreen}
      />
      <HomeStack.Screen name="BookEvent" component={BookEvent} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
