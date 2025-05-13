
class Person {
    constructor(nome, role){
        this.nome = nome
        this.role = role

    }
    getNome(){
        return this.nome
    }
    getRole(){
        return this.role
    }
}
class Animal {
    constructor(nome,age){
        this.nome = nome
        this.age = age

    }
    getNome(){
        return this.nome
    }
}

const bd = {
    users:[],
    animals:[],
}
bd.users.push(new Person('David','ADMIN'))
bd.animals.push(new Animal('Elefante',15))
bd.animals.push(new Animal('Leao',9))


function getAnimals() {
    return bd.animals
}

const listAnimals = getAnimals()

console.log(listAnimals)

listAnimals.map(({nome,age},index)=>{
    console.log(`Id do animal: ${index}\n\nNome: ${nome}\n\nIdade:${age}`)
})