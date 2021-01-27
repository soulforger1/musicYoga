import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Track} from '../assets/';

export const AnimatedTrack: React.FC<any> = ({isExpended, index}) => {
  const rotate = index.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '120deg'],
  });
  const trackSize = isExpended
    ? {height: 178, width: 178}
    : {height: 50, width: 50};
  const scale = index.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.6],
  });

  return (
    <Animated.View style={[styles.trackContainer, {transform: [{rotate}]}]}>
      <Animated.View
        style={[
          styles.whiteDot,
          {transform: [{scale}], opacity: isExpended ? 0 : 1},
        ]}></Animated.View>
      <Track height={trackSize.height} width={trackSize.width} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  trackContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteDot: {
    backgroundColor: 'white',
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    zIndex: 1,
  },
});
