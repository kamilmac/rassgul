export const playStop = `
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
        <defs>
            <style>
                .cls-1{fill:#8cc63f;}
            </style>
        </defs>
        <title>playStop</title>
        <polygon class="cls-1" 
            points="150 0 0 0 0 150 150 0"
        />
    </svg>
`
    // <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.31 238.52">
    //     <defs>
    //         <style>
    //             .cls-1{fill:none;stroke:#000;}
    //             .cls-1,.cls-2{stroke-miterlimit:10;}
    //             .cls-2{fill:#ff1d25;stroke:#29abe2;stroke-width:12px;}
    //         </style>
    //     </defs>
    //     <title>test</title>
    //     <line class="cls-1" x1="0.4" y1="47.25" x2="107.03" y2="190.9"/>
    //     <line class="cls-1" x1="40.69" y1="23.08" x2="147.32" y2="166.73"/>
    //     <line class="cls-1" x1="43.94" y1="85.01" x2="150.58" y2="228.65"/>
    //     <rect class="cls-2" x="69.36" y="6" width="167.96" height="226.52"/>
    // </svg>

// <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.35 167.56">
//     <defs>
//         <style>.cls-1{fill:#f15a24;}</style>
//     </defs>
//     <title>playStop-icons</title>
//     <path class="cls-1" d="M-3.52.14V155.7c0,7.72,12,7.73,12,0V.14c0-7.72-12-7.73-12,0Z" transform="translate(3.52 5.86)"/>
//     <path class="cls-1" d="M158,149.7H2.48c-7.72,0-7.73,12,0,12H158c7.72,0,7.73-12,0-12Z" transform="translate(3.52 5.86)"/>
//     <path class="cls-1" d="M158-5.86H2.48c-7.72,0-7.73,12,0,12H158c7.72,0,7.73-12,0-12Z" transform="translate(3.52 5.86)"/>
// </svg>

// <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.27 91.27"><defs><style>.cls-1{fill:#ff1d25;fill-rule:evenodd;}</style></defs><title>playStop-icons</title><polygon class="cls-1" points="91.27 45.81 0 91.27 0 0 91.27 45.38 91.27 45.81"/></svg>

// function sendMiddleC( midiAccess, portID, note ) {
//   var noteOnMessage = [0x90, note, 0x7f];    // note on, middle C, full velocity
//   var output = midiAccess.outputs.get(portID);
//   output.send( noteOnMessage );  //omitting the timestamp means send immediately.
//   output.send( [0x80, note, 0x40], window.performance.now() + 5); // Inlined array creation- note off, middle C,  
//                                                                       // release velocity = 64, timestamp = now + 1000ms.
// }
// let port = null; 
// for(let a of midi.access.outputs) {
//     port = a[0]
// }
// console.log("port", port)
// let note = [60,61,63,60,61,63,60,61,65,60,60,52,52,68,72,73,0,52,0,52]
// count = 0
// setInterval(function(){
//     sendMiddleC(midi.access, port, note[count])
//     count++
//     if (count > note.length-1) count = 0
// },100)