// Slot Machine

class SlotMachine {
    constructor(){
        console.log('Bienvenid@ al casino, ¡buena suerte!')
        this.coins = 0
    }
    play = () => {
        this.coins++
        console.log(`Comienza la partida! Esta máquina tiene %c${this.coins} ${this.coins>1?'monedas':'moneda'}!`,`color:mediumvioletred`)

        let slot1 = Math.random() > .5
        let slot2 = Math.random() > .5
        let slot3 = Math.random() > .5

        const win  = () => {
            console.log(`%cFelicidades! Has ganado ${this.coins>1?'las '+this.coins:'la'} ${this.coins>1?'monedas':'moneda'}!`,`color: seagreen`)
            this.coins = 0
        }
        const lose = () => console.log('%cMala suerte! Has perdido...',`color: indianred`)
        
        slot1&&slot2&&slot3 === true ? win(this.coins) : lose()
    }
}

const machine1 = new SlotMachine()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()