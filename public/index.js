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

var allLinks = [];
function insertNewLink(title, photoURL) {
  var context = {
    title: title,
    photoURL: photoURL
  }

  var navBarLinks = document.getElementById('navBar');
  var html = Handlebars.templates['linkTemplate'](context);
  navBarLinks.innerHTML += html;
};