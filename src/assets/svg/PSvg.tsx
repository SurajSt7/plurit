import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PSvg(props: any) {
  return (
    <Svg
      width={props.size || 18}
      height={props.size || 19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.5 16.25V2.75h5.25c1.25 0 2.313.438 3.188 1.313.874.875 1.312 1.937 1.312 3.187 0 1.25-.438 2.313-1.313 3.188-.874.874-1.937 1.312-3.187 1.312H7.5v4.5h-3zm3-7.5h2.4c.412 0 .766-.147 1.06-.44.293-.294.44-.648.44-1.06 0-.412-.147-.766-.44-1.06a1.445 1.445 0 00-1.06-.44H7.5v3z"
        fill="#5F6368"
      />
    </Svg>
  );
}

export default PSvg;
