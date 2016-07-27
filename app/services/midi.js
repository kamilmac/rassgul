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
        window.midi = {
            output: midiAccess.outputs.get(this.outputPort),
            access: midiAccess,
            playNote: this.playNote
        }
    }
    onMIDIFailure(e) {
        console.log("No access to MIDI devices" + e)
    }
    getPort (midiAccess) {
        let p = null
        for(let port of midiAccess.outputs) {
            p = port[0]
        }
        console.log("GOTTET PORT", p)
        return p
    }
    playNote(note, duration) {
        const noteOnMessage = [0x90, note, 0x7f]
        window.midi.output.send( noteOnMessage )
        window.midi.output.send( [0x80, note, 0x40], window.performance.now() + duration)
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
