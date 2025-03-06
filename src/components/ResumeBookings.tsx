import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DATA3} from '../config/utils/data';
import TextComponent from './TextComponent';
import fonts from '../assets/fonts';
import CrossSvg from '../assets/svg/CrossSvg';

const ResumeBookings = () => {
  const [images, setImages] = React.useState(DATA3);

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return images.length ? (
    <View style={{marginVertical: 12}}>
      <TextComponent
        text="Resume your bookings"
        size={16}
        fontFmaily={fonts.poppins.Poppins_Medium}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.imgContainer}
              key={index}>
              <TouchableOpacity
                onPress={() => handleRemoveImage(index)}
                activeOpacity={0.6}
                style={styles.deleteImage}>
                <CrossSvg />
              </TouchableOpacity>
              <Image source={item} alt="image" style={styles.imgStyles} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  ) : undefined;
};

export default ResumeBookings;

const styles = StyleSheet.create({
  imgStyles: {
    resizeMode: 'cover',
    height: 100,
    width: 150,
    overflow: 'hidden',
    gap: 12,
    borderRadius: 12,
  },
  imgContainer: {
    borderRadius: 12,
    height: 100,
    width: 150,
    overflow: 'hidden',
    marginRight: 12,
  },
  row: {flexDirection: 'row', marginVertical: 8},
  deleteImage: {
    top: 24,
    right: 8,
    zIndex: 1,
    flexDirection: 'row-reverse',
    marginTop: -10,
  },
});
