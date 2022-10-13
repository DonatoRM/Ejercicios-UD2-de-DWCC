const exercise11 = () => {
    const box1 = document.getElementById('result1');
    const box2 = document.getElementById('result2');
    const box3 = document.getElementById('result3');
    let sum = 0;
    let arithmeticMean;
    let selectedNumber;
    let primeNumbers = '<p>';
    let ok = false;
    let prime = true;
    let accountant = 0;
    do {
        selectedNumber = Number(prompt('Inserte un Número Entero Mayor que 1'));
        if (!isNaN(selectedNumber)) {
            if (selectedNumber % 1 == 0) {
                if (selectedNumber > 1) {
                    ok = true;
                } else {
                    alert('El valor introducido debe ser Mayor que 1');
                    selectedNumber = undefined;
                }
            } else {
                alert('El valor numérico introducido es Real');
                selectedNumber = undefined;
            }
        } else {
            alert('El valor introducido no es numérico');
            selectedNumber = undefined;
        }
    } while (!ok);
    for (let i = 2; i <= selectedNumber; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {

            primeNumbers += i;
            sum += i;
            accountant++;
        }
        if (i != selectedNumber && prime) {
            primeNumbers += ', ';
        }
        prime = true;
    }
    primeNumbers += '</p>';
    box1.innerHTML = primeNumbers;
    arithmeticMean = parseFloat(sum) / parseFloat(accountant);
    box2.innerHTML = `<p>La suma es ${sum}</p>`;
    box3.innerHTML = `<p>La media es ${arithmeticMean}</p>`;
}