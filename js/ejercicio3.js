/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

do {
    const frase = prompt("Ingrese una frase");
    if (frase === "" || frase === null) {
        alert("Ingreso inválido")
    }
    else {
        document.write(`${frase}-`);
    }
}
while (confirm("¿Desea ingresar otra frase?"))

