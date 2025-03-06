import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MapMarkerIconSvg(props: any) {
  return (
    <Svg
      width={props.size || 18}
      height={props.size || 19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.25 16.25l-4.5-1.575-3.487 1.35a.677.677 0 01-.694-.084.74.74 0 01-.319-.629v-10.5a.7.7 0 01.14-.43.847.847 0 01.385-.282L6.75 2.75l4.5 1.575 3.488-1.35c.25-.1.48-.072.693.084a.74.74 0 01.319.628v10.5a.7.7 0 01-.14.432.847.847 0 01-.385.281l-3.975 1.35zm-.75-1.838V5.639l-3-1.05v8.774l3 1.05z"
        fill="#7A7A7A"
      />
    </Svg>
  );
}

export default MapMarkerIconSvg;
