import Player from "./player.js";
import Renderer from "./renderer.js";
import Spawner from "./spawner.js";
import InputHandler from "./input.js";
import Game from "./game.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const player = new Player();
const renderer = new Renderer(ctx, canvas);
const spawner = new Spawner(canvas.width);

let game;

const input = new InputHandler((buffer) => {
  game.checkInput(buffer);
});

game = new Game(player, renderer, spawner, input);

function loop() {
  game.update();
  game.draw();
  requestAnimationFrame(loop);
}

loop();
