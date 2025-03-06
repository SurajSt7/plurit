import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function UserSvg(props: any) {
  return (
    <Svg
      width={props.size || 12}
      height={props.size || 13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6 6.5a2.889 2.889 0 01-2.119-.881A2.889 2.889 0 013 3.5c0-.825.294-1.531.881-2.119A2.889 2.889 0 016 .5c.825 0 1.531.294 2.119.881C8.706 1.97 9 2.675 9 3.5c0 .825-.294 1.531-.881 2.119A2.889 2.889 0 016 6.5zm-6 6v-2.1c0-.425.11-.816.328-1.172.219-.356.51-.628.872-.816a11.135 11.135 0 012.362-.871 10.319 10.319 0 014.875 0c.8.193 1.588.484 2.363.871.362.188.653.46.872.816.219.356.328.747.328 1.172v2.1H0z"
        fill="#5F6368"
      />
    </Svg>
  );
}

export default UserSvg;
