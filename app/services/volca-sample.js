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

    parseSpeed(note) {
        const
            shift = 64,
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
            speed = noteToSpeed[note-60] + shift
        if(!speed) return shift
        return speed
    }

    play(padNumber, props) {
        const channel = padNumber
        if (!props) {
            midi.playNote(1, 60, 50, channel); return
        }
        if (parseInt(props) === props) {
            midi.send(1, [
                176 + (channel-1), 
                43,
                window.rass.volcaSample.parseSpeed(props)
            ])
            midi.playNote(1, 60, 50, channel); return
        }
        if (typeof props === 'object') {
            for (let key in props) {
                modify(channel, key, props[key])
            }
        }
    }

    modify(padNumber, prop, value) {
        const channel = padNumber
        midi.send(1, [
            176 + (channel-1), 
            this.props[prop],
            value
        ])
    }

    init() {
        window.rass.volcaSample = {
            play: this.play,
            modify: this.modify,
            parseSpeed: this.parseSpeed,
        }
    }
}

export const volcaSample = new VolcaSample
