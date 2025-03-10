import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function UserPlanSvg(props: any) {
  return (
    <Svg
      width={props.size || 18}
      height={props.size || 18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9 12.75c.213 0 .39-.072.534-.216A.726.726 0 009.75 12a.726.726 0 00-.216-.534A.726.726 0 009 11.25a.726.726 0 00-.534.216.726.726 0 00-.216.534c0 .213.072.39.216.534A.726.726 0 009 12.75zm0-3c.213 0 .39-.072.534-.216A.726.726 0 009.75 9a.726.726 0 00-.216-.534A.726.726 0 009 8.25a.726.726 0 00-.534.216A.726.726 0 008.25 9c0 .213.072.39.216.534A.726.726 0 009 9.75zm0-3c.213 0 .39-.072.534-.216A.726.726 0 009.75 6a.726.726 0 00-.216-.534A.726.726 0 009 5.25a.726.726 0 00-.534.216A.726.726 0 008.25 6c0 .213.072.39.216.534A.726.726 0 009 6.75zM15 15H3c-.413 0-.766-.147-1.06-.44a1.445 1.445 0 01-.44-1.06v-3c.413 0 .766-.147 1.06-.44C2.852 9.765 3 9.411 3 9c0-.412-.147-.766-.44-1.06A1.444 1.444 0 001.5 7.5v-3c0-.412.147-.766.44-1.06C2.235 3.148 2.588 3 3 3h12c.412 0 .766.147 1.06.44.293.294.44.648.44 1.06v3c-.413 0-.766.147-1.06.44-.293.294-.44.647-.44 1.06 0 .412.147.766.44 1.06.294.293.647.44 1.06.44v3c0 .412-.147.766-.44 1.06-.294.293-.647.44-1.06.44z"
        fill="url(#paint0_linear_1_527)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_527"
          x1={9}
          y1={3}
          x2={9}
          y2={15}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={props.color || '#5F6368'} />
          <Stop offset={1} stopColor={props.color || '#5F6368'} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default UserPlanSvg;
