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

    let dni = parseInt(prompt("Ingrese su DNI"));
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE"
    if (!isNaN(dni) && dni > 0 && dni <= 99999999) {
        let resto = (dni % 23);
        console.log(resto);
        alert(letras.charAt(resto));
    } else {
        alert("Ingreso inválido");
    }



// let dni = parseInt(prompt("Ingrese su DNI"));
// if (!isNaN(dni) && dni > 0 && dni <= 99999999) {
//     let resto = dni % 23;
//     console.log(resto);
//     if (resto === 0) {
//         alert("T")
//     } else if (resto === 1) {
//         alert("R")
//     }
//     else if (resto === 2) {
//         alert("W")
//     }
//     else if (resto === 3) {
//         alert("A")
//     }
//     else if (resto === 4) {
//         alert("G")
//     }
//     else if (resto === 5) {
//         alert("M")
//     }
//     else if (resto === 6) {
//         alert("Y")
//     }
//     else if (resto === 7) {
//         alert("F")
//     }
//     else if (resto === 8) {
//         alert("P")
//     }
//     else if (resto === 9) {
//         alert("D")
//     }
//     else if (resto === 10) {
//         alert("X")
//     }
//     else if (resto === 11) {
//         alert("B")
//     }
//     else if (resto === 12) {
//         alert("N")
//     }
//     else if (resto === 13) {
//         alert("J")
//     }
//     else if (resto === 14) {
//         alert("Z")
//     }
//     else if (resto === 15) {
//         alert("S")
//     }
//     else if (resto === 16) {
//         alert("Q")
//     }
//     else if (resto === 17) {
//         alert("V")
//     }
//     else if (resto === 18) {
//         alert("H")
//     }
//     else if (resto === 19) {
//         alert("L")
//     }
//     else if (resto === 20) {
//         alert("C")
//     }
//     else if (resto === 21) {
//         alert("K")
//     }
//     else if (resto === 22) {
//         alert("E")
//     }
// } else {
//     alert("Ingreso inválido")
// }



