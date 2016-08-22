import React, {Component} from 'react'
import './css/main.css'
import './services/ms20'
import * as editor from './services/editor'
import * as midi from './services/midi'
import {Toolbar} from './components/toolbar'
import {volcaSample} from './services/volca-sample'
import {store} from './services/store'

const startApp = () => {
    store.editor.editorAccess = editor.attach('editor')
    midi.connect()
    // editor
    //     .attach('editor')
    //     .fillEditorFromLS
    //     .initSaveEditorContentInterval(5000)
    editor.fillEditorFromLS(store.editor.editorAccess)
    editor.initSaveEditorContentInterval(store.editor.editorAccess, 5000)
}

export default class App extends Component {
    componentDidMount() { startApp() }
    render() {
        return (
            <div>
                <Toolbar />
                <div id="editor"></div>
            </div>
        )
    }
}
