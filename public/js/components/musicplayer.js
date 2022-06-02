const audio = document.querySelector('audio');
const playBtn = document.querySelector('#play');
const preveBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const songList = document.querySelector('.song-list')
const title = document.querySelector('#songTitle');
const record = document.querySelector('.cover-image')

const toggler = document.querySelector('.play-btn');
const coverImg = document.querySelector('.cover-image');
// active the cover image 
toggler.addEventListener('click', () => {
	coverImg.classList.toggle('active');
})

document.querySelector('.list-btn').addEventListener('click', () => {
	document.querySelector('.song-list').classList.toggle('active')
});

let songArray = [];//set a array for storing song
let songHeading = '';
let songIndex = 0;//initial index number
let isPlaying = false;

function loadAudio() {
	audio.src = songArray[songIndex]; // pass data src in array to audio src
	let songListItems = songList.getElementsByTagName('li');
	songHeading = songListItems[songIndex].getAttribute('data-name'); //pass value of data-name into songHeading
	songTitle.innerText = songHeading; //pass songHeading into html which displays title of songs

	//get each data value in the array
	for (i = 0; i < songListItems.length; i++) {
		songListItems[i].classList.remove('active');
	}

	songList.getElementsByTagName('li')[songIndex].classList.add('active');
}

//send the value of data-src into the array
function loadSongs() {
	let songs = songList.getElementsByTagName('li');
	for (i = 0; i < songs.length; i++) {
		songArray.push(songs[i].getAttribute('data-src'));
	}
	loadAudio();
}

loadSongs(); // ready the songs

function playAudio() {
	audio.play(); //play audio src 
	play.innerHTML = '<i class="material-icons"  style="font-size:60px;">pause</i>'; // change display icon
	isPlaying = true;
}

function pauseAudio() {
	audio.pause(); 
	play.innerHTML = '<i class="material-icons"  style="font-size:60px;">play_circle</i>'; // change display icon
	isPlaying = false;
}

function nextSong() {
	songIndex++; // increase index
	if (songIndex > songArray.length - 1) { // if its the last song
		songIndex = 0;
	};
	loadAudio();
}

function previousSong() {
	songIndex--;
	if (songIndex < 0) { // if its the first song
		songIndex = songArray.length - 1;
	};
	loadAudio();
}

//Eventlistener
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
}, false)
