var num = 1;
var suma = 0;

for (let fila = 0; fila < 10; fila++){
    for (let columna = 0; columna < 10; columna++){
        suma += num;
        document.write(suma + ", ");
        num++;
    }
    document.write("<br>");
}