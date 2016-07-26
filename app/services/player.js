import {observable, action, autorun} from 'mobx';

class Player {
    @observable playing = false;
    constructor() {
        window.midi = window.midi || {}
        autorun(() => {
            window.midi.playing = this.playing
        }) 
    }
    @action stop = () => {
        this.playing = false
    };
    @action play = () => {
        this.playing = true
    };
    @action toggle = () => {
        this.playing = !this.playing
    };
};

export const player = new Player
