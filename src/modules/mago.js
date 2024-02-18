import { Personagem } from "./personagem.js"

export class Mago extends Personagem { // extends herda as caracteristicas da classe personagem
    elementoMagico
    levelMagico
    inteligencia
    tipo = 'Mago'
 
   constructor(nome,level,elementoMagico, levelMagico, inteligencia) {
        super(nome,level)//como foi utilizado o extends para poder utilizar as classes de Personagem é preciso utilizar a classe pai Super
         this.elementoMagico = elementoMagico
         this.levelMagico = levelMagico
         this.inteligencia =  inteligencia
     }

     obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
 
 }