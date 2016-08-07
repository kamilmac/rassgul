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

    playNote(note, duration, channel=1) {
        const 
            noteOnMessage = [0x90+(channel-1), note, 0x7f],
            noteOffMessage = [0x80+(channel-1), note, 0x40]
        this.send(noteOnMessage)
        this.send(noteOffMessage, window.performance.now() + duration)
    }

    send(data, timeout=null) {
        window.rass.output.send(data, timeout)
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
// let shiftTime = 32
// let shifts = [0, 3, 0, 2, 6]
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

// let counter = 0
// let shift = 0
// for(let i = 0; i < 10000; i++) {
//     let note = Math.floor(Math.random() * (magic.length - 0))
//     buffer.push(magic[note] + shifts[shift])
//     counter++
//     if (counter+1 == shiftTime) {
//         shift++
//         counter = 0
//         if (shift+1 == shifts.length) shift = 0
//     }
// }
