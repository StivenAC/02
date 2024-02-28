
const sinParametros = () => {
    console.log("0 parámetros");
};

const unParametro = (parametro) => {
    console.log("1 parámetro: ", parametro);
};

const masDeDosParametros = (param1, param2, param3) => {
    console.log("3 parámetro: ", param1, param2, param3);
};

sinParametros();
unParametro("Hola");
masDeDosParametros(1, "dos", true);

const constante = 3;
let variable = 5;

let suma = constante + variable;
let resta = variable - constante;
let multiplicacion = constante * variable;
let division = variable / constante;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Producto:", multiplicacion);
console.log("División:", division);
let array = [suma, resta, multiplicacion, division];
console.log("Array:", array);

array.push(10);
console.log(" nuevo vector:", array);

let elementoEliminado = array.pop();
console.log("Elemento eliminado:", elementoEliminado);
console.log("vector después de eliminar:", array);

let primerElemento = array.shift();
console.log("Primer elemento del vector:", primerElemento);
console.log("vector después de shift:", array);

array.unshift(100);
console.log("vector después de unshift:", array);

let indice = array.indexOf(10);
console.log("Índice del elemento 10:", indice);