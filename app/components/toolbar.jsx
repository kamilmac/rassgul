import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { player } from '../services/player'
import { IconPlayStop } from './iconPlayStop'

@observer
export class Toolbar extends Component {
    @observable active = false
    play() {
        this.active = !this.active
        player.toggle();
    }
    render() {
        // const cls = ( player.playing ) ? 
        //     'toolbar-buttons__play' : 
        //     'toolbar-buttons__play--stopped'
        return (
            <div className="toolbar">
                <div onClick={ this.play.bind(this) } >
                    <IconPlayStop active={this.active} />
                </div>
            </div>
        )
    }
} 
