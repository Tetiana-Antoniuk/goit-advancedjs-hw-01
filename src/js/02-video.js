import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = "videoplayer-current-time";
const savedTime = localStorage.getItem(LS_KEY);

player.on('timeupdate', throttle(function (data) {
  const currentTime = data.seconds;

  localStorage.setItem(LS_KEY, JSON.stringify(currentTime));
},1000));

if (savedTime) {
  const currentTime = JSON.parse(savedTime);

  player.setCurrentTime(currentTime).then(function (seconds) {
  }).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
}

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
