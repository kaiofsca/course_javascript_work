{/* ------ Conceito de Truthy & Falsy ------ */}
// O que é verdadeiro e falso no Javascript? - Podemos checkar se uma variável é verdadeira ou falsa por meio "!!"

const x = ''; // string vazia sempre vai ser falso
console.log(!!x)

const y = 0;// 0 sempre é false tbm
console.log(!!y)

// NULL & UNDEFINED também são falsos

const list = [];// Lista vazia é verdadeira
const obj = {};// obj vazio é verdadeiro
console.log(!![])
console.log(!!{})

console.log(!list)