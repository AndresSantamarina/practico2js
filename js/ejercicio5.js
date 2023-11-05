/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo: 
Input:  40773821 
Output: ‘L’
*/

const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

while (confirm("Ingrese un DNI")) {
    const dni = parseInt(prompt("Ingrese un DNI"));
    if (!isNaN(dni) && dni > 0 && dni <= 99999999) {
        let resto = (dni % 23);
        console.log(resto);
        alert(letras.charAt(resto));
    }
    else {
        alert("Ingreso inválido");
    }
}