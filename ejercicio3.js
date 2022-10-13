const exercise3 = () => {
    const maximumNumber = 10;
    let arithmeticMean;
    const myBox = document.getElementById('result');
    let sumTotal = 0;
    for (let number = 0; number <= maximumNumber; number++) {
        sumTotal += number;
    }
    sumTotal = parseFloat(sumTotal);
    arithmeticMean = sumTotal / parseFloat(maximumNumber);
    myBox.innerHTML = `<p>La media aritmética de los ${maximumNumber} números naturales es ${arithmeticMean}</p>`;
}