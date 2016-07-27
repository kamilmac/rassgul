import React, {Component} from 'react'

export class IconPlayStop extends Component {
    svg = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 120.29 122.84">
            <defs>
                <style>
                    .cls-1{fill:#3cd895;fill-rule:evenodd;}
                    .disabled{fill:#5d5d5d;fill-rule:evenodd;}
                </style>
            </defs>
            <title>playStop</title>
            <path id="start" class="cls-1" d="" transform="translate(-39.03 -31.62)"/>
        </svg>
    `
    startPath = null
    firstPath = 'M39.53,153.5V32.57L127.44,93h0Z'
    secondPath = 'M51.9,141.1V44.9h96.2v96.2H51.9'
    componentDidMount() {
        this.startPath = Snap.select('#start')
        this.startPath.attr({d: this.firstPath})
        this.disable()
    }
    animate(path) {
        this.startPath.animate({d: path}, 300, mina.bounce)
    }
    disable() {
        this.startPath.attr({class: 'cls-1 disabled'})
    }
    enable() {
        this.startPath.attr({class: 'cls-1'})
    }
    render() {
        if(this.startPath) {
            switch(this.props.disabled) {
                case true: this.disable(); break 
                case false: this.enable(); break 
            }
            switch(this.props.active) {
                case true: this.animate(this.secondPath); break 
                case false: this.animate(this.firstPath); break 
            }
        }
        return (
            <div id="svg1"><div dangerouslySetInnerHTML={{__html: this.svg}} /></div>
        )
    }
}
