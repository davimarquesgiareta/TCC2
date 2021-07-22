const tags = require("../utils/tags")
const states = require("../utils/brazilianStates")
const religiosity = require("../utils/religiosity")
const politic = require('../utils/politicPreference')
const usuarios = require ('../utils/testUsuarios')
const tagsArray = require('../utils/tagsArray')
const politicPreference = require("../utils/politicPreference")

var queryTags = ["nintendo", "musica", "administracao","balada", "festa", "bisc"]
var queryReligiosity ="Ateu"
var queryPoliticPreference = "Centro"
var queryBrazilianState = "MG"
var queryFollowers = 2000
var queryConditionFollowers = "major"

var  matriz = [[tagsArray[0]],[],[1]]
var pesoTags = 0

//PESO TAGS
for(let i=0; i<usuarios.length; i++){
  for (let j=0; j<usuarios[i].tags.length; j++){
      for(let k=0; k<queryTags.length; k++){
          if (usuarios[i].tags[j] === queryTags[k]){
              pesoTags++
          }
      }
  }   
  matriz[1].push(pesoTags) 
  pesoTags=0 
}
//OUTROS PESOS
const religiosityWeight = 1
const politcPreferenceWeight =1
const queryBrazilianStateWeight = 1
const followersWeight = 5

// Preenchimento dos arrays que usarão pra ordenar
const names = []
const influenzers = []

for (let i=0; i<usuarios.length; i++){
    let othersWeight = 0
    names.push(usuarios[i].nome)
    usuarios[i].politic === queryPoliticPreference ? othersWeight+= politcPreferenceWeight: ""
    usuarios[i].religiosity === queryReligiosity ? othersWeight+= religiosityWeight : ""
    usuarios[i].state === queryBrazilianState ? othersWeight+= queryBrazilianStateWeight : ""
    usuarios[i].followers >= queryFollowers ? othersWeight+= followersWeight : ""
    influenzers.push([matriz[1][i]+othersWeight, i])

    console.log("Usuario "+ usuarios[i].nome + "  Peso Tags: "+ matriz[1][i] + "  Outros Pesos:  " + othersWeight)
    
}

// ORDENDANDO EM ORDEM DECRESCENTE, OU SEJA O MAIS RELEVANETE PRO MENOS RELEVANTE
var influencesSort = []
influencesSort = influenzers.sort( function(x,y){
        return y[0] - x[0]  
    } )

var tam = (influencesSort[0])[0]

  for (let index = 0; index < influencesSort.length; index++) {
    console.log(names[(influencesSort[index])[1]])
  }


 