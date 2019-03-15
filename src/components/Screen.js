import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';

export default class Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Screen</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {

    }
})