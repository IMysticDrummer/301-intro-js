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

class FootballLeague extends League {
  constructor(name, teams, config) {
    super(name, teams, config)
  }

  //Reescribimos el setup de configuración para que sea más específica del tipo de liga de football
  setup(config={}){
    const defaultConfig={
      rounds:1,
      pointsPerWin:3,
      pointsPerDraw:1,
      pointsPerLose:0
    }

    this.config=Object.assign(defaultConfig,config)
  }

  customizeTeam(teamName){ //Este método es llamado desde el constructor. Al llamar al padre, ejecuta el
                            //el customizeTeam, pero como el scope es el de FootballLeague, ejecuta este
    const teamObj=super.customizeTeam(teamName)

    return {
      ...teamObj,
      points: 0,
      goalsFor:0,
      goalsAgainst:0
    }
    /*
    teamObj.points=0
    teamObj.goalsFor=0
    teamObj.goalsAgainst=0
    return teamObj

    Siempre es conveniente trabajar con una copia de los
    datos originales, para no modificarlos por error.
    Por eso es mejor utilizar el spread operator arriba,
    en vez coger el objeto originar y modificarlo.
    */
  }
}

const laliga=new FootballLeague('La Liga', TEAMS)
console.log(laliga.teams)

// TODO Crear la planificación de jornadas y partidos de cada jornada.