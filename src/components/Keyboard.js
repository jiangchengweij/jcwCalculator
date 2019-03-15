import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Keyboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View className="row">
                    <Text>7</Text>
                    <Text>8</Text>
                    <Text>9</Text>
                    <Text>*</Text>
                </View>
                <View>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>+</Text>                   
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {

    },
    row: {
        display: flex,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
})