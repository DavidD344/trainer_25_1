console.log('testando')

const elementosTag =  document.getElementsByTagName('p')
const elementoById =  document.getElementById('test')
const elementosByClassname = document.getElementsByClassName('.teste')

const elementoQueryById = document.querySelector('#test')
const elementoQueryClassContainer = document.querySelectorAll('.div')
const elementoQueryClass = document.querySelectorAll('div p')
const elementoQueryClass2 = document.querySelectorAll('.container p')

console.log(elementoQueryClass)
// getElementById - element
// getElementsByClassName - HTMLCollection
// getElementsByTagName - HTMLCollection
// querySelector - Element
// querySelectorAll - NodeList


