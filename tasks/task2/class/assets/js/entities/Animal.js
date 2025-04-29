
export class Animal {
    constructor(name, size, origin, description, jailId) {
      this.name = name;
      this.size = size;
      this.origin = origin;
      this.description = description;
      this.jailId = jailId;
    }
    getName(){
      return this.name
    }
    getSize(){
      return this.size
    }
  
    doShit(){
      return true
    }
  }
  