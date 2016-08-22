import {observable, action, autorun} from 'mobx';
import {store} from './store'
import * as editor from './editor'


export const setTempo = (newTempo) => store.player.tempo = newTempo
export const setSwing = (newSwing) => store.player.swing = newSwing
export const toggle = () => {
    (!store.player.playing) ? play() : stop()
}
export const stop = () => {
    store.player.playing = false
    window.rass.loops = []
}
export const play = () => {
    editor.executeCode(store.editor.editorAccess)
    let tempo = 60/store.player.tempo/store.player.beat*1000
    store.player.playing = true
    store.player.counter = 1
    nextTick(tempo)
}
const newLoop = (divider, callback) => {
    window.rass.loops.push({divider, callback})
}
export const nextTick = (delay) => {
    const swing = store.player.swingDirection * (store.player.swing * delay)
    store.player.swingDirection *= -1
    setTimeout(() => {
        if (store.player.playing) nextTick(delay)
        window.rass.loops.map((loop) => {
            console.log("loop", loop)
            if ((store.player.counter-1) % (store.player.beat / loop.divider) == 0) {
                loop.callback()
            }
        })
        store.player.counter++
        if (store.player.counter > store.player.beat) store.player.counter = 1
    }, delay - swing)
}

window.rass = window.rass || {}
window.rass.loops = []
window.rass.newLoop = newLoop
// class Player {
//     @observable playing = false
//     @observable tempo = 120
//     @observable swing = 0
    
//     swingDirection = 1
//     beat = 4
//     counter = 1

//     constructor() {
//         window.rass = window.rass || {}
//         autorun(() => {
//             window.rass.playing = this.playing
//             window.rass.tempo = this.tempo
//         })
//         window.rass.loops = []
//         window.rass.newLoop = this.newLoop
//     }

//     newLoop(divider, callback) {
//         window.rass.loops.push({divider, callback})
//     }

//     @action stop = () => {
//         this.playing = false
//         window.rass.loops = []
//     }

//     @action play = () => {
//         let tempo = 60/this.tempo/this.beat*1000
//         this.playing = true
//         this.counter = 1
//         this.nextTick(tempo)
//     }

//     @action toggle = () => {
//         (!this.playing) ? this.play() : this.stop()
//     }

//     @action setTempo = (newTempo) => {
//         this.tempo = newTempo
//     }

//     @action setSwing = (newSwing) => {
//         this.swing = newSwing
//     }

//     nextTick(delay) {
//         const swing = this.swingDirection * (this.swing * delay)
//         this.swingDirection *= -1
//         setTimeout(()=>{
//             if (this.playing) this.nextTick(delay)
//             window.rass.loops.map((loop) => {
//                 if ((this.counter-1) % (this.beat / loop.divider) == 0) {
//                     loop.callback()
//                 }
//             })
//             this.counter++
//             if (this.counter > this.beat) this.counter = 1
//         }, delay - swing)
//     }
// };

// export const player = new Player
