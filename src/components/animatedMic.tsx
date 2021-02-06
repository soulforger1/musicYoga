import React, {useEffect, useRef} from 'react';
import Svg, {G, Mask, Path} from 'react-native-svg';
import {interpolate} from 'flubber';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
// const width = '370';
// M 5 275.001 C 5 270 3 253 13.0047 253.001 C 23.458 253.512 28.5572 276.023 46.9797 274.49 C 65.4022 272.957 78.3469 222.87 91.7903 214.182 C 105.234 205.493 118.863 213.16 126.146 198.338 C 137.276 175.688 122.132 25.427 122.132 -4.4991 C 122.132 -34.4252 122 -174 122 -176.999 M 122 -177 L 122 -177 C 122 -174.6667 122 -172.3333 122 -4 C 122 26 137 176 126 198 C 119 213 105 206 92 214 C 78 223 65 274 47 274.4 C 29 276 24 254 13 253 C 3 253 5 270 5 275
const startPath =
  'M 5.5 232 C 5.4274 229.486 2.7991 220.734 13.3546 220.991 C 23.9101 221.248 29.0591 232.571 47.6616 231.8 C 66.2641 231.029 79.3354 205.835 92.9102 201.465 C 106.485 197.094 120.247 200.951 127.601 193.495 C 138.84 182.102 123.549 106.519 123.549 91.4663 C 123.549 76.4132 123.549 4.6973 123.549 4.6973 C 123 23 123 77 123 92 C 124 107 139 182 127 194 C 120 201 106 197 93 201 C 79 206 66 231 47 232 C 29 232 24 221 13 221 C 3 221 5 230 5.5 232';
const endPath =
  'M 5.5 232 C 5.4274 229.486 2.7991 220.734 13.3546 220.991 C 23.9101 221.248 29.0591 232.571 47.6616 231.8 C 66.2641 231.029 79.3354 205.835 92.9102 201.465 C 106.485 197.094 120.247 200.951 127.601 193.495 C 138.84 182.102 123.549 106.519 123.549 91.4663 C 123.549 76.4132 123.549 4.6973 123.549 4.6973 C 123 23 123 77 123 92 C 124 107 139 182 127 194 C 120 201 106 197 93 201 C 79 206 66 231 47 232 C 29 232 24 221 13 221 C 3 221 5 230 5.5 232';

export const AnimatedMic: React.FC<any> = ({index}) => {
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
    <Svg width="167" height="540" viewBox="0 0 157 288" fill="none">
      <Path ref={pathRef} d={startPath} stroke="#FF5C5C" stroke-width="10" />
    </Svg>
  );
};
