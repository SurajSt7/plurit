import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import fonts from '../assets/fonts';
import {DATA} from '../config/utils/data';

const PickCategory = () => {
  const renderCategory = ({
    item,
    index,
  }: {
    item: React.ReactElement;
    index: number;
  }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} key={index}>
        {item}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TextComponent
        text="Pick your Category"
        fontFmaily={fonts.poppins.Poppins_Medium}
        size={17}
      />
      <View style={styles.row}>
        <FlatList numColumns={4} data={DATA} renderItem={renderCategory} />
      </View>
    </View>
  );
};

export default PickCategory;

const styles = StyleSheet.create({
  row: {flexDirection: 'row', marginVertical: 8, alignItems: 'center'},
});
