function myFunction() {
    temp = document.getElementById('temperature').value;
    if (temp == "C") {
        convertC();
    }
    if (temp == "F") {
        convertF();
    }

    function convertF() {
        var x = document.getElementById("input").value;
        document.getElementById("output").value = Math.round((x - 32) * 5 / 9) + "°C";
    }

    function convertC() {
        var x = document.getElementById("input").value;
        document.getElementById("output").value = Math.round((x * 9 / 5) + 32) + "°F";
    }
}    