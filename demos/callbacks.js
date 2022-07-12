const legolas={
  name: 'legolas',
  attackSpeed: 20,
  attackDamage: 10
}
const gimly={
  name: 'gimly',
  attackSpeed: 7,
  attackDamage: 15
}

function atacar(personaje, attackFunc) {
  let attack=attackFunc(personaje)
  console.log(`${personaje.name} ataca con ataque ${attack.weapon} causing ${attack.damage} with speed ${attack.speed}`)
}

function attackWithSword(person) {
  return {
    weapon: 'sword',
    speed: person.attackSpeed+16,
    damage: person.attackDamage+23
  }
}

function attackWithArrow(person){
  return {
    weapon: 'bow&arrow',
    speed: person.attackSpeed+24,
    damage: person.attackDamage+13
  }
}

function attackWithAxe(person){
  return {
    weapon: 'axe',
    speed: person.attackSpeed-2,
    damage: person.attackDamage+20
  }
}

atacar(legolas, attackWithSword)
atacar(legolas, attackWithArrow)
atacar(legolas, attackWithAxe)
atacar(gimly, attackWithSword)
atacar(gimly, attackWithArrow)
atacar(gimly, attackWithAxe)