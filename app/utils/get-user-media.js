import getUserMedia from 'getusermedia'
import Events from 'backbone-events-standalone'

navigator.getUserMedia = navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
    getUserMedia({ audio: false, video: true },
    (err, stream) => {
        let video = document.querySelector('#video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
            Events.trigger('video-access-granted')
        };
    });
} else {
    console.log("getUserMedia not supported");
}     