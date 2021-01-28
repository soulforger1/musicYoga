import React, {useState} from 'react';
import {Animated, LayoutAnimation} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

export const Progress1: React.FC<any> = ({index}) => {
  const rect1 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [25, 17],
  });
  const fromTop1 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [3.7, 7.7],
  });
  const rect2 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [14, 29],
  });
  const fromTop2 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [9, 1.7],
  });
  const rect3 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [6, 21],
  });
  const fromTop3 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [13.5, 5.7],
  });
  const rect4 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [21, 7],
  });
  const fromTop4 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [5.7, 12.7],
  });
  const rect5 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8.5, 17],
  });
  const fromTop5 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 9.7],
  });
  const rect6 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [14, 27],
  });
  const fromTop6 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8.2, 2.7],
  });
  const rect7 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [23, 9],
  });
  const fromTop7 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [4.7, 11.7],
  });
  const rect8 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 16],
  });
  const fromTop8 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8.2, 8.2],
  });
  const rect9 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 10],
  });
  const fromTop9 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [11.2, 11.2],
  });
  const rect10 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [6, 25],
  });
  const fromTop10 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [13.5, 3.7],
  });
  const rect11 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [19, 17],
  });
  const fromTop11 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [6.7, 7.7],
  });
  const rect12 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [27, 9],
  });
  const fromTop12 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [2.7, 11.7],
  });
  const rect13 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 21],
  });
  const fromTop13 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8.2, 5.7],
  });
  const rect14 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 17],
  });
  const fromTop14 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [11.2, 7.7],
  });
  const rect15 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [21, 11],
  });
  const fromTop15 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [5.7, 10.7],
  });
  const rect16 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 7],
  });
  const fromTop16 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [10.2, 12.7],
  });
  const rect17 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 21],
  });
  const fromTop17 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [12.2, 5.7],
  });
  const rect18 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [25, 15],
  });
  const fromTop18 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [3.7, 8.7],
  });
  const rect19 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 25],
  });
  const fromTop19 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [12.2, 3.7],
  });
  const rect20 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 13],
  });
  const fromTop20 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [6.2, 9.7],
  });
  const rect21 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 23],
  });
  const fromTop21 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [12.2, 4.7],
  });
  const rect22 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [19, 13],
  });
  const fromTop22 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [6.7, 9.7],
  });
  const rect23 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 21],
  });
  const fromTop23 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [12.2, 5.7],
  });
  const rect24 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [6, 11],
  });
  const fromTop24 = index.interpolate({
    inputRange: [0, 1],
    outputRange: [13.5, 10.7],
  });
  const opacity = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1],
  });
  // const color = '#132D84';

  return (
    <AnimatedSvg width="193" height="34" viewBox="0 0 193 34" fill="none">
      <AnimatedRect
        x="14.0028"
        y={fromTop1}
        width="3"
        height={rect1}
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="21.0028"
        y={fromTop2}
        width="3"
        height={rect2}
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="28.0028"
        y={fromTop3}
        width="3"
        height={rect3}
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="35.0028"
        y={fromTop4}
        width="3"
        height={rect4}
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="42.0028"
        y={fromTop6}
        width="3"
        height={rect6}
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="49.0028"
        y={fromTop5}
        width="3"
        height={rect5}
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="56.0028"
        y={fromTop6}
        width="3"
        height={rect6}
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="63.0029"
        y={fromTop7}
        width="3"
        height={rect7}
        rx="1.5"
        fill="#132D84"
        fillOpacity={opacity}
      />
      <AnimatedRect
        x="70.0027"
        y={fromTop8}
        width="3"
        height={rect8}
        rx="1.5"
        fill="#132D84"
        fillOpacity={opacity}
      />
      <AnimatedRect
        x="77.0027"
        y={fromTop9}
        width="3"
        height={rect9}
        rx="1.5"
        fill="#132D84"
        fillOpacity={opacity}
      />
      <AnimatedRect
        x="84.0027"
        y={fromTop10}
        width="3"
        height={rect10}
        rx="1.5"
        fill="#132D84"
        fillOpacity={opacity}
      />
      <AnimatedRect
        x="91.0027"
        y={fromTop11}
        width="3"
        height={rect11}
        rx="1.5"
        fill="#132D84"
        fillOpacity={opacity}
      />
      <AnimatedRect
        x="98.0027"
        y={fromTop12}
        width="3"
        height={rect12}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="105.003"
        y={fromTop13}
        width="3"
        height={rect13}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="112.003"
        y={fromTop14}
        width="3"
        height={rect14}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="119.003"
        y={fromTop15}
        width="3"
        height={rect15}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="126.003"
        y={fromTop16}
        width="3"
        height={rect16}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="133.003"
        y={fromTop17}
        width="3"
        height={rect17}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="140.003"
        y={fromTop18}
        width="3"
        height={rect18}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="147.003"
        y={fromTop19}
        width="3"
        height={rect19}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="154.003"
        y={fromTop20}
        width="3"
        height={rect20}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="161.003"
        y={fromTop21}
        width="3"
        height={rect21}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="168.003"
        y={fromTop22}
        width="3"
        height={rect22}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="175.003"
        y={fromTop23}
        width="3"
        height={rect23}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="182.003"
        y={fromTop24}
        width="3"
        height={rect24}
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="189.003"
        y="13.2809"
        width="3"
        height="6.6392"
        rx="1.5"
        fill="#DDE1F0"
      />
      <AnimatedRect
        x="7.00281"
        y="8.5387"
        width="3"
        height="15.1753"
        rx="1.5"
        fill="#132D84"
      />
      <AnimatedRect
        x="0.00280762"
        y="13.2809"
        width="3"
        height="6.6392"
        rx="1.5"
        fill="#132D84"
      />
    </AnimatedSvg>
  );
};
