$(document).ready(function() {


// SUBMIT FORM, input sentence
var $form = $('#mood-form');
// var $button = $('.button');
/*
	TEACHER NOTE:
	* Use on submit on the form instead of click on the button, you get the enter for free
*/

function getMoods(word) {
	var moods = [];
	for (var mood in moodData) {
		var kw = moodData[mood];
		var includesValue = kw.includes(word);

		// console.log(includesValue);
		// console.log(kw);
		if (includesValue) {
			// console.log(mood);
			moods.push(mood)
		}
	}
	return moods;
}

// two seperate functions
// loop through song dataset

function getSongs(moods) {
	var songs = [];
	// why doesnt console.log(songs); work anywhere?
	for (var id in songData) {
		var song = songData[id];

		// console.log(songs[moods]);
		var songMoods = song.moods;
		// the song mood is that part of the song data set 



		songMoods.forEach(function(songMood) {
		// if the input moods includes the songMood AND the song array doesn't already have the song/id
		if (moods.includes(songMood) && !songs.includes(id)) {
			songs.push(id)
		}

		})

	}
	return songs;
}


// function to build widget
// TODO- instead of ID should it be songs?
function buildWidget(songId) {
	
	var $player = $('<div class="player"></div>');
	var $iframe = $('<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay">');
	// concat first part + song id + third part as a new string
	// put into iframe url

	var baseURL = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + songId + '&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
	$iframe.attr('src', baseURL);
	$player.append($iframe);
	return $player;

		// $iframe.attr('src',$iframeURL);
		// $player.append($iframe);
		// $audiobox.append($player);

}




// START OF SUBMIT FUNCTION

$form.on('submit', function(e) {
	e.preventDefault();
	var $input = $form.find('.moodInput'); // this did not work previously because of the curly brackets in the html, see note there
	var value = $input.val();
	// console.log(value);
	var moods = getMoods(value); // ["happy"]
	var songs = getSongs(moods);

	console.log(moods)
	console.log(songs)
	var $widgets = songs.map(buildWidget);
	var $audiobox = $('.audio-box');
	$audiobox.append($widgets);
});







	
	





// sample JS for soundcloud
var SC=SC||{};SC.Widget=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function o(n){return!!(n&&n.constructor&&n.call&&n.apply)}function i(n){return!(!n||1!==n.nodeType||"IFRAME"!==n.nodeName.toUpperCase())}function a(n){var t,e=!1;for(t in b)if(b.hasOwnProperty(t)&&b[t]===n){e=!0;break}return e}function s(n){var t,e,r;for(t=0,e=I.length;t<e&&(r=n(I[t]),r!==!1);t++);}function u(n){var t,e,r,o="";for("//"===n.substr(0,2)&&(n=window.location.protocol+n),r=n.split("/"),t=0,e=r.length;t<e&&t<3;t++)o+=r[t],t<2&&(o+="/");return o}function c(n){return n.contentWindow?n.contentWindow:n.contentDocument&&"parentWindow"in n.contentDocument?n.contentDocument.parentWindow:null}function l(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(n[t]);return e}function d(n,t,e){e.callbacks[n]=e.callbacks[n]||[],e.callbacks[n].push(t)}function E(n,t){var e,r=!0;return t.callbacks[n]=[],s(function(t){if(e=t.callbacks[n]||[],e.length)return r=!1,!1}),r}function f(n,t,e){var r,o,i=c(e);return!!i.postMessage&&(r=e.getAttribute("src").split("?")[0],o=JSON.stringify({method:n,value:t}),"//"===r.substr(0,2)&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),void i.postMessage(o,r))}function p(n){var t;return s(function(e){if(e.instance===n)return t=e,!1}),t}function h(n){var t;return s(function(e){if(c(e.element)===n)return t=e,!1}),t}function v(n,t){return function(e){var r=o(e),i=p(this),a=!r&&t?e:null,s=r&&!t?e:null;return s&&d(n,s,i),f(n,a,i.element),this}}function S(n,t,e){var r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r],n[i]=v(i,e)}function R(n,t,e){return n+"?url="+t+"&"+g(e)}function g(n){var t,e,r=[];for(t in n)n.hasOwnProperty(t)&&(e=n[t],r.push(t+"="+("start_track"===t?parseInt(e,10):e?"true":"false")));return r.join("&")}function m(n,t,e){var r,o,i=n.callbacks[t]||[];for(r=0,o=i.length;r<o;r++)i[r].apply(n.instance,e);(a(t)||t===L.READY)&&(n.callbacks[t]=[])}function w(n){var t,e,r,o,i;try{e=JSON.parse(n.data)}catch(a){return!1}return t=h(n.source),r=e.method,o=e.value,(!t||A(n.origin)===A(t.domain))&&(t?(r===L.READY&&(t.isReady=!0,m(t,C),E(C,t)),r!==L.PLAY||t.playEventFired||(t.playEventFired=!0),r!==L.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,m(t,L.PLAY,[o])),i=[],void 0!==o&&i.push(o),void m(t,r,i)):(r===L.READY&&T.push(n.source),!1))}function A(n){return n.replace(Y,"")}var _,y,O,D=e(1),b=e(2),P=e(3),L=D.api,N=D.bridge,T=[],I=[],C="__LATE_BINDING__",k="http://wt.soundcloud.test:9200/",Y=/^http(?:s?)/;window.addEventListener?window.addEventListener("message",w,!1):window.attachEvent("onmessage",w),n.exports=O=function(n,t,e){if(r(n)&&(n=document.getElementById(n)),!i(n))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(e=e||{},n.src=R(k,t,e));var o,a,s=h(c(n));return s&&s.instance?s.instance:(o=T.indexOf(c(n))>-1,a=new _(n),I.push(new y(a,n,o)),a)},O.Events=L,window.SC=window.SC||{},window.SC.Widget=O,y=function(n,t,e){this.instance=n,this.element=t,this.domain=u(t.getAttribute("src")),this.isReady=!!e,this.callbacks={}},_=function(){},_.prototype={constructor:_,load:function(n,t){if(n){t=t||{};var e=this,r=p(this),o=r.element,i=o.src,a=i.substr(0,i.indexOf("?"));r.isReady=!1,r.playEventFired=!1,o.onload=function(){e.bind(L.READY,function(){var n,e=r.callbacks;for(n in e)e.hasOwnProperty(n)&&n!==L.READY&&f(N.ADD_LISTENER,n,r.element);t.callback&&t.callback()})},o.src=R(a,n,t)}},bind:function(n,t){var e=this,r=p(this);return r&&r.element&&(n===L.READY&&r.isReady?setTimeout(t,1):r.isReady?(d(n,t,r),f(N.ADD_LISTENER,n,r.element)):d(C,function(){e.bind(n,t)},r)),this},unbind:function(n){var t,e=p(this);e&&e.element&&(t=E(n,e),n!==L.READY&&t&&f(N.REMOVE_LISTENER,n,e.element))}},S(_.prototype,l(b)),S(_.prototype,l(P),!0)},function(n,t){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(n,t){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(n,t){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);


// TO DO: ADD CAROUSEL TO BOTTOM OR LEFT NAV OF PAGE
  // $('.carousel').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots: true,
  // });

  // SC TEST
  (function(){
			var el = document.getElementById('sc-iframe'),
			widget = SC.Widget(el);
			window._total_duration = 0;
			widget.bind(SC.Widget.Events.READY, function(){
				widget.getDuration(function(duration){
					var seconds = duration / (1000),
					minutes = Math.floor(seconds / 60);
					seconds = Math.floor(seconds % 60);
					document.getElementById('total').innerHTML = minutes + ':' + seconds;
					window._total_duration = duration;
				});
			});

			widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
				widget.getPosition(function(position){
					var seconds = position / (1000),
					minutes = Math.floor(seconds / 60);
					seconds = Math.floor(seconds % 60);
					document.getElementById('position').innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
					document.getElementById('progress').value = (position / window._total_duration) * 100;
				});
			});

			document.getElementById('progress').addEventListener('mousedown', function(){
				widget.unbind(SC.Widget.Events.PLAY_PROGRESS);
			});

			document.getElementById('progress').addEventListener('mouseup', function(){

				widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
					widget.getPosition(function(position){
						var seconds = position / (1000),
						minutes = Math.floor(seconds / 60);
						seconds = Math.floor(seconds % 60);
						document.getElementById('position').innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
						document.getElementById('progress').value = (position / window._total_duration) * 100;
					});
				});
			});

			document.getElementById('progress').addEventListener('input', function(){
				var newPos = (this.value * window._total_duration)/ 100;
				var seconds = newPos / (1000),
				minutes = Math.floor(seconds / 60);
				seconds = Math.floor(seconds % 60);
				document.getElementById('position').innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
				widget.seekTo(newPos);
			});

      document.getElementById('toggle-play').addEventListener('click', function(){
        var state = this.className;
        if(state == "toggle-play play"){
          widget.play();
          this.className = "toggle-play pause";
        } else {
          widget.pause();
          this.className = "toggle-play play";
        }
      });
		})();




});
