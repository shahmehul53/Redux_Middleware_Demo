import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import ReduxAsyncApp from './app/ReduxAsynApp';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CounterScreen from './app/CounterScreen';
import IndexScreen from './IndexScreen';
import FrontEndScreen from './app/FrontEndScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  ReduxAsync: ReduxAsyncApp,
  Counter: CounterScreen,
  Front: FrontEndScreen,
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
