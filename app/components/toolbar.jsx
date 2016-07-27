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
        if(!midi.initSuccess) return
        this.active = !this.active
        player.toggle();
    }
    render() {
        return (
            <div className="toolbar">
                <div onClick={this.play.bind(this)}>
                    <IconPlayStop active={this.active} disabled={!midi.initSuccess} />
                </div>
            </div>
        )
    }
} 
