import React, {useEffect, useRef} from 'react';
import Svg, {Path} from 'react-native-svg';
import {interpolate} from 'flubber';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
// const width = '370';

const startPath =
  'M 84.337 347.152 C 57.5478 304.864 21.937 297.749 0.0014 238.73 V 958 L 374 958 V 154.389 C 374.399 154.49 374.974 154.591 374.689 154.691 C 360.827 159.551 351.268 162.776 342.705 187.55 C 325.714 236.71 357.198 299.338 328.212 339.07 C 306.427 368.932 278.409 380.651 268.333 423.393 C 261.017 454.43 260.837 541.096 189.986 543.79 C 119.135 546.484 127.942 415.984 84.337 347.152 Z';
const endPath =
  'M 84.3349 383.104 C 57.5457 352.843 21.9348 347.751 -0.0008 305.519 V 884 H 374 V 245.165 C 374.397 245.238 374.972 245.31 374.687 245.382 C 360.825 248.859 351.266 251.167 342.703 268.895 C 325.712 304.073 357.195 348.889 328.21 377.32 C 306.425 398.689 278.406 407.075 268.331 437.661 C 261.015 459.871 260.835 521.887 189.984 523.815 C 119.133 525.742 127.94 432.359 84.3349 383.104 Z';

export const AnimatedBC: React.FC<any> = ({index}) => {
  const pathInterpolate = interpolate(startPath, endPath, {
    maxSegmentLength: 1,
  });
  const pathRef = useRef<any>(null);
  useEffect(() => {
    index.addListener(({value}: any) => {
      const path = pathInterpolate(value);
      pathRef.current.setNativeProps({
        d: path,
      });
    });
  }, [pathRef.current, pathInterpolate]);

  return (
    <Svg
      width={width}
      height={height * 20}
      viewBox="0 0 375 544"
      fill="none"
      style={{marginBottom: 250}}>
      <Path
        ref={pathRef}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d={startPath}
        fill="#FFEDCB"
      />
    </Svg>
  );
};
