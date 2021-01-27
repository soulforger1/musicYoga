import React, {useState} from 'react';
import {Animated, LayoutAnimation, Pressable, StyleSheet} from 'react-native';
import {Pause} from '../assets/';
import {AnimatedControlBar, AnimatedProgressBar, AnimatedTrack} from './';

export const MusicSection: React.FC<any> = () => {
  const [isExpended, setIsExpended] = useState(false);
  const index = new Animated.Value(0);
  const containerHeight = isExpended ? 485 : 66;

  const expende = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(1100));
    setIsExpended(!isExpended);
  };

  const movingInfinity = () =>
    Animated.timing(index, {
      toValue: 1,
      duration: 1100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(index, {
        toValue: 0,
        duration: 1100,
        useNativeDriver: true,
      }).start(() => movingInfinity());
    });

  if (!isExpended) movingInfinity();

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
        <AnimatedControlBar isExpended={isExpended} />
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
