const exercise5 = () => {
    const myBox = document.getElementById('result');
    let correct = false;
    let largestNumber;
    let sum = 0;
    do {
        largestNumber = Number(prompt('Introduzca un Número Natural'));
        if (!isNaN(largestNumber)) {
            if (largestNumber % 1 == 0) {
                if (largestNumber >= 0) {
                    correct = true;
                } else {
                    alert('El Valor introducido es Negativo')
                    largestNumber = undefined;
                }
            } else {
                alert('El Valor introducido es Real');
                largestNumber = undefined;
            }
        } else {
            alert('El valor introducido NO es Numérico');
            largestNumber = undefined;
        }
    } while (!correct);
    for (let accountant = 0; accountant <= largestNumber; accountant++) {
        sum += accountant;
    }
    myBox.innerHTML = `<b>La suma es: ${sum}</b>`;
}