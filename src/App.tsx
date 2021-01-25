import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Main} from './screens/'

const App = () => {
  return <View style={styles.main}>
    <Main />
  </View>;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
