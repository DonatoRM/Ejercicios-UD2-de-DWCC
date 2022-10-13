const exercise10 = () => {
    const box = document.getElementById('result');
    const totalNumbers = 10;
    let textHTML = '<p>';
    for (let i = 1; i <= totalNumbers; i++) {
        textHTML += i;
        if (i != totalNumbers) {
            textHTML += ', ';
        }
    }
    textHTML += '</p>';
    box.innerHTML = textHTML;
}