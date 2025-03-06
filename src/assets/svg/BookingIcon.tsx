import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BookingIcon(props: any) {
  return (
    <Svg
      width={props.size || 19}
      height={props.size || 20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.7 16.35L5.15 12.8l1.45-1.45 2.1 2.1 4.2-4.2 1.45 1.45-5.65 5.65zM2.75 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 01.75 18V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 012.75 2h1V0h2v2h8V0h2v2h1c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0116.75 20h-14zm0-2h14V8h-14v10zm0-12h14V4h-14v2z"
        fill={props.color || '#5F6368'}
      />
    </Svg>
  );
}

export default BookingIcon;
