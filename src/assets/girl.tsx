import React, { useEffect } from 'react';
import { Animated, View, Image, Easing } from 'react-native'
import { Shadow } from '../assets/shadow'
import { Headphones } from './headphones';

export const Girl: React.FC<any> = (props) => {
    const verticalValue = new Animated.Value(0);
    const scaleValue = new Animated.Value(0)
    const moveDown = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(
            verticalValue,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true
        }).start()
        Animated.timing(moveDown, {
            toValue: 1,
            delay: 2000,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [])

    const expand = scaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1.5]
    })

    const goDown = moveDown.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 2]
    })

    const translateY = verticalValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30]
    })

    return (
        <Animated.View style={[{ zIndex: 4, alignItems: 'center', marginTop: '40%' },
        {
            transform: [{
                translateY
            }]
        }
        ]}>
            <Animated.View style={{ flex: 1, alignItems: "center", marginBottom: '60%' }}>
                <Headphones />
            </Animated.View>
            <Animated.View style={[{
                alignItems: "center",
                marginTop: 5
            },
            {
                transform: [{
                    scale: expand
                }, {
                    translateY: goDown
                }]
            }
            ]}>
                <Shadow />
            </Animated.View>
        </Animated.View>
    )

}