import {ImageSourcePropType} from 'react-native';
import ConcertSvg from '../../assets/svg/ConcertSvg';
import DanceShowSvg from '../../assets/svg/DanceShowSvg';
import FoodFestSvg from '../../assets/svg/FoodFestSvg';
import MagicianSvg from '../../assets/svg/MagicianSvg';
import PetsShowSvg from '../../assets/svg/PetsShowSvg';
import PlaysSvg from '../../assets/svg/PlaysSVG';
import PremiereSvg from '../../assets/svg/PremiereSvg';
import SportsSvg from '../../assets/svg/SportsSvg';

export type EventData = {
  ageLimit: string;
  eventDate: string;
  eventDuration: string;
  eventName: string;
  eventTime: string;
  genre: string;
  languages: string;
  location: string;
  price: string;
  eventPoster: ImageSourcePropType;
};

export type EventItem = {
  data: EventData;
  uri: ImageSourcePropType;
};

export type EventPlanPrice = {
  eventName: string;
  platinumClassPrice: string;
  goldClassPrice: string;
  silverClass: string;
};

export const DATA = [
  <PlaysSvg size={90} />,
  <PetsShowSvg size={92} />,
  <ConcertSvg size={94} />,
  <MagicianSvg size={95} />,
  <FoodFestSvg size={90} />,
  <DanceShowSvg size={93} />,
  <PremiereSvg size={92} />,
  <SportsSvg size={95} />,
];

const img1 = require('../../assets/images/ARRehman.png');
const img2 = require('../../assets/images/Cricket.png');

export const DATA2: EventItem[] = [
  {
    data: {
      ageLimit: '5 years+',
      eventDate: 'Mon 10, Mar 2025',
      eventDuration: '2h 30m',
      eventName: 'The Complete AR Rahman Show',
      eventTime: '7:00 PM',
      genre: 'Bollywood, Retro',
      languages: 'Hindi, Tamil',
      location: 'North Avenue Grounds, Bengaluru',
      price: '₹480 - ₹1580',
      eventPoster: require('../../assets/images/ARRahmanEvent.png'),
    },
    uri: img1,
  },
  {
    data: {
      ageLimit: 'Any age',
      eventDate: 'Mon 10, Mar 2025',
      eventDuration: '6h 30m',
      eventName: 'The India v/s Newzealand Match',
      eventTime: '7:00 AM',
      genre: 'Cricket, Test Cricket',
      languages: 'English',
      location: 'Chinnaswami Stadium, Bengaluru',
      price: '₹600 - ₹1200',
      eventPoster: require('../../assets/images/Cricket.png'),
    },
    uri: img2,
  },
];

const img3 = require('../../assets/images/Theatre.png');
const img4 = require('../../assets/images/StandupComedy.png');

export const DATA3 = [img4, img3];

export const eventPrice: EventPlanPrice[] = [
  {
    eventName: 'The India v/s Newzealand Match',
    platinumClassPrice: '1200',
    goldClassPrice: '900',
    silverClass: '600',
  },
  {
    eventName: 'The Complete AR Rahman Show',
    platinumClassPrice: '1480',
    goldClassPrice: '800',
    silverClass: '480',
  },
];
