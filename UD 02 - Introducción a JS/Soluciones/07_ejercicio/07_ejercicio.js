var suma = 0;
var num = 1;
var exit = false;

do{
    var columna = 0;

    if (suma > 1000){
        exit = true;
    } else {
        while (columna < 4){
            suma += num;
            if (suma > 1000){
                break;
            } else if (suma % 2 != 0){
                document.write(suma + ", ");
                columna++;
            }
            num++;
        }
    }
    document.write("<br>");
} while (!exit);