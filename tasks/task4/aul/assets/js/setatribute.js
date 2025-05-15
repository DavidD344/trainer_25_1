
console.log('testando')

const elementosByClassname = document.getElementsByClassName('user_list')

elementosByClassname[elementosByClassname.length - 1].classList.add('lastItem')
elementosByClassname[elementosByClassname.length - 1].classList.remove('lastItem')
elementosByClassname[elementosByClassname.length - 1].classList.toggle('lastItem')
elementosByClassname[elementosByClassname.length - 1].setAttribute('id','idTestes')
elementosByClassname[elementosByClassname.length - 1].setAttribute('src','srcImg')
console.log(elementosByClassname[elementosByClassname.length - 1].getAttribute('id'))




console.log(elementosByClassname)
// getElementById - element
// getElementsByClassName - HTMLCollection
// getElementsByTagName - HTMLCollection
// querySelector - Element
// querySelectorAll - NodeList