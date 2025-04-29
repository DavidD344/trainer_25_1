import {Animal} from './Animal.js'

export class TralaleloTralala extends Animal {
    constructor(name,size, origin, description, jailId, shoes){
        super(name, size, origin, description, jailId);
        this.shoes = shoes
    }
    getShoes(){
        return this.shoes
    }
}