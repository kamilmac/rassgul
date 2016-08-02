import {observable, action} from 'mobx'

class Audio {
    constructor() {
        this.init()
    }

    init() {
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia)
        var ctx = new (window.AudioContext || window.webkitAudioContext)()

        navigator.getUserMedia (
            // constraints: audio and video for this app
            {
                audio: true
                // video: true
            },

            // Success callback
            function(stream) {
                // video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                // video.onloadedmetadata = function(e) {
                //     video.play();
                //     video.muted = 'true';
                // };

                // Create a MediaStreamAudioSourceNode
                // Feed the HTMLMediaElement into it
                var source = ctx.createMediaStreamSource(stream);

                
var Reverb = require('soundbank-reverb')
var reverb = Reverb(ctx)
reverb.connect(ctx.destination)
 
reverb.time = 1 //seconds 
reverb.wet.value = 0.7
reverb.dry.value = 0.3
 
reverb.filterType = 'lowpass'
reverb.cutoff.value = 10000 //Hz 
source.connect(reverb)

                // var delay = ctx.createDelay();
                // delay.delayTime.value = 0.5;

                // var feedback = ctx.createGain();
                // feedback.gain.value = 0.8;

                // delay.connect(feedback);
                // feedback.connect(delay);

                // source.connect(delay);
                // source.connect(ctx.destination);
                // delay.connect(ctx.destination);
                



                // Create a biquadfilter
                // var biquadFilter = audioCtx.createBiquadFilter();
                // biquadFilter.type = "lowpass";
                // biquadFilter.frequency.value = 400;
                // biquadFilter.gain.value = 1;

                // connect the AudioBufferSourceNode to the gainNode
                // and the gainNode to the destination, so we can play the
                // music and adjust the volume using the mouse cursor
                // source.connect(biquadFilter);
                // biquadFilter.connect(audioCtx.destination);

                // Get new mouse pointer coordinates when mouse is moved
                // then set new gain value

                // range.oninput = function() {
                //     biquadFilter.gain.value = range.value;
                // }

            },

            // Error callback
            function(err) {
                console.log('The following gUM error occured: ' + err);
            }
        );
    }
}

export const audio = new Audio
