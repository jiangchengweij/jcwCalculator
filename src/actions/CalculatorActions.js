
import CalculatorStore from '../stores/CalculatorStore' 

var CalculatorActions = {

    typeKey: function(keyType, keyValue) {
        if(keyType !== undefined && keyValue !== undefined) {
            CalculatorStore.processKey(keyType, keyValue)
        }
    },

    typeFormula: function(formual) {
        if(formual!=undefined) {
            CalculatorStore.processFormula(formual)
        }
    }
}

module.exports = CalculatorActions