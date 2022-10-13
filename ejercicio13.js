const exercise13 = () => {
    let box = document.getElementById('result');
    let arithmeticMean = 0;
    let numberEntered;
    let sum = 0;
    let accountant = 0;
    let numberPhrase = '';
    do {
        numberEntered = prompt('Inserte un número entero positivo (* para finalizar');
        if (numberEntered != '*') {
            numberEntered = Number(numberEntered);
            if (!isNaN(numberEntered) && numberEntered % 1 == 0 && numberEntered >= 0) {
                sum += numberEntered;
                accountant++;
                numberPhrase = numberPhrase + `<p>${accountant}.º Numero seleccionado: ${numberEntered}</p>`;
            } else {
                alert('Valor introducido incorrecto');
            }
        }
    } while (numberEntered != '*');
    arithmeticMean = parseFloat(sum) / parseFloat(accountant);
    box.innerHTML = numberPhrase + `<p>Media de todos: ${arithmeticMean}`;
}