
const lista = [1,2,3,4,5]

for (let index = 0; index < lista.length; index++) {
    console.log(index)
}
console.log('---')


let index = 0
while (index < lista.length) {
    console.log(index)
    index++
}

console.log('---')

index = 0
do {
    console.log(index)
    index++
} while (index < lista.length);