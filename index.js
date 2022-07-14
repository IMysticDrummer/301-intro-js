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

//import League from './classes/Leage.js'
//Esto realmente hay que importarlo en FootballLeague
import FootballLeague from './classes/FootballLeague.js'

const laliga=new FootballLeague('La Liga', TEAMS)
console.log(laliga.teams)

// TODO Crear la planificación de jornadas y partidos de cada jornada.