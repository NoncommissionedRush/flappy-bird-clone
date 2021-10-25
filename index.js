import kaboom from "kaboom";
import Game from "./scenes/game";
import GameOver from "./scenes/gameover";
import GameStart from "./scenes/gamestart";

kaboom();

loadSprite("bird", "sprites/bird2.png");
loadSprite("bg", "sprites/bg.png");
loadSprite("pipe", "sprites/pipe.png");

scene("gamestart", GameStart);
scene("game", Game);
scene("gameover", GameOver);

go("gamestart");
