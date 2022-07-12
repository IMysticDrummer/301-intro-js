let y=0

if (true) {
  let y=0
  y++
}

console.log(y)

//funciona porque para cada iteración se crea un bloque (contexto) nuevo
for (let i = 0; i < 3; i++) {
  const element = 20*i
  console.log(element)
}

