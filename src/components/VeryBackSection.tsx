import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {CloudBottom, CloudLeft, CloudRight} from '../assets';

export const BackgroundSection: React.FC<any> = ({index}) => {
  const translateXLeft = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 45],
  });

  const translateYLeft = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5],
  });

  const translateXBottom = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 15],
  });

  const translateYBottom = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const translateXRight = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -25],
  });

  const translateYRight = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <Animated.View>
      <Animated.View
        style={[
          styles.cloudright,
          {
            transform: [
              {
                translateX: translateXRight,
              },
              {
                translateY: translateYRight,
              },
            ],
          },
        ]}>
        <CloudRight />
      </Animated.View>
      <Animated.View
        style={[
          styles.cloudleft,
          {
            transform: [
              {
                translateX: translateXLeft,
              },
              {
                translateY: translateYLeft,
              },
            ],
          },
        ]}>
        <CloudLeft />
      </Animated.View>
      <Animated.View
        style={[
          styles.cloudbottom,
          {
            transform: [
              {
                translateX: translateXBottom,
              },
              {
                translateY: translateYBottom,
              },
            ],
          },
        ]}>
        <CloudBottom />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cloudright: {
    top: 40,
    left: 295,
  },
  cloudleft: {
    top: 30,
    left: 5,
  },
  cloudbottom: {
    top: 92,
    left: 220,
  },
});
