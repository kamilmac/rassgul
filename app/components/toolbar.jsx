import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import {player} from '../services/player'
import {midi} from '../services/midi'
import {IconPlayStop} from './iconPlayStop'

@observer
export class Toolbar extends Component {
    @observable active = false
    
    play() {
        if (!midi.initSuccess) return
        this.active = !this.active
        player.toggle()
    }

    tempoChange = (e) => {
        if (e.key === 'Enter') {
            player.setTempo(event.target.value = (parseInt(event.target.value) || player.tempo))
        }
    }
    
    swingChange = (event) => {
        if (event.key === 'Enter') {
            player.setSwing(event.target.value = (parseFloat(event.target.value) || player.swing).toFixed(1))
        }
    }

    render() {
        return (
            <div className="toolbar">
                <div onClick={this.play.bind(this)}>
                    <IconPlayStop active={this.active} disabled={!midi.initSuccess} />
                </div>
                <span>tempo</span>
                <input type="text" placeholder={player.tempo} onKeyPress={this.tempoChange} />
                <span>swing</span>
                <input type="text" placeholder={player.swing} onKeyPress={this.swingChange} />
            </div>
        )
    }
} 
