import * as React from 'react';
import Svg, {Path, Defs, RadialGradient, Stop} from 'react-native-svg';

function Instagram(props: any) {
  return (
    <Svg
      width={props.size || 55}
      height={props.size || 55}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M29.238 57.625C13.565 57.625.9 44.96.9 29.288.9 13.615 13.644.87 29.317.87c15.593 0 28.337 12.744 28.337 28.417 0 15.672-12.744 28.337-28.417 28.337z"
        fill="url(#paint0_radial_2814_542)"
      />
      <Path
        d="M29.238 16.544c4.195 0 4.67 0 6.253.079 1.504.079 2.374.316 2.928.554.713.316 1.267.633 1.821 1.187s.87 1.03 1.187 1.82c.238.555.475 1.346.554 2.93.08 1.662.08 2.137.08 6.253 0 4.195 0 4.67-.08 6.253-.079 1.504-.316 2.375-.554 2.929-.316.712-.633 1.266-1.187 1.82s-1.029.871-1.82 1.188c-.555.237-1.346.475-2.93.554-1.662.079-2.136.079-6.253.079-4.195 0-4.67 0-6.253-.08-1.504-.078-2.375-.316-2.929-.553-.712-.317-1.266-.634-1.82-1.188-.554-.554-.87-1.029-1.188-1.82-.237-.554-.474-1.346-.554-2.929-.079-1.662-.079-2.137-.079-6.253 0-4.195 0-4.67.08-6.254.079-1.503.316-2.374.553-2.928.317-.713.634-1.267 1.188-1.82.554-.555 1.029-.872 1.82-1.188.555-.238 1.346-.475 2.93-.554 1.661-.08 2.136-.08 6.253-.08zm0-2.85c-4.196 0-4.75 0-6.412.08-1.662.078-2.77.316-3.8.712-1.029.395-1.9.95-2.77 1.82-.87.87-1.425 1.741-1.82 2.77-.396 1.03-.634 2.138-.713 3.8-.08 1.662-.08 2.216-.08 6.412 0 4.195 0 4.749.08 6.411.08 1.663.317 2.77.712 3.8.396 1.029.95 1.9 1.82 2.77.872.87 1.742 1.425 2.771 1.82 1.03.397 2.138.634 3.8.713 1.662.08 2.216.08 6.412.08 4.195 0 4.749 0 6.411-.08 1.662-.079 2.77-.316 3.8-.712 1.029-.396 1.9-.95 2.77-1.82.87-.872 1.425-1.742 1.82-2.771.396-1.03.634-2.138.713-3.8.08-1.662.08-2.216.08-6.411 0-4.196 0-4.75-.08-6.412s-.317-2.77-.712-3.8c-.396-1.029-.95-1.9-1.821-2.77-.87-.87-1.741-1.425-2.77-1.82-1.03-.396-2.138-.634-3.8-.713-1.583-.079-2.137-.079-6.412-.079z"
        fill="#fff"
      />
      <Path
        d="M29.238 21.293a7.973 7.973 0 00-7.995 7.995 7.973 7.973 0 007.995 7.994 7.973 7.973 0 007.994-7.994 7.973 7.973 0 00-7.994-7.995zm0 13.14a5.22 5.22 0 01-5.225-5.224 5.22 5.22 0 015.224-5.225 5.22 5.22 0 015.225 5.224c0 2.93-2.296 5.225-5.225 5.225zM39.449 20.976c0 1.03-.871 1.9-1.9 1.9-1.03 0-1.9-.87-1.9-1.9 0-1.029.87-1.9 1.9-1.9 1.029 0 1.9.871 1.9 1.9z"
        fill="#fff"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_2814_542"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-.538 57.846) scale(104.973)">
          <Stop stopColor="#F4EC55" />
          <Stop offset={0.2412} stopColor="#E48242" />
          <Stop offset={0.3463} stopColor="#D66863" />
          <Stop offset={0.4422} stopColor="#CD4F74" />
          <Stop offset={0.4888} stopColor="#C94379" />
          <Stop offset={1} stopColor="#3F56A6" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default Instagram;
