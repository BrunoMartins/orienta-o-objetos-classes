import { Personagem } from "./personagem.js"

export class Mago extends Personagem { // extends herda as caracteristicas da classe personagem
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'//Além de economizar memória, uma vantagem é que propriedades estáticas podem ser compartilhadas entre todas as instâncias da classe. Isso significa que, se uma instância modificar o valor da propriedade estática, todas as outras instâncias terão acesso a essa modificação. Isso pode ser útil em situações em que é necessário armazenar um valor que seja comum a todas as instâncias.
    static descricao = 'O mago é implacável!'
 
   constructor(nome,elementoMagico, levelMagico, inteligencia) {
        super(nome)//como foi utilizado o extends para poder utilizar as classes de Personagem é preciso utilizar a classe pai Super
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