const exercise12 = () => {
    const box = document.getElementById('result');
    let accountant = 0;
    let numericInput;
    let sum = 0;
    let ok = false;
    let arithmeticMean;
    do {
        numericInput = prompt('Introduzca un Número entero positivo (* para finalizar)');
        if (numericInput == '*') {
            ok = true;
        } else {
            numericInput = Number(numericInput);
            if (!isNaN(numericInput) && numericInput % 1 == 0 && numericInput >= 0) {
                accountant++;
                sum += numericInput;
            } else {
                alert('Valor introducido incorrecto');
            }
        }
    } while (!ok);
    arithmeticMean = parseFloat(sum) / parseFloat(accountant);
    box.innerHTML = `<p>La media aritmética es ${arithmeticMean}`;
}