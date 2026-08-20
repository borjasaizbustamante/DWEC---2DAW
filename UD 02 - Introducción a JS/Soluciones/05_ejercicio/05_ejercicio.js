var num = 1;
var suma = 0;
var fila = 0;

while(fila < 10){
    var columna = 0;
    while (columna < 10){
        suma += num;
        document.write(suma + ", ");
        num++;
        columna++;
    }
    fila++;
    document.write("<br>");
}