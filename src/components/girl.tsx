import React from 'react';
import {Animated} from 'react-native';
import {Shadow} from '../assets/shadow';
import {Headphones} from '../assets/headphones';

export const Girl: React.FC<any> = ({index, isExpended}) => {
  const expand = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1.5],
  });

  const goDown = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });

  const translateY = index.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <Animated.View
      style={[
        {
          zIndex: 4,
          alignItems: 'center',
          marginTop: '90%',
        },
        {
          transform: [
            {
              translateY,
            },
          ],
        },
      ]}>
      <Animated.View
        style={{flex: 1, alignItems: 'center', marginBottom: '40%'}}>
        <Headphones />
      </Animated.View>
      <Animated.View
        style={[
          {
            alignItems: 'center',
            marginTop: 30,
          },
          {
            transform: [
              {
                scale: expand,
              },
              {
                translateY: goDown,
              },
            ],
          },
        ]}>
        <Shadow />
      </Animated.View>
      <Animated.View
        style={[
          {
            alignItems: 'center',
            marginTop: 5,
          },
          {
            transform: [
              {
                scale: isExpended ? 1.4 : 0,
              },
            ],
          },
        ]}>
        <Shadow />
      </Animated.View>
    </Animated.View>
  );
};
