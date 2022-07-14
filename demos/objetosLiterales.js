const obj ={
  a:1,
  suma: function (x,y) {return x+y}
}

const aObj= new Object()
aObj.name='a'

const bObjt= new Object()
bObjt.value=3

console.log(aObj) //El objeto instanciado sólo tiene la propiedad name
console.log(bObjt) //El objeto instanciado sólo tiene la propiedad value

console.log(Object.keys(aObj)) //Muestra las claves de un objeto