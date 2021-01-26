import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BackButton: React.FC<any> = (props) => {
  return (
    <Svg width="43" height="28" viewBox="0 0 43 28" fill="none" {...props}>
      <Path
        d="M19.5 16.5981C17.5 15.4434 17.5 12.5566 19.5 11.4019L31.5 4.47372C33.5 3.31902 36 4.7624 36 7.0718V20.9282C36 23.2376 33.5 24.681 31.5 23.5263L19.5 16.5981Z"
        fill="#FFE8BC"
      />
      <Path
        d="M4.5 16.5981C2.5 15.4434 2.5 12.5566 4.5 11.4019L16.5 4.47372C18.5 3.31902 21 4.7624 21 7.0718V20.9282C21 23.2376 18.5 24.681 16.5 23.5263L4.5 16.5981Z"
        fill="#FFE8BC"
      />
    </Svg>
  );
};
