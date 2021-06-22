const tags = require("../utils/tags")
const states = require("../utils/brazilianStates")
const religiosity = require("../utils/religiosity")
const politic = require('../utils/politicPreference')
const usuarios = require ('../utils/testUsuarios')
const tagsArray = require('../utils/tagsArray')


var queryTags = ["nintendo", "musica", "administracao"]
var queryReligiosity ="Ateu"
var queryPoliticPreference = "Centro"
var queryBrazilianState = "MG"

var  matriz = [[tagsArray[0]],[],[1]]
var pesoTags = 0

//PESO DAS TAGS
// for(let i=0; i<usuarios.length; i++){
//     for(let j=0; j<tagsArray.length;j++){
//         for (let k=0; k<usuarios[i].tags.length; k++){
//             if (tagsArray[j] === usuarios[i].tags[k]){
//                 pesoTags++
//             }
//         }   
//     }
//     //
//     matriz[1].push(pesoTags) 
//     peso=0 
// }

for(let i=0; i<usuarios.length; i++){
        for (let j=0; j<usuarios[i].tags.length; j++){
            for(let k=0; k<queryTags.length; k++){
                if (usuarios[i].tags[j] === queryTags[k]){
                    pesoTags++
                    console.log(usuarios[i].tags[j])
                }
            }
        }   
        matriz[1].push(pesoTags) 
        pesoTags=0 
}

for (let i=0; i<usuarios.length; i++){
    console.log("Usuario "+ usuarios[i].nome + "  Peso Tags: "+ matriz[1][i] )
}


