import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeTabIcon(props: any) {
  return (
    <Svg
      width={props.size || 16}
      height={props.size || 18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 18V6l8-6 8 6v12h-6v-7H6v7H0z"
        fill={props.color || '#5f6368'}
      />
    </Svg>
  );
}

export default HomeTabIcon;
