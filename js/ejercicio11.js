/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let nombres = [];
let edades = [];

for (i = 0; i < 3; i++) {
    let nombre = prompt("Escriba su nombre");
    let edad = parseInt(prompt("Escriba su edad"));
    nombres.push(nombre);
    edades.push(edad);
}
console.log(edades);
let edadMayor = Math.max(...edades);
let ubicacionMayor = edades.indexOf(edadMayor);
let nombreMayor = nombres [ubicacionMayor];

document.write(`La persona de mayor edad es ${nombreMayor} con ${edadMayor} años`)
