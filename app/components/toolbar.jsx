import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { player } from '../services/player'
import { playStop } from '../svg/toolbar-icons'

@observer
export class Toolbar extends Component {
    componentDidMount() {
        var s = Snap("#Layer_1");
        // var bigCircle = s.circle(150, 150, 100);
        // document.querySelector(".cls-2").animate({height: 10}, 500, mina.easein);
        let el = Snap("#Layer_1 .cls-2")
        el.animate(
            { width: 50 },
            400,
            mina.easein
        );
        // By default its black, lets change its attributes
        // bigCircle.attr({
        //     fill: "#bada55",
        //     stroke: "#000",
        //     strokeWidth: 5
        // });
    }
    render() {
        const cls = ( player.playing ) ? 
            'toolbar-buttons__play' : 
            'toolbar-buttons__play--stopped'
        const svg = {
            __html: playStop
        }
        return (
            <div className="toolbar">
                <div className={cls}
                    onClick={ player.toggle }>
                </div>
                <div dangerouslySetInnerHTML={svg} />
            </div>
        )
    }
} 
