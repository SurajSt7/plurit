import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CalendarSvg(props: any) {
  return (
    <Svg
      width={props.size || 18}
      height={props.size || 19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.875 14a1.81 1.81 0 01-1.331-.544A1.81 1.81 0 019 12.125c0-.525.181-.969.544-1.331a1.81 1.81 0 011.331-.544c.525 0 .969.181 1.331.544.363.362.544.806.544 1.331 0 .525-.181.969-.544 1.331a1.81 1.81 0 01-1.331.544zM3.75 17c-.413 0-.766-.147-1.06-.44a1.445 1.445 0 01-.44-1.06V5c0-.412.147-.766.44-1.06.294-.293.647-.44 1.06-.44h.75V2H6v1.5h6V2h1.5v1.5h.75c.412 0 .766.147 1.06.44.293.294.44.648.44 1.06v10.5c0 .412-.147.766-.44 1.06-.294.293-.648.44-1.06.44H3.75zm0-1.5h10.5V8H3.75v7.5z"
        fill="#5F6368"
      />
    </Svg>
  );
}

export default CalendarSvg;
