class Editor {
    editor: null
    
    attach() {
        this.editor = ace.edit("editor")
        this.editor.setTheme("ace/theme/monokai")
        this.editor.getSession().setMode("ace/mode/javascript")
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
};

export const editor = new Editor
