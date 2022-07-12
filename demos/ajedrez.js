//Crear tablero de ajedrez
console.log('---------------------------------')
console.log('Escrito a mano')
console.log('---------------------------------')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')
console.log('B N B N B N B N')
console.log('N B N B N B N B')

console.log('---------------------------------')
console.log('Bucle for y dos strigs par e impar')
console.log('---------------------------------')

//con For
const filaPar='B N B N B N B N'
const filaImpar='N B N B N B N B'

const totalFilas=8
for (let index = 0; index < totalFilas; index++) {
  if (index%2===0) console.log(filaPar)
  else console.log(filaImpar)
  
}

console.log('---------------------------------')
console.log('Doble bucle For y caracteres')
console.log('---------------------------------')

//Con doble For
for (let indexFila = 0; indexFila < totalFilas; indexFila++) {
  let row=''
  for (let indexColumn = 0; indexColumn < totalFilas; indexColumn++) {
    if (indexFila%2===0) {
      if (indexColumn%2===0) char='B'
      else char='N'
    }
    else {
      if (indexColumn%2===0) char='N'
      else char='B'
    }
    if (indexColumn===0) row+=`${char}`
    else row+=` ${char}`
  }
  console.log(row)
}

console.log('---------------------------------')
console.log('Doble bucle For, array y join')
console.log('---------------------------------')

//Con doble For, array y join
for (let indexFila = 0; indexFila < totalFilas; indexFila++) {
  let row=[]
  for (let indexColumn = 0; indexColumn < totalFilas; indexColumn++) {
    if (indexFila%2===0) {
      if (indexColumn%2===0) row.push('B')
      else row.push('N')
    }
    else {
      if (indexColumn%2===0) row.push('N')
      else row.push('B')
    }
  }
  console.log(row.join(' '))
}

console.log('---------------------------------')
console.log('Doble bucle For, array y join, mejorado usando la suma de los dos arrays')
console.log('---------------------------------')

//Con doble For, array y join
for (let indexFila = 0; indexFila < totalFilas; indexFila++) {
  let row=[]
  for (let indexColumn = 0; indexColumn < totalFilas; indexColumn++) {
    if ((indexFila+indexColumn)%2===0) row.push('B')
    else row.push('N')
  }
  console.log(row.join(' '))
}