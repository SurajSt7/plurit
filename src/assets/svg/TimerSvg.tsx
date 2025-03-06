import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TimerSvg(props: any) {
  return (
    <Svg
      width={props.size || 18}
      height={props.size || 19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 15.5h6v-2.25c0-.825-.294-1.531-.881-2.119A2.889 2.889 0 009 10.25c-.825 0-1.531.294-2.119.881A2.889 2.889 0 006 13.25v2.25zM3 17v-1.5h1.5v-2.25c0-.762.178-1.478.534-2.147A4.18 4.18 0 016.525 9.5a4.18 4.18 0 01-1.49-1.603A4.498 4.498 0 014.5 5.75V3.5H3V2h12v1.5h-1.5v2.25c0 .763-.178 1.478-.534 2.147A4.179 4.179 0 0111.475 9.5a4.18 4.18 0 011.49 1.603c.357.669.535 1.385.535 2.147v2.25H15V17H3z"
        fill="#5F6368"
      />
    </Svg>
  );
}

export default TimerSvg;
