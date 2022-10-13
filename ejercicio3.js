const exercise3 = () => {
    const maximunNumber = 10;
    let aritmeticMean;
    const myBox = document.getElementById('result');
    let sumTotal = 0;
    for (let number = 0; number <= maximunNumber; number++) {
        sumTotal += number;
    }
    sumTotal = parseFloat(sumTotal);
    aritmeticMean = sumTotal / parseFloat(maximunNumber);
    myBox.innerHTML = `<p>La media aritmética de los ${maximunNumber} números naturales es ${aritmeticMean}</p>`;
}