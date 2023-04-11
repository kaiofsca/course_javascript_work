{/* ------ Funções e Arrow functions ------ */}
// Entendendo funções
function sum(a, b = 10) {
    return a + b;
}
// const sumValue = sum(2)
// console.log(sumValue);

// Entendendo Arrow functions
const sumArrow = (a, b = 10) => {
    return a + b;
};

// Mesma coisa que acima
// const sumArrow = (a, b = 10) => a + b;


const sumValue = sumArrow(2)
console.log(sumValue)