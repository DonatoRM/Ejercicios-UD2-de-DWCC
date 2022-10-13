const exercise4 = () => {
    const myBox = document.getElementById('result');
    let myResult = '<p>';
    let largerNumber;
    let ok = false;
    do {
        largerNumber = prompt('Introduzca un Valor Numérico Entero');
        largerNumber = Number(largerNumber);
        if (!isNaN(largerNumber)) {
            if (largerNumber % 1 == 0) {
                if (largerNumber >= 0) {
                    ok = true;
                } else {
                    alert('El Valor Entero tiene que ser Mayor o Igual a Cero');
                    largerNumber = undefined;
                }
            } else {
                alert('El valor introducido es un Número Real');
                largerNumber = undefined;
            }
        } else {
            alert('El valor introducido no es un Valor Numérico');
            largerNumber = undefined;
        }
    } while (!ok);
    for (let position = 0; position <= largerNumber; position++) {
        myResult += position;
        if (position != largerNumber) {
            myResult += ', ';
        }
    }
    myResult += '</p>'
    myBox.innerHTML = myResult;
}