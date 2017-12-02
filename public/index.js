var player;
var listID;

function onYouTubeIframeAPIReady(listID) {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        loadType: 'playlist',
        list: listID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }

    });
}

