/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
const texto = prompt("Ingrese un texto");

for (let caracter = texto.length; caracter >= 0; caracter--) {
    document.write(texto.charAt(caracter));
}