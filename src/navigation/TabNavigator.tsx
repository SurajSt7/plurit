import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../features/bottomTabs/Search';
import Profile from '../features/bottomTabs/Profile';
import Booking from '../features/bottomTabs/Booking';
import WishList from '../features/bottomTabs/WishList';
import Home from '../features/dashboard/Home';
import HomeTabIcon from '../assets/svg/HomeTabIcon';
import SearchIcon from '../assets/svg/SearchIcon';
import BookingIcon from '../assets/svg/BookingIcon';
import HeartIcon from '../assets/svg/HeartIcon';
import ProfileIcon from '../assets/svg/ProfileIcon';
import HeartFilled from '../assets/svg/HeartFilled';
import fonts from '../assets/fonts';

export type TabStackParams = {
  Home: undefined;
  Search: undefined;
  Booking: undefined;
  Profile: undefined;
  Wishlist: undefined;
};

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#7E2CCF',
        headerShown: false,
        tabBarLabelStyle: {
          bottom: 5,
          fontWeight: '700',
        },
        tabBarIconStyle: {
          bottom: 2,
        },
      }}>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeTabIcon color={focused && '#7E2CCF'} />
          ),
        }}
      />
      <TabStack.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <BookingIcon color={focused && '#7E2CCF'} />
          ),
        }}
      />
      <TabStack.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <SearchIcon size={20} color={focused && '#7E2CCF'} />
          ),
        }}
      />
      <TabStack.Screen
        name="Wishlist"
        component={WishList}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HeartFilled /> : <HeartIcon />,
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <ProfileIcon color={focused && '#7E2CCF'} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
