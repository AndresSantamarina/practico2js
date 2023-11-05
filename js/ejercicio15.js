/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

const frase = prompt("Ingrese una frase");
let vocales = 0;

for (let letra = 0; letra < frase.length; letra++) {
    let caracter = frase.charAt(letra).toLowerCase();

    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u" || caracter === "á" || caracter === "é" || caracter === "í" || caracter === "ó" || caracter === "ú") {
        vocales++;
    }
}

document.write(`El número de vocales de la frase ingresada es de: ${vocales}`);