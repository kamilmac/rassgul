import {observable} from 'mobx';

class Player {
    @observable playing = false
    @observable tempo = 120
    @observable swing = 0
    counter = 1
    beat = 4
    swingDirection = 1
}

class Midi {
    @observable initiated = false
    midiAccess = {}
    midiOutputs = []
}

class Editor {
    @observable codeContent = ""
    @observable initiated = false
    editorAccess = {}
    codeSaveIntervalTime = 4000
}

export const store = {
    editor: new Editor,
    midi: new Midi,
    player: new Player,
    volca: {
        props: {
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
        },
        speedShift: 64,
        noteToSpeed: {
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
    }
}


// const createStore = (storePrototype) => {
//     traverse(storePrototype)
// }

// const traverse = (obj, path=[], readyObj={}) => {
//     Object.keys(obj).forEach((key)=>{
//         path.push(key)
//         if(key is markForObservable) {
//             readyObj = extendObservable(obj[key], path, readyObj)
//         }
//         if(typeof obj[key] === 'object') {
//             traverse(obj[key], path, readyObj)
//         } else {
//             path.pop()
//         }
//     })
// }

// const extendObservable = (value, path) => {
//     return path.reduce((path, agr={}) => {
//         // obj[e] = obj[e] || {}
//         // if (i === (a.length-1)) {
//         //     obj[e] = value
//         //     return
//         // }
//         // obj = obj[e]
//         return agr[elem]
//     })
// }
// var array = ['opt1','sub1','subsub1','subsubsub1'];
// var object = {}, o = {};
// for(var i = 0; i < array.length; i++) {
//     o = o[array[i]] = {};
//     console.log(o)
// }

