import './css/main.css'
import React, {Component} from 'react'
import {Editor} from './components/editor'
import {Toolbar} from './components/toolbar'
import {midi} from './services/midi'
import {audio} from './services/audio'

export default class App extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <Editor />
            </div>
        )
    }
}
