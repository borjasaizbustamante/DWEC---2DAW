var num;
var isCorrectNumber = false;

do {
    num = parseInt(window.prompt("Introduce un número: "));
    if (isNaN(num) || num == 0){
        window.alert("No has introducido un número válido.");
    } else {
        isCorrectNumber = true;
        var resultado = num;
        for (let i = num - 1; i > 0; i--){
            resultado *= i;
        }
        window.alert("El resultado de " + num + "! es " + resultado);
    }
} while(!isCorrectNumber);