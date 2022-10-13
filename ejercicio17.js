const exercise17 = () => {
    const box = document.getElementById('result');
    let requestedNumber;
    let positionNumber;
    let fibonacciSeries = [0, 1];
    let ok = false;
    let accountant = 0;
    do {
        requestedNumber = Number(prompt('Inserte un Número Entero mayor a igual que cero'));
        if (!isNaN(requestedNumber)) {
            if (requestedNumber % 1 == 0) {
                if (requestedNumber >= 0) {
                    ok = true;
                } else {
                    alert('El valor introducido No es Mayor o Igual a Cero');
                    requestedNumber = undefined;
                }
            } else {
                alert('El valor introducido No es un Número Entero');
                requestedNumber = undefined;
            }
        } else {
            alert('El valor introducido No es Numérico');
            requestedNumber = undefined;
        }
    } while (!ok);
    while (requestedNumber >= fibonacciSeries[fibonacciSeries.length - 1]) {
        fibonacciSeries.push(fibonacciSeries[fibonacciSeries.length - 2] + fibonacciSeries[fibonacciSeries.length - 1]);
    }
    fibonacciSeries.forEach(element => {
        accountant++;
        if (element == requestedNumber) {
            positionNumber = accountant;
        }
    });
    if (!isNaN(positionNumber)) {
        box.innerHTML = `<p>El valor ${requestedNumber} es el ${positionNumber}.º de la serie de Finonacci</p>`;
    } else {
        box.innerHTML = `<p>El valor ${requestedNumber} No está en la serie de Fibonacci</p>`;
    }
}