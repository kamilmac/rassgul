import {observable, action} from 'mobx'
import {store} from '../services/store'

export const playNote = (output, note, duration=50, channel=1) => {
    sendMidiMessage(
        output,
        [0x90+(channel-1), note, 0x7f]
    )
    sendMidiMessage(
        output, 
        [0x80+(channel-1), note, 0x40],
        window.performance.now() + duration
    )    
}

export const sendMidiMessage = (outputIndex=0, data, timeout=null) =>
    store.midiOutputs[outputIndex].send(data, timeout)

export const connect = () => 
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure)

const onMIDISuccess = (midiAccess) => {
    ((store.midiOutputs = getOutputs(midiAccess)).length <= 0) ?
    null : store.midi.initiated = true
    window.midiAccess = midiAccess
    console.log("outputs: ", getOutputs(midiAccess), midiAccess)
}

const onMIDIFailure = (e) => {
    console.log("No access to MIDI devices" + e)
}

const getOutputs = (midiAccess) => {
    let outputs = []
    for (let o of midiAccess.outputs) outputs.push(o[1])
    return outputs
}




















// class Midi {
//     @observable initSuccess = false
    
//     constructor() {
//         this.init()
//     }

//     onMIDISuccess(midiAccess) {
//         this.outputPorts = this.getPorts(midiAccess)
//         if (this.outputPorts.length <= 0) return 
//         this.initSuccess = true
//         window.rass = window.rass || {}
//         window.rass.outputs = []
//         this.outputPorts.forEach((e, i, a) => {
//             window.rass.outputs.push(midiAccess.outputs.get(e))
//         })
//         window.rass.access = midiAccess
//     }

//     onMIDIFailure(e) {
//         console.log("No access to MIDI devices" + e)
//     }

//     getPorts(midiAccess) {
//         let p = []
//         for (let port of midiAccess.outputs) {
//             p.push(port[0])
//         }
//         return p
//     }

//     playNote(output, note, duration, channel=1) {
//         const 
//             noteOnMessage = [0x90+(channel-1), note, 0x7f],
//             noteOffMessage = [0x80+(channel-1), note, 0x40]
//         this.send(output, noteOnMessage)
//         this.send(output, noteOffMessage, window.performance.now() + duration)
//     }

//     send(output=0, data, timeout=null) {
//         window.rass.outputs[output].send(data, timeout)
//     }

//     init() {
//         let ctx = this;
//         navigator.requestMIDIAccess().then(
//             this.onMIDISuccess.bind(ctx),
//             this.onMIDIFailure.bind(ctx)
//         )
//     }
// }

// export const midi = new Midi

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
