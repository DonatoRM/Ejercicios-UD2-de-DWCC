const exercise1 = () => {
    let myBox = document.getElementById('result');
    const maximumNumber = 10;
    let myResult = '<p>1';
    for (let i = 2; i <= maximumNumber; i++) {
        myResult += ', ' + i;
    }
    myResult += '</p>';
    myBox.innerHTML = myResult;
}