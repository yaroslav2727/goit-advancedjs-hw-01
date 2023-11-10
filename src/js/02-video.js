import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const TIME_KEY = "videoplayer-current-time";

const player = new Player("vimeo-player");

const currentTime = JSON.parse(localStorage.getItem(TIME_KEY)) ?? 0;
player.setCurrentTime(currentTime);

player.on("timeupdate", throttle(onPlay, 1000));
function onPlay({ seconds }) {
  localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
}
