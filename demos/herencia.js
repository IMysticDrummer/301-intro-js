class Animal{
  serVivo(){
    return true
  }
}

class Elephant extends Animal{
  constructor(){
    super()
    this.legs=4
    this.hasMemory=true
  }
  action(){
    console.log('Walk in the sabana')
  }
}

class Bee extends Animal{
  constructor() {
    super()
    this.flies=true
  }

  action(){
    console.log('Polinize')
  }
}

let dumbo= new Elephant()
console.log(dumbo.serVivo())