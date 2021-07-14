const music = document.querySelector('audio');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let isPlaying = false;

const playSong = () => {
  isPlaying = true;
  music.play();
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
};
const pauseSong = () => {
  isPlaying = false;
  music.pause();
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
};

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
