import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationFilledIcon(props: any) {
  return (
    <Svg
      width={props.size || 18}
      height={props.size || 18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9 9c.412 0 .766-.147 1.06-.44.293-.294.44-.648.44-1.06 0-.412-.147-.766-.44-1.06A1.444 1.444 0 009 6c-.412 0-.766.147-1.06.44-.293.294-.44.647-.44 1.06 0 .412.147.766.44 1.06.294.293.647.44 1.06.44zm0 7.5c-2.013-1.713-3.516-3.303-4.51-4.772C3.498 10.26 3 8.9 3 7.65c0-1.875.603-3.369 1.81-4.481C6.015 2.056 7.412 1.5 9 1.5c1.588 0 2.984.556 4.19 1.669C14.398 4.28 15 5.775 15 7.65c0 1.25-.497 2.61-1.49 4.078-.994 1.469-2.498 3.06-4.51 4.772z"
        fill="#5F6368"
      />
    </Svg>
  );
}

export default LocationFilledIcon;
