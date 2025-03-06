import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ViewComponent from '../../components/ViewComponent';
import TextComponent from '../../components/TextComponent';
import fonts from '../../assets/fonts';
import Stepper from '../../components/Stepper';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation/HomeNavigator';
import LGButtonsGrp from '../../components/LGButtonsGrp';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/svg/BackIcon';
import ButtonComponent from '../../components/ButtonComponent';

export type BookEventParams = {
  eventName?: string;
  platinumClassPrice: string;
  goldClassPrice: string;
  silverClass: string;
};

type BookEventProps = NativeStackScreenProps<HomeStackParams, 'BookEvent'>;

const BookEvent: React.FC<BookEventProps> = props => {
  const {route, navigation} = props;

  const [seatCounts, setSeatCounts] = useState({
    platinum: 0,
    gold: 0,
    silver: 0,
  });

  const updateSeatCount = (
    type: 'platinum' | 'gold' | 'silver',
    value: number,
  ) => {
    setSeatCounts(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  const finalPrice =
    seatCounts.platinum * Number(route.params.platinumClassPrice) +
    seatCounts.gold * Number(route.params.goldClassPrice) +
    seatCounts.silver * Number(route.params.silverClass);

  const noOfSeats = seatCounts.platinum + seatCounts.gold + seatCounts.silver;

  return (
    <>
      <ViewComponent>
        <View style={styles.container}>
          <Header />
          <StageButton />
          <LGButtonsGrp data={route.params} />
          <TextComponent
            text="Seats Layout"
            textAlign="center"
            styles={{marginTop: 12, color: '#757575'}}
            size={16}
          />
        </View>
        <View style={styles.separator} />

        <Stepper
          color="#5F6368"
          data={`Platinum Class ₹ ${route.params.platinumClassPrice}`}
          seats={8}
          count={seatCounts.platinum}
          onChange={value => updateSeatCount('platinum', value)}
        />

        <View style={styles.separator} />

        <Stepper
          color="#FAC38C"
          data={`Gold Class ₹ ${route.params.goldClassPrice}`}
          seats={5}
          count={seatCounts.gold}
          onChange={value => updateSeatCount('gold', value)}
        />

        <View style={styles.separator} />

        <Stepper
          color="#ABAAD5"
          data={`Silver Class ₹ ${route.params.silverClass}`}
          seats={3}
          count={seatCounts.silver}
          onChange={value => updateSeatCount('silver', value)}
        />

        <View style={styles.separator} />
      </ViewComponent>
      <View style={styles.footer}>
        <View style={styles.rowView}>
          <View style={styles.gap}>
            <View style={styles.rowView2}>
              <TextComponent
                text={'₹ ' + String(finalPrice)}
                size={20}
                color="#7E2CCF"
                fontFmaily={fonts.inter.Inter_SemiBold}
              />
              <TextComponent
                text={'for ' + String(noOfSeats) + ' seat'}
                color="#757575"
              />
            </View>
            <TextComponent text="+199 tax & fees" color="#757575" />
          </View>
          <ButtonComponent
            title="Pay Now"
            onPress={() => navigation.navigate('Dashboard')}
            buttonStyles={styles.buttonView}
          />
        </View>
      </View>
    </>
  );
};

export default BookEvent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EEE6F9',
  },
  footer: {
    paddingVertical: 20,
    paddingLeft: 20,
    borderTopWidth: 2,
    borderColor: '#F9F5FD',
    backgroundColor: '#fff',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 16,
  },
  stageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#E6E6E6',
    borderWidth: 1.5,
    borderColor: '#EEE6F9',
    paddingHorizontal: 44,
    paddingVertical: 8,
  },
  radius: {
    borderRadius: 4,
  },
  lguButonStyles: {
    padding: 16,
    alignItems: 'center',
  },
  stageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gap: {
    gap: 8,
    alignItems: 'center',
  },
  rowView2: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  buttonView: {
    width: '27%',
    marginRight: 20,
  },
});

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={styles.headerView}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <TextComponent
        text="Select Seats"
        size={16}
        fontFmaily={fonts.poppins.Poppins_Medium}
      />
    </View>
  );
};

const StageButton = () => {
  return (
    <View style={styles.stageContainer}>
      <View style={styles.stageButton}>
        <TextComponent
          text="Stage"
          size={16}
          color="#7a7a7a"
          fontFmaily={fonts.poppins.Poppins_Medium}
        />
      </View>
    </View>
  );
};
