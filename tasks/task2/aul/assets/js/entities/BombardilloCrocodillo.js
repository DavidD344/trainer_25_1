import {Animal} from './Animal.js'

export class BombardilloCrocodillo extends Animal {
    constructor(name,size, origin, description, jailId, cannon){
        super(name, size, origin, description, jailId);
        this.cannon = cannon
    }
    getCannon(){
        return this.cannon
    }
}
