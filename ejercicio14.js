const exercise14 = () => {
    const box = document.getElementById('result');
    let finalText = '<ul>';
    let cityName;
    let numberTemperatures = 3;
    let sumTemperatures = 0;
    let cityCheck;
    do {
        cityName = prompt('Ciudad');
        cityCheck = Number(cityName);
        if (cityName != '') {
            if (isNaN(cityCheck)) {
                finalText += `<li>Ciudad: ${cityName}. Temperaturas: `;
                let temperature;
                let arithmeticMean;
                for (let i = 0; i < numberTemperatures; i++) {
                    let ok = false;
                    do {
                        temperature = Number(prompt('Temperatura'));
                        if (!isNaN(temperature)) {
                            ok = true;
                        } else {
                            alert('Valor introducido incorrecto');
                            temperature = undefined;
                        }
                    } while (!ok);
                    finalText += `${temperature}ºC`;
                    if (i != 3) {
                        finalText += ' - ';
                    }
                    sumTemperatures += temperature;
                    temperature = undefined;
                }
                arithmeticMean = parseFloat(sumTemperatures) / 3;
                finalText += `Media: ${arithmeticMean}ºC</li>`;
                sumTemperatures = 0;
            } else {
                alert('El nombre introducido no es de una ciudad');
                cityName = undefined;
                cityCheck = undefined;
            }
        }
    } while (cityName != '');
    box.innerHTML = finalText;
}