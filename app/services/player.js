import {observable, action, autorun} from 'mobx';

class Player {
    @observable playing = false
    @observable tempo = 120
    @observable swing = 0
    
    swingDirection = 1
    beat = 4
    counter = 1

    constructor() {
        window.rass = window.rass || {}
        autorun(() => {
            window.rass.playing = this.playing
            window.rass.tempo = this.tempo
        })
        window.rass.loops = []
        window.rass.newLoop = this.newLoop
    }

    newLoop(divider, callback) {
        window.rass.loops.push({divider, callback})
    }

    @action stop = () => {
        this.playing = false
        window.rass.loops = []
    }

    @action play = () => {
        let tempo = 60/this.tempo/this.beat*1000
        this.playing = true
        this.counter = 1
        this.nextTick(tempo)
    }

    @action toggle = () => {
        (!this.playing) ? this.play() : this.stop()
    }

    @action setTempo = (newTempo) => {
        this.tempo = newTempo
    }

    @action setSwing = (newSwing) => {
        this.swing = newSwing
    }

    nextTick(delay) {
        const swing = this.swingDirection * (this.swing * delay)
        this.swingDirection *= -1
        setTimeout(()=>{
            if (this.playing) this.nextTick(delay)
            window.rass.loops.map((loop) => {
                if ((this.counter-1) % (this.beat / loop.divider) == 0) {
                    loop.callback()
                }
            })
            this.counter++
            if (this.counter > this.beat) this.counter = 1
        }, delay - swing)
    }
};

export const player = new Player
