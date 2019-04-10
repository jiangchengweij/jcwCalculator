/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Screen />
        <Formulae />
        <Keyboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "flex-end",
    backgroundColor: '#000000',
  }
});
