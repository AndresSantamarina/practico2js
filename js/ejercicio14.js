/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

let texto = prompt("Ingrese un texto")

for (caracter = 0; caracter < texto.length; caracter++){
    if(caracter < texto.length - 1){
        document.write(`${texto.charAt(caracter)}-`)
    }else{
        document.write(texto.charAt(caracter))
    }
}

