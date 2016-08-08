import {midi} from './midi'

class Ms20 {
    constructor() {
        this.init()
    }

    play(note) {
        midi.playNote(0, 60, 50); return
    }

    init() {
        window.rass.ms20 = {
            play: this.play,
        }
    }
}

export const ms20 = new Ms20
