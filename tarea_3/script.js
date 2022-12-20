/*  Un estacionamiento requiere determinar el cobro que debe aplicar a 
las personas que lo utilizan. Considere que el cobro es con base en las horas que lo disponen
y que las fracciones de hora se toman como completas. 
Realizar el algoritmo que permita determinar el cobro.  */

let vt;
let hd;
let cobro = 0;

vt=Number(prompt('ingresa valor hora de estacionamiento'));
hd=Number(prompt('ingresa hora que dispuso el estacionamiento'));

// estrutura
cobro =  vt* Math.round(hd);


// mostrar resultado

console.log('el cobro por tiempo de estacionamiento es:'+cobro);