import React, { Component } from 'react'

export class IconPlayStop extends Component {
    svg = `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 120.29 122.84">
            <defs>
                <style>
                    .cls-1{fill:#8cc63f;fill-rule:evenodd;}
                </style>
            </defs>
            <title>Untitled-10</title>
            <path id="start" class="cls-1" d="" transform="translate(-39.03 -31.62)"/>
        </svg>
    `
    firstPath = 'M39.53,153.5V32.57L127.44,93h0Z'
    secondPath = 'M39.53,153.5V32.57H160.47V153.5Z'
    startPath = null
    componentDidMount() {
        this.startPath = Snap.select('#start') 
        this.startPath.attr({ d: this.firstPath })
    }
    animate(path) {
        if(!this.startPath) return
        this.startPath.animate({d: path}, 300, mina.bounce)
    }
    render() {
        switch (this.props.active) {
            case true: this.animate(this.secondPath); break 
            case false: this.animate(this.firstPath); break 
        }
        return (
            <div id="svg1"><div dangerouslySetInnerHTML={{ __html: this.svg }} /></div>
        )
    }
}