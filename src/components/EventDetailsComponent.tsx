import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import fonts from '../assets/fonts';
import {EventData} from '../config/utils/data';
import HeartFilled from '../assets/svg/HeartFilled';
import Play from '../assets/svg/Play';
import ThunderSvg from '../assets/svg/ThunderSvg';
import HeartIcon from '../assets/svg/HeartIcon';
import TimerSvg from '../assets/svg/TimerSvg';
import UserSvg from '../assets/svg/UserSvg';
import MusicSvg from '../assets/svg/MusicSvg';
import GlobeSvg from '../assets/svg/GlobeSvg';
import CalendarSvg from '../assets/svg/CalendarSvg';

type IconType = React.FC<{width?: number; height?: number; color?: string}>;

type IconTextProps = {
  Icon: IconType;
  text: string;
  color?: string;
  fontFmaily?: string;
};

type EventDetailsProps = {
  data: Omit<EventData, 'eventPoster'>;
};

const IconText: React.FC<IconTextProps> = ({
  Icon,
  text,
  color = '#757575',
  fontFmaily = fonts.poppins.Poppins_Thin,
}) => (
  <View style={styles.iconRowView}>
    <Icon />
    <TextComponent text={text} color={color} fontFmaily={fontFmaily} />
  </View>
);

const EventDetailsComponent: React.FC<EventDetailsProps> = ({data}) => {
  return (
    <View style={styles.parentView}>
      <TextComponent
        text={data.eventName}
        size={19}
        fontFmaily={fonts.poppins.Poppins_Regular}
      />

      <View style={styles.firstRow}>
        <View style={styles.leftRow}>
          <HeartFilled />
          <TextComponent text="157 interested" color="#7E2CCF" size={13} />
          <TouchableOpacity activeOpacity={0.5} style={styles.touchableRow}>
            <Play />
            <TextComponent
              text="Teaser"
              size={13}
              fontFmaily={fonts.poppins.Poppins_ExtraLight}
            />
          </TouchableOpacity>
          <IconText
            Icon={ThunderSvg}
            text="Fast filling"
            color="#FF935B"
            fontFmaily={fonts.poppins.Poppins_ExtraLight}
          />
        </View>
        <HeartIcon />
      </View>

      <View style={styles.infoContainer}>
        <IconText Icon={TimerSvg} text={data.eventDuration} />
        <IconText Icon={UserSvg} text={data.ageLimit} />
        <IconText Icon={MusicSvg} text={data.genre} />
        <IconText Icon={GlobeSvg} text={data.languages} />
        <IconText Icon={CalendarSvg} text={data.eventDate} />
      </View>

      <View style={styles.priceContainer}>
        <TextComponent
          text="Price:"
          color="#757575"
          fontFmaily={fonts.poppins.Poppins_Thin}
        />
        <TextComponent
          text={data.price}
          color="#5a5a5a"
          fontWeight="500"
          fontFmaily={Platform.select({android: fonts.poppins.Poppins_Medium})}
        />
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default EventDetailsComponent;

const styles = StyleSheet.create({
  parentView: {marginVertical: 8},
  firstRow: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  touchableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F5FD',
    borderColor: '#EEE6F9',
    borderWidth: 1.5,
    padding: 8,
    gap: 4,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginVertical: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  iconRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#E8DFF4',
    marginTop: 12,
  },
});
