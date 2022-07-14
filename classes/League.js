//una liga tendrá un conjunto de jornadas
//cada jornada tendrá un conjunto de partidos
//un partido es el enfrentamiento de dos equipos
//el desarrollo de un partido generará un resultado


//Para poder ejecutar export e import ECMA6, hay que modificar
//el package.json, añadiendo una propiedad al final
//"type": "module"

//Como exportamos sin default, en la recepción hay que utilizar
//las llaves de forma import {League} from ...
export class League{
  constructor(name, teams, config={}){
    this.name=name
    this.teams=teams
    //Hacemos que las instancias y las clases heredadas, ejecuten la función setup.
    //Esta función (que está definida más abajo), puede reescribirse en los hijos.
    this.setup(config)

    this.matches=[] // partidos
    this.matchDaySchedule=[] // planificacion de jornadas
    this.scores=[] // clasificación
  }

  //Función de configuraciones por defecto
  setup(config={}){
    const defaultConfig={rounds: 1}
    this.config=Object.assign(defaultConfig,config) //uso de una plantilla de configuración, asignando lo que venga en la llamada
  }

  setupTeams(teams){
    this.teams=[]
    for (let team of teams) {
      let teamObj=this.customizeTeam(team)
      this.teams.push(teamObj)
    }
  }

  customizeTeam(team){
    return {
      name: team,
      matchesWon:0,
      matchesDraw:0,
      matchesLose:0
    }
  }
}
