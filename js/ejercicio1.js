/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = parseInt(prompt("Ingrese su edad por favor"));

if (edad < 18 || edad > 70) {
    if (edad <= 0) {
        document.write("Ingrese una edad válida.");
    }
    else {
        document.write("Usted no puede conducir.");
    }
}
else {
    document.write("Usted puede conducir.");
}