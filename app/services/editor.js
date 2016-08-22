import ace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

export const attach = (id) => {
    const editor = ace.edit(id)
    editor.setTheme('ace/theme/monokai')
    editor.getSession().setMode('ace/mode/javascript')
    return editor
}

export const executeCode = (editor) => new Function(editor.getValue())()

export const initSaveEditorContentInterval = (editor, interval) => ({
    editor,
    saveInterval: setInterval(() => {
        localStorage.setItem('editorCode', editor.getValue())
    }, interval)
})

export const fillEditorFromLS = (editor) =>
    editor.setValue(localStorage.getItem('editorCode'))
