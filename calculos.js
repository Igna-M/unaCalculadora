let calculos = {
    sumar : function(n1, n2){
        return n1 + n2
    },
    restar : function(n1, n2){
        return n1 - n2
    },
    multiplicar : function(n1, n2){
        return n1 * n2
    },
    dividir : function(n1, n2){
        if (n2 == 0) {
            return "No se puede dividir por cero";
        } else {
            return n1 / n2
        }
    }
}

module.exports = calculos