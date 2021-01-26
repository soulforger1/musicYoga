import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {BackButton, NextButton, Pause} from '../assets';

export const AnimatedControlBar: React.FC<any> = ({isExpended}) => {
  const changes = {
    containerWidth: isExpended ? 'auto' : 50,
    controlersWidth: isExpended ? 43 : 0,
    controlersTranslate: isExpended ? 0 : 48,
  };

  return (
    <Animated.View style={[styles.controlBar, {width: changes.containerWidth}]}>
      <Animated.View
        style={[
          styles.controlers,
          {
            transform: [{translateX: changes.controlersTranslate}],
            width: changes.controlersWidth,
          },
        ]}>
        <BackButton />
      </Animated.View>
      <Pause style={{zIndex: 3}} />
      <Animated.View
        style={[
          styles.controlers,
          {
            transform: [{translateX: changes.controlersTranslate * -1}],
            width: changes.controlersWidth,
          },
        ]}>
        <NextButton />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  controlBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlers: {
    zIndex: 1,
    overflow: 'hidden',
  },
});
