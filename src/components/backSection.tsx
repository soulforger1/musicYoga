import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { BuildingLeft, BuildingSecLeft, Point, BuildingRight, CloudBottom, CloudLeft, CloudRight } from '../assets'

export const BackgroundSection = () => {



    return (
        <Animated.View>
            <Animated.View>
                <BuildingLeft />
            </Animated.View>
            <Animated.View>
                <BuildingSecLeft />
            </Animated.View>
            <Animated.View>
                <Point />
            </Animated.View>
            <Animated.View>
                <BuildingRight />
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})