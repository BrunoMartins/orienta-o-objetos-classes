export class Personagem {//responsável por criar os personagens
    nome
    vida = 100
    mana = 100
    #level//ao fazer o encapsulamento impedimos o valor de receber uma alteração após a criação do personagem
    tipo
    descricao

    constructor(nome) {
        this.nome = nome
        this.#level = 1
        
    }

    aumentarLevel(){
        this.level+=1
    }

    diminuirLevel(){
        this.level-=1
    }

    set level(novoLevel) {
        if(novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel
        }
    }

    get level(){
        return this.#level
    }//como foi usado encapsulamento e necessario utilziar a função get para obter o resultado. retorna o valor de uma propriedade protegida que está sendo acessada fora da classe

    obterInsignia() {
        if (this.#level >= 5){
            return `Implacavel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`//como foi utilizado uma propriedade estatica, para acessar o tip e necessario acessar o constructor primeiro
    }

    static verificarVencedor(personagem1, personagem2) {//ao declarar como estático podemos chamar a funcao diretamente no objeto personagem, exemplo: console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))
        if (personagem1.level === personagem2.level) {
            return 'Empate!!!'
        }

        if (personagem1.level > personagem2.level) {
            return `${ personagem1.constructor.tipo } ${personagem1.nome} é o vencedor!`
        }

        return `${ personagem2.constructor.tipo } ${personagem2.nome} é o vencedor!`
    }
}