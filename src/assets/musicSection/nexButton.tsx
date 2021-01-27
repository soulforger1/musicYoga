import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const NextButton: React.FC<any> = (props) => {
  return (
    <Svg width="43" height="28" viewBox="0 0 43 28" fill="none" {...props}>
      <Path
        d="M23.5 16.5981C25.5 15.4434 25.5 12.5566 23.5 11.4019L11.5 4.47372C9.5 3.31902 7 4.7624 7 7.0718V20.9282C7 23.2376 9.5 24.681 11.5 23.5263L23.5 16.5981Z"
        fill="#FFE8BC"
      />
      <Path
        d="M38.5 16.5981C40.5 15.4434 40.5 12.5566 38.5 11.4019L26.5 4.47372C24.5 3.31902 22 4.7624 22 7.0718V20.9282C22 23.2376 24.5 24.681 26.5 23.5263L38.5 16.5981Z"
        fill="#FFE8BC"
      />
    </Svg>
  );
};
