import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';
import * as textActions from '../app/actions/textActions';
import {connect} from 'react-redux';

const ReduxAsyncApp = ({text, isLoading, error, loadText, navigation}) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{text}</Text>
          <Button title="Load Text" onPress={() => loadText()} />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = ({text1}) => {
  const {text, isLoading, error} = text1;
  return {text, isLoading, error};
};

function mapDispatchToProps(dispatch) {
  return {
    loadText: () => dispatch(textActions.loadText()),
  };
}

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
)(ReduxAsyncApp);
