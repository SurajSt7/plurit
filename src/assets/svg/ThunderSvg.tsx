import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ThunderSvg(props: any) {
  return (
    <Svg
      width={props.size || 14}
      height={props.size || 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.154 10.617L9.173 7H6.84l.422-3.31-2.697 3.893h2.027l-.438 3.034zm-1.487 2.216L5.25 8.75H2.333l5.25-7.583H8.75l-.583 4.666h3.5l-5.834 7H4.667z"
        fill="#FF935B"
      />
    </Svg>
  );
}

export default ThunderSvg;
