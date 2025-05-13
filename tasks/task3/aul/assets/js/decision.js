if (true === true) {
    
} else if(true === true){

}else{

}


const keyForSwitch = 2
switch (keyForSwitch) {
    case 2:
        console.log('era dois pai')
        break;
    case 3:
        console.log('era tres pai')
        break;
    default:
        console.log('era outro numero')
        break;
}

const idade = 10
const isKid = idade < 18 ? 'É criança' : idade > 50 ? 'É idoso' : 'É adulto'
console.log(isKid)
const heart = true
const breath = false

const alive = heart || breath
const alive2 = heart && breath


console.log('alive:',alive)