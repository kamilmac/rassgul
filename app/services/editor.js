import ace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Editor {
    editor = null
    saveIntervalTime = 4000
    
    attach() {
        this.editor = ace.edit("editor")
        this.editor.setTheme("ace/theme/monokai")
        this.editor.getSession().setMode("ace/mode/javascript")
        this.loadFromLS()
        this.savePeriodically()
    }

    executeCode() {
        console.log("Executing code")
        const code = this.editor.getValue()
        new Function(
            `
                ${code}
            `
        )()
    }

    savePeriodically() {
        setInterval(() => {
            this.saveToLS()
        }, this.saveIntervalTime)
    }

    saveToLS() {
        localStorage.setItem('editorCode', this.editor.getValue())
    }

    loadFromLS() {
        let saved = localStorage.getItem('editorCode')
        console.log(saved)
        if (!saved) return
        this.editor.setValue(saved)
    }
};

export const editor = new Editor
