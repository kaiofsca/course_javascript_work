{/* ------ Condicionais ------ */}
// Tal funçãosó vai ser executada caso uma condição for true, se retornar false ela retorna outra função.

// Diferença entre "==" e "===" um compara só o valor (==) e o outro compara o valor e o tipo (===).

// Entendendo If, Else if & Else
const sum = 1 + 1;

if (sum === 2) {
    console.log('Sum is 2!')
} else if (sum === 3) {
    console.log('Sum is 3!')
} else {
    console.log('Sum is not 2!')
}

// Operadores AND (&&) e OR (||)

const sum1 = 2 + 2;
const sum2 = 3 + 3;
// No && as duas condições passadas tem que ser verdadeira para a função rodar.
if (sum1 === 4 && sum2 === 6) {
    console.log('Sum is correct!')
}
// No || se uma das condições passadas for verdadeira a função roda.
if (sum1 === 4 || sum2 === 6) {
    console.log('Sum is 4 or sum is 6!')
}

// Operadores Ternários - Perfeito para definir variáveis baseando em uma condição
// Com operadores ternários
let number = sum === 2 ? 2 : 4;

if (sum === 2) {
    number = 2;
} else {
    number = 4
}
// Sem operadores ternários
console.log(number)

// Entendendo o switch - Também bastante utilizado para executar determinado código em determinada condição.
const car = 'Lamborghini';
switch (car) {
    case 'Mercedes' : 
        console.log('Mercedes is beautiful!')
        break;
    case 'Ferrari' :
        console.log('Ferrari is very good!')
        break;
    case 'Lamborghini' :
        console.log('Lamborghini is very fast!')    
}
