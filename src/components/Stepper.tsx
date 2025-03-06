import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import UserPlanSvg from '../assets/svg/UserPlanSvg';
import TextComponent from './TextComponent';
import fonts from '../assets/fonts';

type StepperProps = {
  data: string;
  seats: number;
  color: string;
  count: number;
  onChange: (value: number) => void;
};

const Stepper: React.FC<StepperProps> = props => {
  const {color, data, seats, count, onChange} = props;

  return (
    <View style={styles.pad}>
      <View style={styles.spaceBetween}>
        <View style={styles.alignCenter}>
          <UserPlanSvg color={color} />
          <TextComponent text={data} />
          <TextComponent
            text={`${seats} seats left`}
            color="#FF935B"
            fontFmaily={fonts.poppins.Poppins_ExtraLight}
          />
        </View>

        <View style={styles.alignCenter}>
          <TouchableOpacity
            style={styles.click}
            onPress={() => onChange(Math.max(count - 1, 0))}>
            <TextComponent text="-" size={16} />
          </TouchableOpacity>
          <TextComponent text={String(count)} size={16} />
          <TouchableOpacity
            style={styles.click}
            onPress={() => onChange(count + 1)}>
            <TextComponent text="+" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  click: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowColor: '#000',
    borderRadius: 4,
    borderColor: '#7E2CCF',
    borderWidth: 1,
    paddingHorizontal: 6,
    backgroundColor: '#F9F5FD',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignCenter: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  pad: {
    padding: 20,
  },
});
