/*
TODO Mostrarla por pantalla.
TODO Jugar lo partidos de todas las jornadas.
Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
TODO Una vez terminada la liga, se mostrarán estádísticas de número de goles totales y total de puntos ganados.
*/

// DONE Mostrar los equipos inscritos por pantalla.
const TEAMS=[
  'Osana',
  'Real Sociedad',
  'Celta de Vigo',
  'Cadiz',
  'Las Palmas',
  'Hercules'
]
console.log(TEAMS)

//una liga tendrá un conjunto de jornadas
//cada jornada tendrá un conjunto de partidos
//un partido es el enfrentamiento de dos equipos
//el desarrollo de un partido generará un resultado

class League{
  constructor(name, teams, rounds=1){
    this.name=name
    this.teams=teams
    this.rounds=rounds
  }

}

const laliga=new League('La Liga', TEAMS)
console.log(laliga.teams)

// TODO Crear la planificación de jornadas y partidos de cada jornada.