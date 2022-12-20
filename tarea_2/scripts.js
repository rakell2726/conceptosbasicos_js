/*  Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de 
entrada: el nombre, horas trabajadas y el valor de la hora.  */

// definir variables

let nombre;
let hw,valorh;
let sueldo = 0;

nombre=prompt('ingresa nombre del empleado');
hw=Number(prompt('ingresa horas trabajadas'));
valorh=Number(prompt('ingresa valor de la hora trabajada'));

// estrutura
sueldo = hw*valorh;


// mostrar resultado

console.log('el sueldo de empleado:'+nombre,'es:'+sueldo, '$');
