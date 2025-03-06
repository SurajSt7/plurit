import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HeartFilled(props: any) {
  return (
    <Svg
      width={props.size || 21}
      height={props.size || 19}
      viewBox="0 0 21 19"
      fill={props.color || '#7E2CCF'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.25 18.998l-1.45-1.3c-1.683-1.516-3.075-2.825-4.175-3.925-1.1-1.1-1.975-2.087-2.625-2.962C1.35 9.936.896 9.13.637 8.398a6.725 6.725 0 01-.387-2.25c0-1.566.525-2.875 1.575-3.925C2.875 1.173 4.183.648 5.75.648c.867 0 1.692.184 2.475.55a5.93 5.93 0 012.025 1.55 5.93 5.93 0 012.025-1.55 5.769 5.769 0 012.475-.55c1.567 0 2.875.525 3.925 1.575 1.05 1.05 1.575 2.359 1.575 3.925 0 .767-.13 1.517-.387 2.25-.259.734-.713 1.538-1.363 2.413-.65.875-1.525 1.862-2.625 2.962s-2.492 2.409-4.175 3.925l-1.45 1.3z"
        fill={props.color || '#7E2CCF'}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default HeartFilled;
