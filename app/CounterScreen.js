import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

const CounterScreen = ({count, increaseCounter, decreaseCounter}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: 200,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => increaseCounter()}>
          <Text style={{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{count}</Text>
        <TouchableOpacity onPress={() => decreaseCounter()}>
          <Text style={{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = ({counter1}) => {
  const {count} = counter1;
  return {
    count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterScreen);
