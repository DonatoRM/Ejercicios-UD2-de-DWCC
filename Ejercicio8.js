const exercise8 = () => {
    const box = document.getElementById('result');
    const value = 327;
    let result = true;
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            result = false;
            break;
        }
    }
    if (result) {
        box.innerHTML = '<p>ES PRIMO</p>';
    } else {
        box.innerHTML = '<p>NO ES PRIMO</p>'
    }
}