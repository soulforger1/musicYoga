import React, { useEffect } from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import { CloudBottom, CloudLeft, CloudRight } from '../assets'
const { height, width } = Dimensions.get("window")

export const BackgroundSection = () => {
    const rightValue = new Animated.Value(0);
    const leftValue = new Animated.Value(0);
    const bottomValue = new Animated.Value(0);

    const translateXLeft = leftValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 45]
    })

    const translateYLeft = leftValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 5]
    })

    const translateXBottom = bottomValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 15]
    })

    const translateYBottom = bottomValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10]
    })

    const translateXRight = rightValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -25]
    })

    const translateYRight = rightValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -10]
    })

    useEffect(() => {
        Animated.timing(rightValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
        Animated.timing(leftValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
        Animated.timing(bottomValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    })

    return (
        <Animated.View>
            <Animated.View style={[styles.cloudright,
            {
                transform: [{
                    translateX: translateXRight
                }, {
                    translateY: translateYRight
                }]
            }
            ]}>
                <CloudRight />
            </Animated.View>
            <Animated.View style={[styles.cloudleft,
            {
                transform: [{
                    translateX: translateXLeft
                }, {
                    translateY: translateYLeft
                }]
            }
            ]}>
                <CloudLeft />
            </Animated.View>
            <Animated.View style={[styles.cloudbottom,
            {
                transform: [{
                    translateX: translateXBottom
                }, {
                    translateY: translateYBottom
                }]
            }
            ]}>
                <CloudBottom />
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    cloudright: {
        top: 40,
        left: 295
    },
    cloudleft: {
        top: 30,
        left: 5
    },
    cloudbottom: {
        top: 92,
        left: 220
    }
})