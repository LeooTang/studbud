const audio = document.querySelector('audio');
const playBtn = document.querySelector('#play');
const preveBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const songList = document.querySelector('.song-list')
const title = document.querySelector('#songTitle');
const record = document.querySelector('.cover-image')

const toggler = document.querySelector('.play-btn');
const tab = document.querySelector('.cover-image');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
	tab.classList.toggle('active');
})

document.querySelector('.list-btn').addEventListener('click', () => {
	document.querySelector('.song-list').classList.toggle('active')
});


let songArray = [];
let songHeading = '';
let songIndex = 0;
let isPlaying = false;

function loadAudio() {
	audio.src = songArray[songIndex];

	let songListItems = songList.getElementsByTagName('li');
	songHeading = songListItems[songIndex].getAttribute('data-name');
	songTitle.innerText = songHeading;

	for (i = 0; i < songListItems.length; i++) {
		songListItems[i].classList.remove('active');
	}

	songList.getElementsByTagName('li')[songIndex].classList.add('active');
}


function loadSongs() {
	let songs = songList.getElementsByTagName('li');
	for (i = 0; i < songs.length; i++) {
		songArray.push(songs[i].getAttribute('data-src'));
	}

	loadAudio();

}

loadSongs();

function playAudio() {
	audio.play();
	play.innerHTML = '<i class="material-icons"  style="font-size:60px;">pause</i>';
	isPlaying = true;
}

function pauseAudio() {
	audio.pause();

	play.innerHTML = '<i class="material-icons"  style="font-size:60px;">play_circle</i>';
	isPlaying = false;
}

function nextSong() {
	songIndex++;
	if (songIndex > songArray.length - 1) {
		songIndex = 0;
	};
	loadAudio();
	//playAudio();
}

function previousSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songArray.length - 1;
	};
	loadAudio();
	//playAudio();
}



playBtn.addEventListener('click', function () {
	if (isPlaying) {
		pauseAudio();
	}
	else {
		playAudio();
	}
}, false);

preveBtn.addEventListener('click', function () {
	previousSong();
}, false);

nextBtn.addEventListener('click', function () {
	nextSong();
}, false);

songList.addEventListener('click', function (e) {
	songIndex = e.target.closest('li').getAttribute('data-index');
	loadAudio();
	// playAudio();
}, false)
