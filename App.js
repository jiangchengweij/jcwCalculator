/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import Screen from './src/components/Screen'
import Formulae from "./src/components/Formulae"
import Keyboard from "./src/components/Keyboard";

export default class App extends Component {
  render() {
    return (
      <View class="container">
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
