class Car {
    constructor(nome){
        this.nome = nome
    }
    getNome(){
        return this.nome
    }
}

const objetoDaClassCar = new Car('uno')

const objetoCar = {
    nome:'uno',
    getNome(){
        return this.nome
    }
}




function cadastrarPessoa({nome, sobrenome }) {
    return nome + ' ' + sobrenome
}


const mockPessoa = {nome:'David ',sobrenome:'Freitas'}


console.log(cadastrarPessoa({nome:'das',sobrenome: 'das'}))
