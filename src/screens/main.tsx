import React from 'react';
import {View, StyleSheet} from 'react-native'
import {MusicSection} from '../components';

export const Main = () => {
    return (
        <View style={styles.main}>
            <MusicSection />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
})