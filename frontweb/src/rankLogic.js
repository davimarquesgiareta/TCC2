const tags = require("../utils/tags")
const states = require("../utils/brazilianStates")
const religiosity = require("../utils/religiosity")
const politic = require('../utils/politicPreference')
const usuarios = require ('../utils/testUsuarios')
const tagsArray = require('../utils/tagsArray')


var queryTags = ["nintendo", "musica", "administracao","balada", "festa", "bisc"]
var queryReligiosity ="Ateu"
var queryPoliticPreference = "Centro"
var queryBrazilianState = "MG"

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
//PESO RELIOSIDADE


//

for (let i=0; i<usuarios.length; i++){
    console.log("Usuario "+ usuarios[i].nome + "  Peso Tags: "+ matriz[1][i] )
}

var maior = 0
var indiceMaior = 0
var indicesInfluencers =[]
var influencers = []



    for(let i=0; i<matriz[1].length; i++){
        if(matriz[1][i] > maior){
            maior = matriz[1][i]
            indiceMaior = i
            influencers.push(maior)
            indicesInfluencers.push(indiceMaior)
        } 
        maior=0
    }
    
console.log("influencers", influencers)
console.log("indice", indicesInfluencers)

console.log("\n\nMelhores influencers:")

for(let i=0; i<influencers.length ; i++ ){
    console.log( usuarios[indicesInfluencers[i]].nome)
}

  

const nomes = ["davi", "bola", "danilo", "carica", "doutora vanessa", 'murilao couto' , 'chaves do 8']

const influenzers = [
  [0,0],
  [4,1],
  [2,2],
  [5,3],
  [7,4],
  [0,5],
  [0,6]

]

var influencesSort = []
  influencesSort = influenzers.sort( function(x,y){
        return y[0] - x[0]  
    } )
console.log(influencesSort) 

console.log('KIIIII')
var tam = (influencesSort[0])[0]

for (let index = 0; index < influencesSort.length; index++) {
    console.log(nomes[(influencesSort[index])[1]])
}