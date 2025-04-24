// Criar uma variavel
var varVar = 1; // NAO USAR
let varLet = 1;
const varConst = 1;

// - Number: Para representar números inteiros ou decimais.
// - String: Para representar sequências de caracteres.
// - Boolean: Para valores lógicos (verdadeiro ou falso).
// - undefined: Indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.
// - null: Representa a ausência intencional de qualquer valor ou objeto.

let number = 23;
let string = "valor da string";
let boolean = true;
let undefineddd = undefined;
let nulll = null;

//---
// Tratando strings

let nome = "David";
let surname = "Freitas";
// concatenando
let completName = nome + " " + surname + "\n";

console.log(completName);

let exemploCrase = `Meu nome é: ${nome}`;
console.log(exemploCrase);

// Tratando numeros

let num1 = 91
let num2 = 9

let add = num1 + num2
let sub = num1 - num2
let mul = num1 * num2
let poten = num1 ** num2
let div = num1 / num2
let rest = num1 % num2

console.log(`Add: ${add}\n`,`sub: ${sub}\n`,`div: ${div.toFixed(2)}\n`, `rest: ${rest}\n`)

