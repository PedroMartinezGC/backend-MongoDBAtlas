'use strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

console.log("Primer número: "+numero1);
console.log("Segundo número: "+numero1);

var plantilla = `
La suma es: ${numero1 + numero2}
La resta es: ${numero1 - numero2}
La multiplicación es: ${numero1 * numero2}
La división es: ${numero1 / numero2}
`


console.log(plantilla);