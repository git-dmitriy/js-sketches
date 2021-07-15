const music = document.querySelector('audio');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const image = document.querySelector('#img');
const title = document.querySelector('#title');
const artist = document.querySelector('#artist');

let isPlaying = false;
let currentSong = 0;

const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
];

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

const loadSong = (songs) => {
  title.textContent = songs.displayName;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  image.src = `img/${songs.name}.jpg`;
};

loadSong(songs[currentSong]);

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

prevBtn.addEventListener('click', () => {
  currentSong--;
  if (currentSong < 0) currentSong = songs.length - 1;
  loadSong(songs[currentSong]);
  playSong();
});

nextBtn.addEventListener('click', () => {
  currentSong++;
  if (currentSong > songs.length - 1) currentSong = 0;
  loadSong(songs[currentSong]);
  playSong();
});
