const exercise9 = () => {
    const box = document.getElementById('result');
    let selectedNumber;
    let ok = false;
    let prime = true;
    do {
        selectedNumber = Number(prompt('Seleccione un Número Entero Mayor que 1'));
        if (!isNaN(selectedNumber)) {
            if (selectedNumber % 1 == 0) {
                if (selectedNumber > 1) {
                    ok = true;
                } else {
                    alert('El valor introducido No es Mayor que 1');
                    selectedNumber = undefined;
                }
            } else {
                alert('El valor introducido es un Número Real');
                selectedNumber = undefined;
            }
        } else {
            alert('Ha introducido un valor NO Numérico')
            selectedNumber = undefined;
        }
    } while (!ok);
    for (let i = 2; i < selectedNumber; i++) {
        if (selectedNumber % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        box.innerHTML = `<p>El número ${selectedNumber} es PRIMO</p>`;
    } else {
        box.innerHTML = `<p>El número ${selectedNumber} NO es PRIMO</p>`;
    }
}