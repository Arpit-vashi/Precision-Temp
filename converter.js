const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (Celsius) => {
        let Fahrenheit = ((Celsius * 9 / 5) + 32).toFixed(1);
        return Fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (Fahrenheit) => {
        let Celsius = ((Fahrenheit - 32) * 5 / 9).toFixed(1);
        return Celsius;
    }

    if (valueTemp == 'Celsius') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}
