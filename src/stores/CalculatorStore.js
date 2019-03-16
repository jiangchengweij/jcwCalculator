

var _displayScreen = '0'
var CalculatorStore  = {
    getDisplayScreen: function() {
        return _displayScreen
    },
    processKey: function(keyType, keyValue) {
        console.log(keyType+";"+keyValue)
    },
    processFormula: function(formual) {
        console.log(formual)
    }
}

module.exports = CalculatorStore