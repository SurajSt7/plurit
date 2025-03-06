import React from 'react';
import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ViewStyle,
  StyleProp,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type ViewComponentProps = {
  children?: React.ReactNode;
  touchableFeedback?: boolean;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>;
  hideStatusBar?: boolean;
};

const ViewComponent = (props: ViewComponentProps) => {
  const {children, touchableFeedback = true, bgColor, hideStatusBar} = props;

  const renderBackground = () => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: -12,
          backgroundColor: bgColor ? bgColor : Colors.white,
        }}>
        <StatusBar
          hidden={hideStatusBar ? true : false}
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        {children}
      </SafeAreaView>
    );
  };
  return touchableFeedback ? (
    <TouchableWithoutFeedback
      style={{flex: 1, backgroundColor: '#ffffff'}}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      {renderBackground()}
    </TouchableWithoutFeedback>
  ) : (
    renderBackground()
  );
};
export default ViewComponent;
