import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Play(props: any) {
  return (
    <Svg
      width={props.size || 12}
      height={props.size || 12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.542 8.625L8.625 6 4.542 3.375v5.25zM6 11.833a5.68 5.68 0 01-2.275-.46 5.89 5.89 0 01-1.852-1.246A5.891 5.891 0 01.626 8.275 5.68 5.68 0 01.166 6c0-.807.154-1.565.46-2.275a5.89 5.89 0 011.247-1.852A5.89 5.89 0 013.725.626 5.68 5.68 0 016 .166a5.68 5.68 0 012.275.46c.71.306 1.327.722 1.852 1.247a5.89 5.89 0 011.247 1.852c.306.71.46 1.468.46 2.275a5.68 5.68 0 01-.46 2.275 5.89 5.89 0 01-1.247 1.852 5.89 5.89 0 01-1.852 1.247 5.68 5.68 0 01-2.275.46zm0-1.166c1.303 0 2.406-.452 3.31-1.357.905-.904 1.357-2.007 1.357-3.31s-.452-2.406-1.357-3.31C8.406 1.785 7.303 1.333 6 1.333s-2.406.452-3.31 1.357C1.786 3.594 1.333 4.697 1.333 6s.453 2.406 1.357 3.31c.904.905 2.007 1.357 3.31 1.357z"
        fill="#7E2CCF"
      />
    </Svg>
  );
}

export default Play;
