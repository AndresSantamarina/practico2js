/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
const numeroPiramide = parseInt(prompt("Ingrese un número para la pirámide"));

if (numeroPiramide > 50) {
    alert("Seleccione un número menor")
} else {
    for (let filas = 1; filas <= numeroPiramide; filas++) {
        for (let i = 1; i <= filas; i++) {
            document.write(i);
        }
        document.write('<br>')
    }
}