import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Heading from './components/Heading';
import Hero from './components/Hero';

const FrontEndScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Heading />
      <Hero />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 8,
  },
});

export default FrontEndScreen;
