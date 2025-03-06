import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import fonts from '../assets/fonts';

const EventRulesComponent: React.FC<{ageLimit: string}> = ({ageLimit}) => {
  const rulesList = [
    'Follow organiser guidelines',
    'Drugs, smoke and alcohol consumption prohibited',
    Number(ageLimit[0])
      ? 'Kids below 5 years not recommended'
      : 'Re-entry into the stadium is not permitted once you exit.',
  ];

  const offersList = [
    'Paytm 5% off for min value of ₹ 1500',
    'Use HSBC CC for 10% discount on any booking',
  ];

  return (
    <View style={styles.parentView}>
      <TextComponent
        text="Policies & Rules"
        color="#757575"
        size={15}
        fontFmaily={fonts.poppins.Poppins_Medium}
      />
      {rulesList.map((item, index) => {
        return (
          <View style={styles.listView} key={index}>
            <TextComponent
              text={'\u2022'}
              styles={styles.bullet}
              color="#757575"
            />
            <TextComponent text={item} color="#757575" />
          </View>
        );
      })}
      <View style={styles.spacing} />
      <TextComponent
        text="Offers for you"
        color="#757575"
        size={15}
        fontFmaily={fonts.poppins.Poppins_Medium}
      />
      {offersList.map((item, index) => {
        return (
          <View style={styles.listView} key={index}>
            <TextComponent
              text={'\u2022'}
              styles={styles.bullet}
              color="#757575"
            />
            <TextComponent text={item} color="#757575" />
          </View>
        );
      })}
    </View>
  );
};

export default EventRulesComponent;

const styles = StyleSheet.create({
  parentView: {
    marginVertical: 16,
  },
  bullet: {
    marginLeft: 8,
    color: '#757575',
  },
  listView: {flexDirection: 'row', gap: 6, marginTop: 8, width: '96%'},
  spacing: {marginTop: 16},
});
