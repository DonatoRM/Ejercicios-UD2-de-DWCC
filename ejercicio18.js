const exercise18 = () => {
    const box = document.getElementById('result');
    let selectedNumber;
    let ok = false;
    let fibonacciSeries = [0, 1];
    let finalShipment = '<p>';
    do {
        selectedNumber = Number(prompt('Inserte un Valor Entero Positivo'));
        if (!isNaN(selectedNumber)) {
            if (selectedNumber % 1 == 0) {
                if (selectedNumber >= 0) {
                    ok = true;
                } else {
                    alert('El valor introducido No es Mayor o Igual a Cero');
                    selectedNumber = undefined;
                }
            } else {
                alert('El valor introducido no es un Valor Entero');
                selectedNumber = undefined;
            }
        } else {
            alert('El valor introducido No es Numérico');
            selectedNumber = undefined;
        }
    } while (!ok);
    ok = false;
    while (selectedNumber >= fibonacciSeries[fibonacciSeries.length - 1]) {
        fibonacciSeries.push(fibonacciSeries[fibonacciSeries.length - 2] + fibonacciSeries[fibonacciSeries.length - 1]);
    }
    switch (selectedNumber) {
        case 0:
            finalShipment += `Ningún valor y 1</p>`;
            break;
        case 1:
            finalShipment += `Ó 0 y 1 ó 1 y 2</p>`;
            break;
        default:
            if (selectedNumber == fibonacciSeries[fibonacciSeries.length - 2]) {
                finalShipment += `${fibonacciSeries[fibonacciSeries.length - 3]} y ${fibonacciSeries[fibonacciSeries.length - 1]}</p>`;
            } else {
                finalShipment += `${fibonacciSeries[fibonacciSeries.length - 2]} y ${fibonacciSeries[fibonacciSeries.length - 1]}</p>`;
            }
    }
    box.innerHTML = finalShipment;
}