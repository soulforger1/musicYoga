import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MusicSection} from '../components';

export const Main = () => {
  return (
    <View style={styles.main}>
      <MusicSection />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FCECCE'
  },
});
