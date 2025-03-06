import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import {EventData} from '../config/utils/data';
import LocationFilledIcon from '../assets/svg/LocationFilledIcon';
import TextComponent from './TextComponent';
import InfoSvg from '../assets/svg/InfoSvg';
import fonts from '../assets/fonts';
import PSvg from '../assets/svg/PSvg';
import HandicapIconSvg from '../assets/svg/HandicapSvg';
import FoodIconSvg from '../assets/svg/FoodIconSvg';
import MapMarkerIconSvg from '../assets/svg/MapMarkerIconSvg';

type EventLocationProps = {
  data: Omit<EventData, 'eventPoster'>;
  onChangeEventPress: React.Dispatch<SetStateAction<boolean>>;
};

const EventLocationComponent: React.FC<EventLocationProps> = ({
  data,
  onChangeEventPress,
}) => {
  const [eventPressed, setEventPressed] = useState<boolean>(false);

  const handleEventPress = () => {
    const newState = !eventPressed;
    setEventPressed(newState);

    // Pass the OPPOSITE of the new state to enable the button
    // When eventTimeSelected becomes true, we want to disable the button to be false
    onChangeEventPress(!newState);
  };

  const eventTimeStyles = StyleSheet.compose(styles.eventTimeStyles, {
    borderColor: eventPressed ? '#7E2CCF' : '#F1E6FF',
  });

  return (
    <View style={styles.parentView}>
      <View style={styles.rowView}>
        <LocationFilledIcon />
        <TextComponent
          text={data.location}
          size={16}
          fontFmaily={fonts.poppins.Poppins_Regular}
        />
        <InfoSvg />
      </View>
      <View style={styles.rowView}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleEventPress}
          style={eventTimeStyles}>
          <TextComponent
            text={data.eventTime}
            fontFmaily={fonts.poppins.Poppins_Thin}
          />
        </TouchableOpacity>
        <TextComponent text={'16 Seats left'} color="#FF935B" />
      </View>
      <View style={styles.rowView}>
        <PSvg size={20} />
        <HandicapIconSvg size={20} />
        <FoodIconSvg size={20} />
        <MapMarkerIconSvg size={20} />
        <View style={styles.row}>
          <TextComponent text="4kms nearby" color="#757575" underLine />
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default EventLocationComponent;

const styles = StyleSheet.create({
  parentView: {
    marginTop: 8,
    gap: 20,
  },
  rowView: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  eventTimeStyles: {
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: '#F1E6FF',
    padding: 10,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#E8DFF4',
  },
});
