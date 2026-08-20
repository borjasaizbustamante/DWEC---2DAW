var num = 0;
var fila = 0;

while(fila < 10){
    var columna = 0;
    while (columna < 5){
        num += 2;
        document.write(num + " ");
        columna++;
    }
    fila++;
    document.write("<br>");
}