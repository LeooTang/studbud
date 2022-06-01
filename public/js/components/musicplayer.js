const musicContainer = document.getElementById('music-container');
const play = document.getElementById('play');
const previous = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const track_image = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const toggler = document.querySelector('.play-btn');
const tab   = document.querySelector('.cover-image');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  tab.classList.toggle('active');
})



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');

//All songs list
let All_song = [
   {
     name: "forest",
     path: "music/forest.mp3",
     img: 'public/images/1.jpg',
   },
   {
     name: "just relax",
     path: "public/music/just relax.mp3",
     img: "public/images/just relax.jpg",
   },
   {
	name: "morning garden",
	path: "public/music/morning garden.mp3",
	img: "public/images/morning garden.jpg",
  },
];

// function load the track
function load_track(index_no){
	clearInterval(timer);
	// reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	cover.src = All_song[index_no].img;
    track.load();

	timer = setInterval(range_slider ,1000);
	// total.innerHTML = All_song.length;
	// present.innerHTML = index_no + 1;
}

load_track(index_no);

//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML =  '<i class="material-icons"  style="font-size:60px;">pause</i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML =  '<i class="material-icons"  style="font-size:60px;">play_circle</i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
	}else{
		index_no = 0;
		load_track(index_no);

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		// playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		// playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }


	 document.getElementById("play").addEventListener("click", justplay);
	 document.getElementById("prev").addEventListener("click", previous_song);
	 document.getElementById("next").addEventListener("click", next_song);
     document.getElementById("duration_slider").addEventListener("click", change_duration);