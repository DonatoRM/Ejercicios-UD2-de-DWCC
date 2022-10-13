const exercise6 = () => {
    const myBox = document.getElementById('result');
    let quantity;
    let correct = false;
    let sum = 0;
    do {
        quantity = Number(prompt('Cantidad de Números Naturales'));
        if (!isNaN(quantity)) {
            if (quantity % 1 == 0) {
                if (quantity >= 0) {
                    correct = true;
                } else {
                    alert('El Valor introducido es Negativo');
                    quantity = undefined;
                }
            } else {
                alert('El valor introducido es Real');
                quantity = undefined;
            }
        } else {
            alert('El valor introducido NO es Numérico')
            quantity = undefined;
        }
    } while (!correct);
    for (let accountant = 0; accountant <= quantity; accountant++) {
        sum += accountant;
    }
    myBox.innerHTML = `<p>La media de los ${quantity} primeros números es ` + (sum / quantity) + '</p>';
}