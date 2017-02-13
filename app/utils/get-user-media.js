import getUserMedia from 'getusermedia'
import Events from 'backbone-events-standalone'

navigator.getUserMedia = navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({ audio: false, video: { width: 320, height: 240 } },
    (stream) => {
        let video = document.querySelector('#video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
            Events.trigger('video-access-granted')
        };
    },
    (err) => {
        console.log("The following error occurred: " + err.name);
    });
} else {
    console.log("getUserMedia not supported");
}     