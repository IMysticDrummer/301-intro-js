import {League} from "./League.js";

//Como exportamos con default, en la recepción hay que
//capturarlo sin llaves, de forma
//import FootballLeague from "..."
export default class FootballLeague extends League {
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