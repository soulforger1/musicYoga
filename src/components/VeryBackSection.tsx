import React, { useEffect } from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import { CloudBottom, CloudLeft, CloudRight } from '../assets'
const {height, width} = Dimensions.get("window")

export const BackgroundSection = () => {
    const horizontalValue = new Animated.Value(0);
    const verticalValue = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(
            horizontalValue,
            {
                toValue: width - 100,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
    })

    return (
        <Animated.View>
            <Animated.View>
                <CloudBottom />
            </Animated.View>
            <Animated.View>
                <CloudLeft />
            </Animated.View>
            <Animated.View>
                <CloudRight />
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})