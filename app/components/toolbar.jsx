import React from 'react'
import {observer} from 'mobx-react'
import * as player from '../services/player'
import {store} from '../services/store'
import {IconPlayStop} from './iconPlayStop'

const play = () => {
    (!store.midi.initiated) ? null : player.toggle()
}

const tempoChange = (e) => {
    (e.key === 'Enter') ?
        player.setTempo(event.target.value = (parseInt(event.target.value) || store.player.tempo))
        : null
}

const swingChange = (event) => {
    (event.key === 'Enter') ?
        player.setSwing(event.target.value = (parseFloat(event.target.value) || store.player.swing).toFixed(1))
        : null
}

export const Toolbar = observer(() =>  
    <div className="toolbar">
        <div onClick={play}>
            <IconPlayStop active={store.player.playing} disabled={!store.midi.initiated} />
        </div>
        <span>tempo</span>
        <input type="text" placeholder={store.player.tempo} onKeyPress={tempoChange} />
        <span>swing</span>
        <input type="text" placeholder={store.player.swing} onKeyPress={swingChange} />
    </div>
)
