//1 - Canonical
/**
 * 
 * @param {string} nombre 
 * @param {string} empleo 
 * @returns string nombre es empleo
 */
function foo1(nombre, empleo) {
  return `${nombre} es ${empleo}`
}
let resultado1=foo1('Jordi', 'Programador')
console.log(resultado1)

//2 - asignando a const
const foo2=function (nombre, empleo) {
  return `${nombre} es ${empleo}`
}

let resultado2=foo2('Jordi', 'Arquitecto')
console.log(resultado2)

//3 - con arrow function
const foo3= (nombre, empleo) => {
  return `${nombre} es ${empleo}`
}

let resultado3=foo3('Jordi', 'Consultor')
console.log(resultado3)

//4 - con arrow function sin return
const foo4= (nombre, empleo) => `${nombre} es ${empleo}`

let resultado4=foo4('Jordi', 'Programador')
console.log(resultado4)

//Paso de valor por valor

const funcionMultiplicar=(value) => {
  value = value*10
  console.log(`values es ahora ${value}`)
}
let valor=10
funcionMultiplicar(valor)
console.log(`valor después de ejecutar la funcion es ${valor}`)


//Paso de valor por referencia

let obj={
  value:20
}

funcionMultiplicar(obj.value)
console.log(`valor después de ejecutar la funcion es ${valor}`)


//Se altera obj.value porque obj no es un valorprimitivo y por tanto funciona por referencia
const funcionMultiplicarKey=function (myObj, key) {
  myObj[key]=myObj[key]*1000 //acceder de forma dinámica a una propiedad del objeto
  console.log(`myObj.value es ahora ${myObj[key]}`)
}
funcionMultiplicarKey(obj,'value')
console.log(`Obj.value después de ejecutar la funcion es ${obj.value}`)