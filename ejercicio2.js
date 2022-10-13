const exercise2 = () => {
    const myBox = document.getElementById('result');
    const maximunNumber = 10;
    let myResult = '<p>';
    for (let i = 2; i <= maximunNumber; i = i + 2) {
        myResult += i;
        if (i != 10) {
            myResult += ', ';
        }
    }
    myResult += '</p>';
    myBox.innerHTML = myResult;
}