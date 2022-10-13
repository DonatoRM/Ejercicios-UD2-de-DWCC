const exercise16 = () => {
    const box = document.getElementById('result');
    let fibonacciTable = [0, 1];
    let selectedNumber;
    let ok = false;
    do {
        selectedNumber = Number(prompt('Introduzca un Número Entero mayor o igual que 0'));
        if (!isNaN(selectedNumber)) {
            if (selectedNumber % 1 == 0) {
                if (selectedNumber >= 0) {
                    ok = true;
                } else {
                    alert('El Valor introducido No es Mayor o Igual que Cero');
                    selectedNumber = undefined;
                }
            } else {
                alert('El Valor introducido no es un Número Entero');
                selectedNumber = undefined;
            }
        } else {
            alert('El Valor introducido No es Numérico');
            selectedNumber = undefined;
        }
    } while (!ok);
    ok = false;
    while (selectedNumber >= fibonacciTable[fibonacciTable.length - 1]) {
        fibonacciTable.push(fibonacciTable[fibonacciTable.length - 2] + fibonacciTable[fibonacciTable.length - 1]);
    }
    fibonacciTable.forEach(element => {
        if (element == selectedNumber) {
            ok = true;
        }
    });
    if (ok) {
        box.innerText = `El Valor ${selectedNumber} SI está dentro de la serie de Fibonacci`;
    } else {
        box.innerHTML = `El Valor ${selectedNumber} NO está dentro de la serie de Fibonacci`;
    }
}