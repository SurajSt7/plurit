import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function BackIcon(props: any) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1_424)">
        <Path
          d="M10 22.5l-10-10 10-10 1.775 1.775L3.55 12.5l8.225 8.225L10 22.5z"
          fill="#5F6368"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_424">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default BackIcon;
