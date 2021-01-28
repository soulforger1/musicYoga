import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Progress1} from '../assets';

const startPath = `M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`;
const endPath = `M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`;

export const AnimatedProgressBar: React.FC<any> = ({isExpended, index}) => {
  const songNameSize = new Animated.Value(isExpended ? 1 : 24);
  const autherNameSize = songNameSize.interpolate({
    inputRange: [1, 24],
    outputRange: [1, 22],
  });
  const titlesHeight = songNameSize.interpolate({
    inputRange: [1, 24],
    outputRange: [0, 62],
  });

  useEffect(() => {
    Animated.timing(songNameSize, {
      toValue: isExpended ? 24 : 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [isExpended]);

  return (
    <View>
      <Animated.View
        style={[
          styles.titleContainer,
          {
            opacity: isExpended ? 1 : 0,
            marginBottom: isExpended ? 30 : 0,
            height: titlesHeight,
          },
        ]}>
        <Animated.Text style={[styles.name, {fontSize: songNameSize}]}>
          Peaceful Soul
        </Animated.Text>
        <Animated.Text style={[styles.name, {fontSize: autherNameSize}]}>
          Malika
        </Animated.Text>
      </Animated.View>
      <Progress1 index={index} />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: 'rgba(19, 45, 132, 1)',
  },
  titleContainer: {
    alignItems: 'center',
  },
});
