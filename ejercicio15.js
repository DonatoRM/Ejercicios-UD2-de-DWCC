const exercise15 = () => {
    const box = document.getElementById('result');
    let textToExport = '<p>0, 1';
    let fibonacciTable = [0, 1];
    let numberOfItems;
    let valueSought;
    let ok = false;
    do {
        numberOfItems = Number(prompt('Seleccione el Número de Términos (mayor que 2)'));
        if (!isNaN(numberOfItems)) {
            if (numberOfItems % 1 == 0) {
                if (numberOfItems > 2) {
                    ok = true;
                } else {
                    alert('El Valor introducido tiene que ser Mayor que 2');
                    numberOfItems = undefined;
                }
            } else {
                alert('Ha introducido un Valor Real');
                numberOfItems = undefined;
            }
        } else {
            alert('Ha introducido un Valor No Numérico');
            numberOfItems = undefined;
        }
    } while (!ok);
    while (fibonacciTable.length < numberOfItems) {
        valueSought = undefined;
        valueSought = fibonacciTable[fibonacciTable.length - 2] + fibonacciTable[fibonacciTable.length - 1];
        fibonacciTable.push(valueSought);
        if (fibonacciTable.length - 1 != numberOfItems) {
            textToExport += ', ';
        }
        textToExport += valueSought;
    }
    textToExport += '</p>';
    box.innerHTML = textToExport;
}