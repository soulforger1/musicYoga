import React from 'react';
import Svg, {Rect} from 'react-native-svg';

export const Pause: React.FC<any> = (props) => {
  return (
    <Svg width="51" height="51" viewBox="0 0 51 51" fill="none" {...props}>
      <Rect
        x="0.00268555"
        y="0.00146484"
        width="50"
        height="50"
        rx="25"
        fill="#F8C56A"
      />
      <Rect x="17.0027" y="15.0015" width="6" height="20" rx="2" fill="white" />
      <Rect x="27.0026" y="15.0016" width="6" height="20" rx="2" fill="white" />
    </Svg>
  );
};
