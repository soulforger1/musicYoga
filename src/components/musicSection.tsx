import React from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {AnimatedControlBar, AnimatedProgressBar, AnimatedTrack} from './';

export const MusicSection: React.FC<any> = ({isExpended, expende, index}) => {
  const containerHeight = isExpended ? 485 : 66;

  return (
    <Pressable onPress={expende}>
      <Animated.View
        style={[
          styles.container,
          isExpended ? styles.column : styles.row,
          {height: containerHeight},
        ]}>
        <AnimatedTrack isExpended={isExpended} index={index} />
        <AnimatedProgressBar isExpended={isExpended} index={index} />
        <AnimatedControlBar isExpended={isExpended} index={index} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
