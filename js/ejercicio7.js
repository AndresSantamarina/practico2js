/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

const numeroPiramide = parseInt(prompt("Ingrese un número para la pirámide"));
if (numeroPiramide > 50) {
    alert("Seleccione un número menor")
} else {
    for (let filas = numeroPiramide; filas >= 1; filas--) {
        for (let i = 0; i < filas; i++) {
            document.write(filas);
        }
        document.write('<br>')
    }
}



