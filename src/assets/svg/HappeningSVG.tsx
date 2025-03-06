import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Happening(props: any) {
  return (
    <Svg
      width={props.size || 180}
      height={props.size || 85}
      viewBox="0 0 180 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M154.5 22.75v-3.5h7v3.5h-7zM156.6 35l-5.6-4.2 2.1-2.8 5.6 4.2-2.1 2.8zm-3.5-21l-2.1-2.8 5.6-4.2 2.1 2.8-5.6 4.2zm-21.35 19.25v-7H130c-.963 0-1.786-.343-2.472-1.028-.685-.686-1.028-1.51-1.028-2.472v-3.5c0-.962.343-1.787 1.028-2.472.686-.685 1.509-1.028 2.472-1.028h7l8.75-5.25v21L137 26.25h-1.75v7h-3.5zm15.75-6.387V15.136a7.98 7.98 0 011.903 2.56c.481 1.006.722 2.107.722 3.303 0 1.196-.241 2.297-.722 3.303a7.98 7.98 0 01-1.903 2.56z"
        fill={props.color || '#7E2CCF'}
      />
      <Path
        d="M1.758 64V33.238h6.196V45.5h1.714v6.064H7.954V64H1.758zm10.327-12.437V45.5h1.714v-12.26h6.196V64H13.8V51.563h-1.714zM22.852 58.2v-2.241c.029-1.875.82-3.325 2.373-4.35.38-.206 1.919-.777 4.614-1.714 3.135-1.055 4.702-1.993 4.702-2.813v-1.01c-.03-1.055-.674-1.627-1.934-1.715v-5.405c2.198 0 4.043.747 5.538 2.241 1.347 1.377 2.021 2.871 2.021 4.483v11.47c.03.878.44 1.347 1.23 1.406V64c-1.787 0-3.222-.469-4.306-1.406-1.143.908-2.622 1.377-4.439 1.406v-5.405c.235 0 .454-.03.66-.088.82-.234 1.23-.791 1.23-1.67v-3.604c-.791.47-2.33 1.026-4.614 1.67-.938.235-1.48.396-1.626.484-.352.175-.542.512-.571 1.01v.616c0 .175.014.351.043.527.176.703 1.011 1.055 2.505 1.055V64c-1.963 0-3.633-.498-5.01-1.494-1.61-1.172-2.416-2.608-2.416-4.307zm.307-12.964c.03-1.494.645-2.856 1.846-4.087 1.523-1.464 3.296-2.197 5.317-2.197v5.405c-1.347.03-2.036.967-2.065 2.813l-5.098-1.934zM52.603 64v-5.713h1.494c.966-.059 1.552-.454 1.758-1.186V45.85c0-.381-.235-.703-.704-.967a2.519 2.519 0 00-1.054-.22h-1.495v-5.713h1.495c2.754 0 4.892 1.172 6.416 3.516.761 1.201 1.142 2.3 1.142 3.296v11.425c0 1.348-.586 2.725-1.758 4.131-1.552 1.758-3.486 2.652-5.8 2.681h-1.495zm-8.394 8.745V38.951h6.196v33.794H44.21zM73.74 64v-5.713h1.494c.967-.059 1.553-.454 1.758-1.186V45.85c0-.381-.234-.703-.703-.967a2.519 2.519 0 00-1.055-.22H73.74v-5.713h1.494c2.754 0 4.893 1.172 6.416 3.516.762 1.201 1.143 2.3 1.143 3.296v11.425c0 1.348-.586 2.725-1.758 4.131-1.553 1.758-3.486 2.652-5.8 2.681H73.74zm-8.393 8.745V38.951h6.196v33.794h-6.196zM86.44 57.188V45.675c.03-1.436.689-2.842 1.978-4.219 1.582-1.64 3.516-2.476 5.8-2.505v5.537c-.849 0-1.435.367-1.757 1.099a1.094 1.094 0 00-.132.483v2.198h6.548v-2.154c-.03-1.084-.791-1.626-2.285-1.626v-5.537c2.139 0 4.013.733 5.625 2.197 1.406 1.29 2.124 2.784 2.153 4.483v8.306H92.33v3.252c.204.85.849 1.318 1.933 1.406V64c-2.754 0-4.937-1.128-6.548-3.384-.85-1.201-1.275-2.343-1.275-3.428zM96.592 64v-5.361c1.582-.03 2.593-.777 3.032-2.242l4.79 1.802c-.439 1.875-1.553 3.384-3.34 4.527A8.378 8.378 0 0196.592 64zm11.162 0V45.763c0-1.465.659-2.9 1.977-4.307 1.612-1.67 3.619-2.52 6.021-2.549v5.845c-1.231.146-1.904.718-2.022 1.714V64h-5.976zm10.019-19.248v-5.845c2.842 0 5.083 1.128 6.724 3.384.879 1.23 1.318 2.388 1.318 3.472V64h-5.976V46.466c0-.967-.542-1.524-1.626-1.67a2.24 2.24 0 00-.44-.044zm11.91-9.36c0-1.202.542-2.11 1.626-2.725a3.07 3.07 0 011.582-.44c1.23 0 2.153.543 2.768 1.627.264.498.396 1.01.396 1.538 0 1.23-.542 2.153-1.626 2.768a3.25 3.25 0 01-1.538.396c-1.26 0-2.198-.557-2.813-1.67a2.997 2.997 0 01-.395-1.494zM129.99 64V40.27h5.889V64h-5.889zm9.932 0V45.763c0-1.465.659-2.9 1.977-4.307 1.612-1.67 3.619-2.52 6.021-2.549v5.845c-1.231.146-1.904.718-2.022 1.714V64h-5.976zm10.019-19.248v-5.845c2.842 0 5.083 1.128 6.724 3.384.879 1.23 1.318 2.388 1.318 3.472V64h-5.976V46.466c0-.967-.542-1.524-1.626-1.67a2.24 2.24 0 00-.44-.044zm10.591 27.598l1.363-5.406h8.701c.937-.029 1.538-.454 1.801-1.274a.326.326 0 00.044-.132v-2.065c-.615.117-1.274.175-1.977.175V58.2c1.26-.058 1.919-.542 1.977-1.45V45.543c0-.41-.263-.776-.791-1.099a2.31 2.31 0 00-1.186-.307v-5.493c.703 0 1.362.087 1.977.263v-.263h5.625v26.894c0 1.29-.571 2.622-1.713 4-1.524 1.845-3.414 2.782-5.669 2.812h-10.152zm.44-15.47V45.324c.029-1.406.659-2.783 1.889-4.13 1.524-1.67 3.428-2.52 5.713-2.55v5.494c-1.054 0-1.728.38-2.021 1.142a.687.687 0 00-.044.176v11.382c0 .674.425 1.098 1.274 1.274.235.059.498.088.791.088v5.45c-2.754 0-4.892-1.158-6.416-3.472-.791-1.172-1.186-2.27-1.186-3.296z"
        fill={props.color || '#7E2CCF'}
      />
    </Svg>
  );
}

export default Happening;
