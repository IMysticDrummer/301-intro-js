let i=0
do {
  console.log(i)
  i++ //imprescindible incrementar/decrementar la variable que luego evalúa while
} while(i<10)

//ahora con while, primero evalúa
console.log('while result:')
let j=10
while (j<10) {
  console.log(j)
  j++ //imprescindible incrementar/decrementar la variable que luego evalúa while
}

//BUCLE FOR
let languages=['Spanish', 'Catalan', 'English', 'Italian', 'Deutsch', 'JS', 'PMP']

console.log(`\n for (let index = 0; index < languages.length; index++)`)
for (let index = 0; index < languages.length; index++) {
  console.log(languages[index])
}

console.log(`\n for (let key in languages)`)
for (let key in languages){
  console.log(languages[key])
}

console.log(`\n for (let language of languages)`)
for (let language of languages){
  console.log(language);
}
