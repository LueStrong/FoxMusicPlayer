var play = document.querySelector('#play')
var vol = document.querySelector('#vol')
var audio = document.querySelector('#music')
var musicBar = document.querySelector('.music-progress')
var playedBar = document.querySelector('.music-played')
var voiceBar = document.querySelector('.vol-progress')
var voicedBar = document.querySelector('.vol-voled')
var currentTime = document.getElementById('current-time') // 当前音乐时间
var totalTime = document.getElementById('total-time') // 当前音乐时间

audio.volume = 0.8;
var voicedBarWidth = (audio.volume / 1) * voiceBar.clientWidth;
voicedBar.style.width = voicedBarWidth + 'px';

// (function () {
//     var fen = parseInt(audio.duration / 60);
//     var miao = parseInt(audio.duration % 60);
//     if (miao < 10) {
//       miao = '0'+miao;
//     }
//     totalTime.innerHTML = `${fen}:${miao}`
//   })();


play.addEventListener('click', function(){
    toggleMusic()
    toggleClass(play, 'play')
    toggleClass(play, 'pause')
})

vol.addEventListener('click', function(){
    toggleVol()
    toggleClass(vol, 'vol')
    toggleClass(vol, 'mute')
})

musicBar.onclick = function (event) {
		var musicBarWidth = musicBar.clientWidth;
		var newCurrentTime = (event.offsetX / musicBarWidth) * audio.duration;
		audio.currentTime = newCurrentTime;
		var playedBarWidth = (audio.currentTime / audio.duration) * musicBarWidth;
		playedBar.style.width = playedBarWidth + 'px';
	};

setInterval(function updatePlayedBar (){
		var musicBarWidth = musicBar.clientWidth;
		var playedBarWidth = (audio.currentTime / audio.duration) * musicBarWidth;
		playedBar.style.width = playedBarWidth + 'px';

    if (audio.currentTime % 60 < 10) {
    	currentTime.innerHTML = parseInt(audio.currentTime / 60) + ':0' + parseInt(audio.currentTime % 60);
    } else {
    	currentTime.innerHTML = parseInt(audio.currentTime / 60) + ':' + parseInt(audio.currentTime % 60);
    }

		if(audio.currentTime === audio.duration){
      play.click()
      audio.pause()
    }

	}, 1000);

voiceBar.onclick = function (event) {
		var voiceBarWidth = voiceBar.clientWidth;
		var newVolume = (event.offsetX / voiceBarWidth);
		audio.volume = newVolume;
  	// 音量大小更新
  	var voicedBarWidth = (audio.volume / 1) * voiceBarWidth;
  	voicedBar.style.width = voicedBarWidth + 'px';
  };

var toggleMusic = function() {
  if (audio.paused) {
    audio.play()
  }else {
    audio.pause()
  }
}

var toggleVol = function() {
  if (!audio.muted) {
			audio.muted = true;
			voicedBar.style.width = 0 +'px';
		}else {
			audio.muted = false;
			var voiceBarWidth = voiceBar.clientWidth;

      var voicedBarWidth = (audio.volume / 1) * voiceBarWidth;
			voicedBar.style.width = voicedBarWidth + 'px';
    }
}

var toggleClass = function (element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}
