var opcion = parseInt(prompt("Escoja una opción \n" + "1. Suma\n" + "2. Resta\n" + "3. Multiplicación\n" + "4. División\n" + "5. Resto\n" + "6. Es menor que\n" + "7. Es mayor que\n" + "8. Es igual"));

if (opcion > 0 && opcion < 9){

	var numero1 = parseInt(prompt("Ingresa el #1"));
	var numero2 = parseInt(prompt("Ingresa el #2"));

	switch (opcion) {
		case 1:
			var suma = numero1 + numero2;
			document.write("La suma es: " + suma);
			break;
		case 2:
			var resta = numero1 + numero2;
			document.write("La resta es: " + resta);
			break;
		case 3:
			var multiplicacion = numero1 * numero2;
			document.write("La multiplicación es: " + multiplicacion);
			break;
		case 4:
			var division = numero1 / numero2;
			document.write("La división es: " + division);
			break;
		case 5:
			var resto = numero1 % numero2;
			document.write("El resto es: " + resto);
			break;
		case 6:
			if (numero1 < numero2){
				document.write("Es menor");
			} else{
				document.write("Su número no es menor");
			}
			break;
		case 7:
			if (numero1 > numero2){
				document.write("Es mayor");
			} else{
				document.write("Su número no es mayor");
			}
			break;
		case 8:
			if (numero1 == numero2){
				document.write("Es igual");
			} else{
				document.write("Su número no es igual");
			}
			break;
		default:
			document.write("Su opción no es válida");
	}

} else {
	document.writ("Tú dato no es válido")
}