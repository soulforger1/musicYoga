import React, {useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Progress1} from '../assets';

export const AnimatedProgressBar: React.FC<any> = ({isExpended}) => {
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
      <Progress1 />
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
