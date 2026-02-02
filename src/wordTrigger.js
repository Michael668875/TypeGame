import { PLAYER_SPEED, GROUND_Y } from "./constants.js";

export default class WordTrigger {
  constructor(x, word, type = "enemy") {
    this.x = x;
    this.word = word;
    this.type = type;
    this.active = true;
  }

  update() {
    this.x -= PLAYER_SPEED;
  }

  matches(input) {
    return this.active && input === this.word;
  }

  deactivate() {
    this.active = false;
  }
}
