var exit = false;
var num = 0;

do {
    for (let fila = 0; fila < 5; fila++) {
        for (let columna = 0; columna < 5; columna++) {
            num += 2;
            document.write(num + ", ");
        }
        document.write("<br>");
    }

} while (window.confirm("¿Desea continuar?"));