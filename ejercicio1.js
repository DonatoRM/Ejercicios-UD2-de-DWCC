const exercise1 = () => {
    let myBox = document.getElementById('result');
    const maximunNumber = 10;
    let myResult = '<p>1';
    for (let i = 2; i <= 10; i++) {
        myResult += ', ' + i;
    }
    myResult += '</p>';
    myBox.innerHTML = myResult;
}