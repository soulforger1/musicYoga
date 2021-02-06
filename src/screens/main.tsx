import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  LayoutAnimation,
} from 'react-native';
import {
  MusicSection,
  BackSection,
  BackgroundSection,
  Girl,
  AnimatedBC,
  AnimatedMic,
} from '../components';

export const Main = () => {
  const [isExpended, setIsExpended] = useState(false);
  const moveIndex = new Animated.Value(isExpended ? 0 : -350);
  const index = new Animated.Value(0);

  const expende = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(1100));
    setIsExpended(!isExpended);
  };

  const bottom = index.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, 0],
  });

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

  useEffect(() => {
    if (isExpended) {
      Animated.timing(moveIndex, {
        toValue: -350,
        duration: 1100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(moveIndex, {
        toValue: 0,
        duration: 1100,
        useNativeDriver: true,
      }).start();
    }
  }, [isExpended]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animateContainer,
          {
            transform: [
              {
                translateY: moveIndex,
              },
            ],
          },
        ]}>
        <View style={styles.textcontainer}>
          <Text style={{color: '#E8990D', fontSize: 30, textAlign: 'center'}}>
            #Staysafe
          </Text>
          <Text
            style={{
              color: '#132D84',
              fontSize: 35,
              textAlign: 'center',
              marginTop: 8,
            }}>
            The Journey
          </Text>
          <Text style={{color: '#132D84', fontSize: 35, textAlign: 'center'}}>
            Begins Inside
          </Text>
        </View>
        <View style={{position: 'absolute'}}>
          <BackgroundSection index={index} />
          <BackSection index={index} />
        </View>
        <AnimatedBC index={index} />
        <View style={{position: 'absolute', width: '100%', zIndex: 7}}>
          <Girl index={index} isExpended={isExpended} />
        </View>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          zIndex: 8,
          transform: [
            {translateY: bottom},
            {scale: isExpended ? 0.8 : 1},
            {translateY: isExpended ? -480 : 0},
            {translateX: isExpended ? 10 : 0},
          ],
          bottom: -89,
          left: 48,
        }}>
        <AnimatedMic index={index} />
      </Animated.View>
      <View style={styles.main}>
        <MusicSection isExpended={isExpended} expende={expende} index={index} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFEDCB',
    zIndex: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFE2AB',
    width: '100%',
  },
  textcontainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    top: 140,
    width: '50%',
    marginLeft: '20%',
    position: 'absolute',
    zIndex: 5,
  },
  animateContainer: {
    height: 800,
    justifyContent: 'center',
    backgroundColor: '#FFE2AB',
    width: '100%',
    zIndex: 5,
  },
});
