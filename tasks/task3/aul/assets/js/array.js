const lista = [1,2,3,4,5]

// criar 
// acessar
// ver o tamanho da lista
// atribui valor a um elemento de lista


const listSize = lista.length // lenth retorna o tamanho da lista 
lista[1] = 2 // Alterar o elemento da lista com base no indice
lista[listSize - 1] = 5 // Alterar o ultimo elemento da lista com base no indice
console.log(lista[1])
console.log(lista.length)
console.log(lista[listSize - 1])

lista.push(6)
console.log('push',lista)
lista.pop()
console.log('pop',lista)
lista.shift()
console.log('shift',lista)
lista.unshift(1)
console.log('unshift',lista)
console.log('indexOf',lista.indexOf(4))
console.log('includes',lista.includes(3))
console.log('splice',lista.includes(3))

console.log(lista)
lista.splice(2,1)
lista.splice(2,0,3)
console.log(lista)
console.log(lista.slice(2,4))
console.log(lista)

lista.map((el,index)=>{
    console.log('byMap',el,index)
})

const doubleLista = lista.map((el,index)=>{
 return el*2
})


lista.forEach((el,index)=>{
    console.log('byForEach',el,index)
})



// console.log('forEach',2)

// .push(): adiciona ao final

// .pop(): remove do final

// .shift(): remove do início

// .unshift(): adiciona no início

// .indexOf(): busca valor e retorna índice

// .includes(): verifica se contém

// .splice(): remove ou substitui

// .slice(): copia parte

// .forEach(): percorre

// .map(): transforma