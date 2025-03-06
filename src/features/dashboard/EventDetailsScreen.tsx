import {
  ImageSourcePropType,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation/HomeNavigator';
import EventDetailsHeader from '../../components/EventDetailsHeader';
import Imageheader from '../../components/Imageheader';
import EventDetailsComponent from '../../components/EventDetailsComponent';
import EventLocationComponent from '../../components/EventLocationComponent';
import EventRulesComponent from '../../components/EventRulesComponent';
import FooterComponent from '../../components/FooterComponent';

export type EventDetailsScreenParams = {
  eventDuration: string;
  ageLimit: string;
  genre: string;
  languages: string;
  eventDate: string;
  price: string;
  location: string;
  eventTime: string;
  eventName: string;
  eventPoster?: ImageSourcePropType;
};

type EventDetailsScreenProps = NativeStackScreenProps<
  HomeStackParams,
  'EventDetailsScreen'
>;

const EventDetailsScreen: React.FC<EventDetailsScreenProps> = props => {
  const {route} = props;
  const [disableButton, setDisableButton] = useState<boolean>(true);

  return (
    <>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <StatusBar hidden />
        <EventDetailsHeader />
        <Imageheader imgUri={route.params.eventPoster!} />
        <View style={styles.padding}>
          <EventDetailsComponent data={route.params} />
          <EventLocationComponent
            data={route.params}
            onChangeEventPress={setDisableButton}
          />
          <EventRulesComponent ageLimit={route.params.ageLimit} />
        </View>
      </ScrollView>
      <FooterComponent pressed={disableButton} data={route.params.eventName} />
    </>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  optionsStyles: {
    backgroundColor: '#F9F5FD',
    padding: 12,
    bottom: 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  optionContainer: {bottom: 38, left: 20, flexDirection: 'row'},
  imgStyles: {
    height: 250,
    resizeMode: 'cover',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  padding: {
    padding: 16,
  },
});
