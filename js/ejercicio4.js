/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
let suma = 0;
do {
    let numero = parseInt(prompt("Ingrese un número"));
    if (!isNaN(numero)) {
        suma += numero;
    }
    else {
        alert("Ingreso inválido")
    }
}
while (confirm("¿Desea ingresar otro número?"))
document.write(suma);

