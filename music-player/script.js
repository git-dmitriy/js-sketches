document.addEventListener('DOMContentLoaded', () => {
  const music = document.querySelector('audio');
  const playBtn = document.querySelector('#play');
  const prevBtn = document.querySelector('#prev');
  const nextBtn = document.querySelector('#next');
  const progressContainer = document.querySelector('#progress-container');
  const progress = document.querySelector('#progress');
  const currentTimeEl = document.querySelector('#current-time');
  const durationEl = document.querySelector('#duration');
  const image = document.querySelector('#img');
  const title = document.querySelector('#title');
  const artist = document.querySelector('#artist');
  const tracksCount = document.querySelector('.tracks');

  let isPlaying = false;
  let currentSong = 0;

  const songs = [
    {
      id: 1,
      name: 'jacinto-1',
      displayName: 'Electric Chill Machine',
      artist: 'Jacinto Design',
    },
    {
      id: 2,
      name: 'jacinto-2',
      displayName: 'Seven Nation Army (Remix)',
      artist: 'Jacinto Design',
    },
    {
      id: 3,
      name: 'jacinto-3',
      displayName: 'Goodnight Disco Queen',
      artist: 'Jacinto Design',
    },
    {
      id: 4,
      name: 'metric-1',
      displayName: 'Front Row (Remix)',
      artist: 'Metric/Jacinto Design',
    },
  ];

  function playSong() {
    isPlaying = true;
    music.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
  }
  function pauseSong() {
    isPlaying = false;
    music.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
  }

  function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
    tracksCount.innerHTML = `<span>${song.id} / ${songs.length}</span>`;
  }

  function changeSong(direction) {
    if (direction === 'next') {
      currentSong++;
      if (currentSong > songs.length - 1) currentSong = 0;
      loadSong(songs[currentSong]);
      playSong();
    } else if (direction === 'prev') {
      currentSong--;
      if (currentSong < 0) currentSong = songs.length - 1;
      loadSong(songs[currentSong]);
      playSong();
    }
  }

  function updateProgress(e) {
    if (isPlaying) {
      let { currentTime, duration } = e.srcElement;

      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;

      const setTime = (time) => {
        const totalMinutes = Math.floor(time / 60);
        let totalSeconds = Math.floor(time % 60);
        if (totalSeconds < 10) {
          totalSeconds = `0${totalSeconds}`;
        }
        if (totalSeconds) {
          return `${totalMinutes}:${totalSeconds}`;
        }
      };

      durationEl.textContent = setTime(duration);
      currentTimeEl.textContent = setTime(currentTime);
    }
  }

  function goToTime(e) {
    const width = e.srcElement.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
  }

  loadSong(songs[currentSong]);
  playBtn.addEventListener('click', () =>
    isPlaying ? pauseSong() : playSong()
  );

  prevBtn.addEventListener('click', () => changeSong('prev'));
  nextBtn.addEventListener('click', () => changeSong('next'));
  music.addEventListener('timeupdate', updateProgress);
  progressContainer.addEventListener('click', goToTime);
});
