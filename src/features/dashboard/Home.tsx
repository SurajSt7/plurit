import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation/HomeNavigator';
import ViewComponent from '../../components/ViewComponent';
import {useNavigation} from '@react-navigation/native';
import TextComponent from '../../components/TextComponent';
import LocationIcon from '../../assets/svg/LocationIcon';
import Geolocation from 'react-native-geolocation-service';
import fonts from '../../assets/fonts';
import PickCategory from '../../components/PickCategory';
import MostPopular from '../../components/MostPopular';
import ResumeBookings from '../../components/ResumeBookings';
import HeaderComponent from '../../components/HeaderComponent';

const height = Dimensions.get('window').height;

const Home: React.FC = (): React.JSX.Element => {
  const [location, setLocation] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [category, setCategory] = useState<
    'Entertainment' | 'Academic' | 'Volunteering'
  >('Entertainment');

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const FlatListData = [PickCategory, MostPopular, ResumeBookings];
  const Categories = ['Entertainment', 'Academic', 'Volunteering'];

  const renderFlatlist = ({index}: {index: number}) => {
    const FlatListComponent = FlatListData[index];
    return <FlatListComponent />;
  };

  const footerComponent = () => <View style={{height: height * 0.03}} />;

  const mapCategories = (item: typeof category, index: number) => (
    <TouchableOpacity
      key={index}
      onPress={() => setCategory(item as typeof category)}
      activeOpacity={0.7}
      style={[
        styles.categoryStyles,
        {
          backgroundColor: category === item ? '#FBF5FD' : 'transparent',
        },
      ]}>
      <TextComponent
        text={item}
        color={item === category ? '#7E2CCF' : '#000'}
        fontFmaily={fonts.poppins.Poppins_Medium}
      />
    </TouchableOpacity>
  );

  const renderLocation = () => {
    return (
      <View style={styles.locationInfoStyles}>
        <LocationIcon size={30} />
        <View style={{width: '80%'}}>
          {location ? (
            <>
              <TextComponent
                text={city || 'City'}
                fontFmaily={fonts.poppins.Poppins_SemiBold}
                color="#7E2CCF"
              />
              <TextComponent size={12} text={location} />
            </>
          ) : (
            <ActivityIndicator size={'small'} color={'#7E2CCF'} />
          )}
        </View>
      </View>
    );
  };

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      return auth === 'granted';
    }
    return false;
  };

  useEffect(() => {
    (async () => {
      const hasPermission = await requestPermission();
      if (!hasPermission) {
        console.log('Permission denied');
        return;
      }

      Geolocation.getCurrentPosition(
        async position => {
          console.log('Location: ', position);
          const apiCall = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          );
          const data = await apiCall.json();
          setLocation(data.display_name);
          setCity(data?.address?.city);
        },
        error => {
          console.log(error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    })();
  }, []);

  return (
    <ViewComponent touchableFeedback={false}>
      <View style={styles.container}>
        <HeaderComponent />
        {renderLocation()}
        <View style={styles.categoryContainer}>
          {Categories.map((item, index) =>
            mapCategories(item as typeof category, index),
          )}
          ?
        </View>
        <FlatList
          renderItem={renderFlatlist}
          data={FlatListData}
          ListFooterComponent={footerComponent}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </ViewComponent>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationInfoStyles: {
    padding: 8,
    backgroundColor: '#F9F5FD',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  item: {
    borderRightWidth: 3,
    borderRightColor: 'red',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    alignItems: 'center',
    borderColor: '#F9F5FD',
    borderWidth: 2.5,
    borderRadius: 12,
  },
  categoryStyles: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
    borderRadius: 12,
  },
});
