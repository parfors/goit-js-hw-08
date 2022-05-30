import Player from '@vimeo/player';
import _throttle from 'lodash.throttle'; 

const player = new Player('vimeo-player');

player.on('timeupdate', _throttle(dataLocalSet, 1000));

function dataLocalSet(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
}

const playTime = JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
player.setCurrentTime(playTime);