//ejemplos de string
const role='teacher'

//role='hello' --> no funciona porque es una constante

console.log(role);

const teacherName='Jordi' //camelCase para variable
/*También se puede usar snake_case:
  teacher_name */

const phrase1="The name of the teacher is: "+teacherName //usar + para concatenar strings
const phrase2=`The name of the teacher is ${teacherName}` //MÉTODO BIEN RECOMENDADO

console.log(phrase1)
console.log(phrase2)
console.log(`phrase1===phrase2: ${phrase1===phrase2}`)

/*let keyboardItem ={*/
const keyboardItem ={ //con const también funciona
  /*Podremos cambiar las propiedades del objeto, pero
  el propio objeto no le podremos cambiar*/
  name: 'QWERTY',
  price: 32.99,
  ISCode: 'ES',
  units: 2,
  OS: ['Mac', 'Linux', 'Windows']
}
//EN JSON
/*
{
  "name": "QWERTY",
  "price": 32.99,
  "ISCode": "ES",
  "units": 2,
  "OS": ['Mac', 'Linux', 'Windows'] //se usan comillas dobles, pero también acepta simples.
}
*/


console.log(`The name of the keyboard is: ${keyboardItem.name}`)

keyboardItem.ISCode='IT'

console.log(`The new value for keyboardItem is: ${keyboardItem.ISCode}`)

/*
console.log(keyboardItem)
delete keyboardItem.OS[1] //Deja vacío el segundo elemento del array
/*No utilizar delete para borrar claves del objeto, para mantener
la inmutabilidad de los objetos */

console.log(keyboardItem)

if ('5'>=5) console.log(`'5'>=5`)
else console.log(`pues no es verdad que '5'>=5`)


