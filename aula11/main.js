{/* ------ Programação Orientada a Objetos (POO) ------ */}

// Entendendo Classes 
// As Classes no javascript são basicamente impressoras de objetos, pode definir uma entidade e imprimir um obj dessa entidade
class Person1 {
    constructor(firtName, lastName, age) {
        this.firtName = firtName;
        this.lastName = lastName;
        this.age = age;
    }
}
// constructor é executado sempre que a classe é instanciada dessa forma abaixo
const person = new Person1('Lívia', 'Marista', 23)
const person1 = new Person1('Kaio', 'Fonseca', 20)
console.log(person, person1)





// Criando Métodos para as Classes
class Person2 {
    constructor(firtName, lastName, age) {
        this.firtName = firtName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firtName} ${this.lastName}`)
    }

     static speak() {
        console.log('Hello World!')
    }

}
const person2 = new Person2('Maria', 'Moura', 18)
person2.getFullName()
// person2.speak() - Não da para instaciar o speak dessa forma pq agr está estático
Person2.speak() // Agr é dessa maneira
// Criando Métodos Estáticos - Métodos que não necessitam ser instaciados para serem executados, por exemplo o speak não precisa ser instaciado pois não tem que assinalar nada.



// Entendendo Heranças
// Da para herdar determinada classe em uma nova classe
// Quando estendemos a classe dog tem acesso a tudo que a classe Animal tem
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`)
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() { // Esse speak vai sobreescrever o speak acima
        console.log(`${this.name} barked!`)
    }
}
const animal = new Animal('Simba')
const dog = new Dog('Thor')
animal.speak()
dog.speak()