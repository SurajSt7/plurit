import * as React from 'react';
import Svg, {
  ForeignObject,
  Circle,
  G,
  Path,
  Defs,
  ClipPath,
} from 'react-native-svg';

function ChevronLeft(props: any) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <ForeignObject x={-50} y={-50} width={124} height={124}></ForeignObject>
      <Circle
        data-figma-bg-blur-radius={50}
        cx={12}
        cy={12}
        r={12}
        fill="#e8dcf2"
        fillOpacity={0.8}
      />
      <G clipPath="url(#clip1_1_364)">
        <Path
          d="M13.5 19.5L6 12l7.5-7.5 1.331 1.331L8.663 12l6.168 6.169L13.5 19.5z"
          fill="#5F6368"
        />
      </G>
      <Defs>
        <ClipPath id="bgblur_0_1_364_clip_path">
          <Circle cx={12} cy={12} r={12} />
        </ClipPath>
        <ClipPath id="clip1_1_364">
          <Path fill="#fff" transform="translate(6 3)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChevronLeft;
