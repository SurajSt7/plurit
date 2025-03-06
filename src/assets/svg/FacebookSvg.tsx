import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function Facebook(props: any) {
  return (
    <Svg
      width={props.size || 55}
      height={props.size || 55}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_2574_18620)">
        <Path
          d="M30.5 60.657c16.569 0 30-13.431 30-30 0-16.568-13.431-30-30-30-16.569 0-30 13.432-30 30 0 16.569 13.431 30 30 30z"
          fill="#187af2"
        />
        <Path
          d="M40.005 27.105l-.604 5.226a.979.979 0 01-.961.876h-5.455l-.027 15.495a.7.7 0 01-.682.705H26.75a.683.683 0 01-.682-.709v-15.49h-4.09a.978.978 0 01-.969-.99l-.02-5.225a.981.981 0 01.968-.996h4.111v-5.045c0-5.857 3.477-9.045 8.577-9.045h4.18a.984.984 0 01.972.996V17.3a.982.982 0 01-.972.995h-2.564c-2.771 0-3.31 1.364-3.31 3.334v4.367h6.092a.983.983 0 01.962 1.108z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2574_18620">
          <Path fill="#fff" transform="translate(.5 .657)" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Facebook;
