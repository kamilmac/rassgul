import {observable, action} from 'mobx'
import {midi} from './midi'

class VolcaSample {
    props = {
        level: 7,
        pan: 10,
        start: 40,
        length: 41,
        speed: 43,
        pitchInt: 44,
        pitchAttack: 45,
        pitchDecay: 46,
        ampAttack: 47,
        ampDecay: 48,
    }

    constructor() {
        this.init()
    }

    parseNote(note) {
        const 
            noteToSpeed = {
                '-12': -32,
                '-11': -30,
                '-10': -27,
                '-9': -24,
                '-8': -21,
                '-7': -19,
                '-6': -16,
                '-5': -13,
                '-4': -11,
                '-3': -8,
                '-2': -5,        
                '-1': -3,        
                '0': 0,
                '1': 3,
                '2': 5,
                '3': 8,
                '4': 11,
                '5': 13,
                '6': 16,
                '7': 19,
                '8': 21,
                '9': 24,
                '10': 27,
                '11': 30,
                '12': 32,
            },
            speed = noteToSpeed[note-60] + 64
        if(!speed) return 64
        return speed
    }

    play(padNumber, options) {
        const channel = padNumber
        if (!options) {
            midi.playNote(60, 50, channel); return
        }
        if (parseInt(options) === options) {
            midi.send([176+(channel-1), 43, window.rass.volcaSample.parseNote(options)])
            midi.playNote(60, 50, channel); return
        }
        if (typeof options === 'object') {
            for (let key in options) {
                sendMidiMessage([176, props[key], options[key]])
            }
        }
    }

    init() {
        window.rass.volcaSample = {
            play: this.play,
            parseNote: this.parseNote,
        }
    }
}

export const volcaSample = new VolcaSample
