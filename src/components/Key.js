import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';
import CalculatorActions from '../actions/CalculatorActions';


class Key extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        CalculatorActions.typeKey(this.props.keyType, this.props.keyValue);
    }
    render() {
        return (
            <View style={styles.component}>
                <TouchableHighlight style={styles.button} onPress={this.handleClick}>
                    <Text style={styles.textKey}>
                        {this.props.keySyboml}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}
var {height, width} = Dimensions.get('window');
var keySize = width/4
var keyBtnSize = width/4-20
var keyBtnRadius = width/8
const styles = StyleSheet.create({
    component: {
        width: keySize,
        height: keySize,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: keyBtnSize,
        height: keyBtnSize,
        backgroundColor: "#ff0000",
        borderRadius: keyBtnRadius, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    textKey: {
        fontSize: 20,
    }
})
module.exports = Key