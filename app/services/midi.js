import {observable, action} from 'mobx'

class Midi {
    @observable initSuccess = false
    constructor() {
        this.init()
    }
    onMIDISuccess(midiAccess) {
        console.log('MIDI Access Object', midiAccess)
        this.initSuccess = true
        window.midi = {
            access: midiAccess,
            playNote: this.playNote
        }
    }
    onMIDIFailure(e) {
        console.log("No access to MIDI devices" + e)
    }
    playNote(note, duration) {
        console.log("Playing note", note, duration)
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
