import {observable, action} from 'mobx'

class Midi {
    @observable initSuccess = false
    outputPort = null
    constructor() {
        this.init()
    }
    onMIDISuccess(midiAccess) {
        this.outputPort = this.getPort(midiAccess)
        if(!this.outputPort) return 
        this.initSuccess = true
        window.rass = window.rass || {}
        window.rass.output = midiAccess.outputs.get(this.outputPort)
        window.rass.access = midiAccess
        window.rass.playNote = this.playNote
    }
    onMIDIFailure(e) {
        console.log("No access to MIDI devices" + e)
    }
    getPort (midiAccess) {
        let p = null
        for(let port of midiAccess.outputs) {
            p = port[0]
        }
        return p
    }
    playNote(note, duration) {
        const noteOnMessage = [0x90, note, 0x7f]
        window.rass.output.send( noteOnMessage )
        window.rass.output.send( [0x80, note, 0x40], window.performance.now() + duration)
    }
    loop(callback, divider) {

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
