import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FoodIconSvg(props: any) {
  return (
    <Svg
      width={props.size || 18}
      height={props.size || 19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.25 17v-6.863a3.093 3.093 0 01-1.603-1.05A2.808 2.808 0 013 7.25V2h1.5v5.25h.75V2h1.5v5.25h.75V2H9v5.25c0 .7-.216 1.313-.647 1.838a3.093 3.093 0 01-1.603 1.05V17h-1.5zm7.5 0v-6H10.5V5.75c0-1.037.366-1.922 1.097-2.653A3.614 3.614 0 0114.25 2v15h-1.5z"
        fill="#5F6368"
      />
    </Svg>
  );
}

export default FoodIconSvg;
