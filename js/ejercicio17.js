/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt("Ingrese un texto")
let vocal = "";
let posicionVocal = "";
const vocales = "aeiouáéíóú"

for (let letra = texto.length; letra >= 0; letra--) {
    texto = texto.toLowerCase();

    if (vocales.includes(texto[letra])) {
        vocal = texto[letra];
        posicionVocal = letra;
    }
}
document.write(`La vocal ${vocal} está en la posición ${posicionVocal}`);