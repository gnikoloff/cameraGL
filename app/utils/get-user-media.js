import getUserMedia from 'getusermedia'
import Events from 'backbone-events-standalone'

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
    document.querySelector('#unsupport').style.display = 'none'
}     