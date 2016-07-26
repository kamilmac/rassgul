import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { player } from '../services/player'
import { editor } from '../services/editor'

@observer
export class Editor extends Component {
    constructor() {
        super()
        this.pls = player.state
    }
    componentDidMount() {
        editor.attach()
    }
    render() {
        if (player.playing) editor.executeCode()
        return (
            <div id="editor"></div>
        )
    }
} 
