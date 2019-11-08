import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const IndexScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Redux Thunk"
        onPress={() => navigation.navigate('ReduxAsync')}
      />
      <Button
        title="Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="FrontEnd Screen"
        onPress={() => navigation.navigate('Front')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IndexScreen;
