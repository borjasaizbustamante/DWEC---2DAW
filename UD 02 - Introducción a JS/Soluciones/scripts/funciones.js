/**** FUNCION 1 numerosentre (num1,num2) *********************/
// Recibe dos números como parámetro y muestra en la página 
// los valores comprendidos entre ellos de uno en uno. 
/*************************************************************/

function numerosentre(num1, num2) {
	if (num1 >= num2)
		document.write('<p> NO HAY NUMEROS INTERMEDIOS ENTRE LOS DOS NUMEROS ELEGIDOS </p>');
	else {
		document.write('<p> LOS NUMEROS ENTRE ' + num1 + ' y ' + num2 + ' SON: ');
		for (let i = num1 + 1; i < num2; i++)
			document.write(i + ' ');
		document.write('<p>');
	};
}

/**** FUNCION 2 ordenar(num1,num2,num3)****************************/
// Recibe tres números como parámetro y los muestra ordenados de menor
// a mayor.
/******************************************************************/

function ordenar(num1, num2, num3) {
	if ((num1 <= num2) && (num1 <= num3))
		if (num2 <= num3)
			//num1,num2,num3,
			document.write('<p> NUMEROS ORDENADOS: ' + num1 + '-' + num2 + '-' + num3 + '</p>');
		else
			//num1,num3,num2
			document.write('<p> NUMEROS ORDENADOS: ' + num1 + '-' + num3 + '-' + num2 + '</p>');
	else
		if (num2 <= num3)
			if (num3 <= num1)
				//num2,num3,num1
				document.write('<p> NUMEROS ORDENADOS: ' + num2 + '-' + num3 + '-' + num1 + '</p>');
			else
				// num2,num1,num3
				document.write('<p> NUMEROS ORDENADOS: ' + num2 + '-' + num1 + '-' + num3 + '</p>');
		else
			if (num1 <= num2)
				//num3,num1,num2
				document.write('<p> NUMEROS ORDENADOS: ' + num3 + '-' + num1 + '-' + num2 + '</p>');
			else
				// num3,num2,num1
				document.write('<p> NUMEROS ORDENADOS: ' + num3 + '-' + num2 + '-' + num1 + '</p>');
}

/**** FUNCION 3 perimetro(lado)************************************/
// Renvíe el valor del lado de un cuadrado y devuelve su perímetro. 
/******************************************************************/
function perimetro(lado) {
	return (lado * 4);
}

/**** FUNCION 4 areacuadrado(lado), areacirculo(radio),areatriangulo(base,altura)********/
// Funciones que calculan el area.
/****************************************************************************************/

function areacuadrado(lado) {

	return (lado * lado);

}

function areacirculo(radio) {
	const pi = 3.141592;
	return (pi * radio * radio);

}

function areatriangulo(base, altura) {

	return ((base * altura) / 2);
}



/**** FUNCION 5 operar(operacion)************************************/
// Función que realice una operacion aritmética,que ha sido pasada por parametro
// de cuatro posibles.
/******************************************************************/

function operar(operacion) {

	var
		num1, num2, resultado;

	num1 = parseInt(prompt("Introduce un número: "));
	num2 = parseInt(prompt("Introduce otro número: "));

	switch (operacion) {
		case 1: resultado = (num1 + num2); break;

		case 2: resultado = (num1 - num2); break;

		case 3: resultado = (num1 * num2); break;

		case 4: resultado = (num1 / num2); break;
		default: resultado = 0; break;
	}
	return resultado;


}



/**** FUNCION 6 perimetro(lado)************************************/
// Elaborar una función que compruebe que la letra del DNI es la correcta
/******************************************************************/
function letradni(dni, letra) {

	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letraCalculada;

	letra = letra.toUpperCase();
	letraCalculada = letras[dni % 23];

	return (letraCalculada == letra)
}

/**** FUNCION 7 perimetro(lado)************************************/
// Definir una función que muestre información sobre una cadena de texto 
// que se le pasa como argumento. A partir de la cadena que se le pasa, 
// la función determina si esa cadena está formada sólo por mayúsculas, 
// sólo por minúsculas o por una mezcla de ambas. 
/******************************************************************/
function info(cadena) {

	var resultado = "La cadena \"" + cadena + "\" ";

	// Comprobar mayúsculas y minúsculas
	if (cadena == cadena.toUpperCase()) {
		resultado += " está formada solo por mayúsculas";
	}
	else if (cadena == cadena.toLowerCase()) {
		resultado += " está formada solo por minúsculas";
	}
	else {
		resultado += " está formada por mayúsculas y minúsculas";
	}

	return resultado;
}
/**** FUNCION 8 espalindromo(cadena)************************************/
// Definir una función que determine si la cadena de texto que se le pasa 
// como parámetro es un palíndromo, es decir, si se lee de la misma forma 
// desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: 
//"La ruta nos aporto otro paso natural". 
/******************************************************************/
function espalindromo(cadena) {

	var palindromo = true;
	var cadenasinespacios = "";
	var cadenafinal = "";
	var i = 0;
	//Quitamos los espacios
	cadenasinespacios = cadena.replace(/ /g, "");
	//Convertimos la cadena a minusculas	  
	cadenafinal = cadenasinespacios.toLowerCase();

	//Recorremos la cadena buscando si no es palindromo.
	i = 0;
	palindromo = true;
	while ((i < cadenafinal.length / 2) && palindromo) {

		if (cadenafinal[i] != cadenafinal[cadenafinal.length - 1 - i])
			palindromo = false;
		i++;
	}
	//Devolver resultado	 
	return (palindromo);

}


