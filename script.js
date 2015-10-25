var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//var player;
//  function onYouTubePlayerAPIReady() {
//    player = new YT.Player('ytplayer', {
//      height: '390',
//      width: '640',
//      videoId: '8QwqptWa5cU'
//    });
//  }

$(function(){
  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

// If you want to keep full screen on window resize
  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });
});
