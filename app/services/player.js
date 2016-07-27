import {observable, action, autorun} from 'mobx';

class Player {
    @observable playing = false
    @observable tempo = 120
    interval = null
    beat = 8
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
        window.rass.loops.push({ divider, callback })
    }
    @action stop = () => {
        this.playing = false
        clearInterval(this.interval)
        window.rass.loops = []
    };
    @action play = () => {
        this.playing = true
        let i = 1
        console.log("PLAYING")
        this.interval = setInterval(()=>{
            window.rass.loops.map((loop) => {
                if ((i-1) % (this.beat / loop.divider) == 0) {
                    loop.callback()
                    console.log("interval start", i)
                } 
            })
            i++
            if(i>this.beat) i = 1
        }, 60/this.tempo/this.beat*1000)
    };
    @action toggle = () => {
        if(!this.playing) {
            this.play()
        } else {
            this.stop()
        }
    };
};

export const player = new Player
