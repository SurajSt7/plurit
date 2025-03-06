import {StyleSheet} from 'react-native';
import React, {Fragment} from 'react';
import LGButton from './LGButton';
import {EventPlanPrice} from '../config/utils/data';

const LGButtonsGrp = ({data}: {data: Omit<EventPlanPrice, 'eventName'>}) => {
  return (
    <Fragment>
      <LGButton
        colors={['#bebdde', '#59586E', '#ABAAD4']}
        text={'Platinum Class ₹ ' + data.platinumClassPrice}
      />
      <LGButton
        colors={['#FAC38C', '#947353']}
        text={'Gold Class ₹ ' + data.goldClassPrice}
      />
      <LGButton
        lgButton
        colors={['#DBDBDB', '#757575']}
        text={'Silver Class ₹ ' + data.silverClass}
      />
    </Fragment>
  );
};

export default LGButtonsGrp;

const styles = StyleSheet.create({});
