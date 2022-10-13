const exercise7 = () => {
    const box1 = document.getElementById('result1');
    const box2 = document.getElementById('result2');
    const box3 = document.getElementById('result3');
    let expression;
    let ok = false;
    let inputValue;
    let sum = 0;
    let arithmeticMean;
    do {
        inputValue = Number(prompt('Introduzca un Número Natural Positivo'));
        if (!isNaN(inputValue)) {
            if (inputValue % 1 == 0) {
                if (inputValue > 0) {
                    ok = true;
                } else {
                    alert('El valor introducido No es Positivo');
                    inputValue = undefined;
                }
            } else {
                alert('El valor introducido es un Valor Real');
                inputValue = undefined;
            }
        } else {
            alert('El valor introducido no es un Valor Numérico');
            inputValue = undefined;
        }
    } while (!ok);
    expression = '<p>';
    for (let i = 1; i <= inputValue; i++) {
        expression += i;
        sum += i;
        if (i != inputValue) {
            expression += ', ';
        }
    }
    box1.innerHTML = expression + '</b>';
    expression = '<p>';
    box2.innerHTML = expression + `La suma de los ${inputValue} primeros Números Naturales es ${sum}</b>`;
    expression = `La media de los ${inputValue} primeros Números Naturales es `;
    sum = parseFloat(sum);
    inputValue = parseFloat(inputValue);
    arithmeticMean = sum / inputValue;
    box3.innerHTML = expression + arithmeticMean + '</p>';
}