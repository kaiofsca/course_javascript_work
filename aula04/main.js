{/*----- MAP, FILTER & REDUCE ------*/}

// MAP - Vai executar uma determinada função em cada item dessa lista e retorna uma nova função cim a função executada em todos os itens. e na função do map sempre vai retornar alguma coisa ent tem qter o return.
const numbers = [1, 2, 3, 4, 5];
const numbersMultipliedByTwo = numbers.map((itemAtual) =>{
    return itemAtual * 2;
})
console.log(numbersMultipliedByTwo);

// FILTER - Vai filtrar uma lista e retornar uma lista nova baseada no filtro. Também executa para cada item e se o resultado for true ele add na nova lista.
const ages = [8, 13, 27, 30, 22, 40]
const evenAges = ages.filter((itemAtual) => {
    return itemAtual % 2 === 0;
})
console.log(evenAges);

// REDUCE - É util quando a gnt quer reduzir todos os valores de uma lista para um só, por exemplo a soma de todos os valores de uma lista. Accumulator vai ser o valor atual da acumulação de todas as adições. Começa zerado, o accumulator é o zero e o "ItemAtual" é o primeito item da lista que no caso é 8, dps o accumulator vira o 8 e o "ItemAtual" vira o segundo elemento da lista e assim vai até o final.
const sumOfAges = ages.reduce((itemAtual, accumulator) => {
    return accumulator + itemAtual;
}, 0);
console.log(sumOfAges)