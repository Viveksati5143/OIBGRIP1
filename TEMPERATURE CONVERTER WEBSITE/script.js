const calculateTemp = () => {
    const inputTemp = document.getElementById('T').value;

    const tempSelected = document.getElementById('diff');
    const valueTemp = diff.options[tempSelected.selectedIndex].value;

    //  Celsius to Fahrenheit
    const celToFah = (Cel) => {
        let fahrenheit = ((Cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    //  Fahrenheit to Celsius
    const fahToCel = (Fah) => {
        let celsius = ((Fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'Cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}