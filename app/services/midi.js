import {observable, action} from 'mobx'

class Midi {
    @observable initSuccess = false
    
    outputPort = null
    
    constructor() {
        this.init()
    }

    onMIDISuccess(midiAccess) {
        this.outputPort = this.getPort(midiAccess)
        if (!this.outputPort) return 
        this.initSuccess = true
        window.rass = window.rass || {}
        window.rass.output = midiAccess.outputs.get(this.outputPort)
        window.rass.access = midiAccess
        window.rass.playNote = this.playNote
    }

    onMIDIFailure(e) {
        console.log("No access to MIDI devices" + e)
    }

    getPort(midiAccess) {
        let p = null
        for (let port of midiAccess.outputs) {
            p = port[0]
        }
        return p
    }

    playNote(note, duration) {
        const noteOnMessage = [0x90, note, 0x7f]
        window.rass.output.send(noteOnMessage)
        window.rass.output.send([0x80, note, 0x40], window.performance.now() + duration)
    }

    init() {
        let ctx = this;
        navigator.requestMIDIAccess().then(
            this.onMIDISuccess.bind(ctx),
            this.onMIDIFailure.bind(ctx)
        )
    }
}

export const midi = new Midi


// let buffer = []
// let min = 30
// let max = 80
// let notes = [
//     {note:50,chance:4},
//     {note:62,chance:10},
//     {note:52,chance:1},
//     {note:74,chance:1},
//     {note:49,chance:1},
//     {note:0,chance:30},
// ]
// let magic = []

// rass.newLoop(4, function() {
//     if(!buffer.length) return
//     rass.playNote(buffer.shift(), 20)
// })

// for(let i = 0; i < notes.length; i++) {
//     for(let j = 0; j < notes[i].chance; j++) {
//         magic.push(notes[i].note)
//     }
// }

// for(let i = 0; i < 10000; i++) {
//     let note = Math.floor(Math.random() * (magic.length - 0))
//     buffer.push(magic[note])
// }
