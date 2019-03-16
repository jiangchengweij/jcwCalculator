import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Key from './Key';

export default class Keyboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Key style={styles.key} keyType="7" keyValue="number" keySyboml="7"></Key>
                    <Key style={styles.key} keyType="8" keyValue="number" keySyboml="8"></Key>
                    <Key style={styles.key} keyType="9" keyValue="number" keySyboml="9"></Key>
                    <Key style={styles.key} keyType="*" keyValue="number" keySyboml="*"></Key>
                </View>
                <View style={styles.row}>
                    <Key style={styles.key} keyType="4" keyValue="number" keySyboml="4"></Key>
                    <Key style={styles.key} keyType="5" keyValue="number" keySyboml="5"></Key>
                    <Key style={styles.key} keyType="6" keyValue="number" keySyboml="6"></Key>
                    <Key style={styles.key} keyType="+" keyValue="number" keySyboml="+"></Key>                  
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    key: {
        flex: 1,
        fontSize: 20,
        backgroundColor: "#ff0000",
    }
})