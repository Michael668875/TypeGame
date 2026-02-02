import { GRAVITY, JUMP_FORCE, GROUND_Y } from "./constants.js";

export default class Player {
  constructor() {
    this.x = 100;
    this.y = GROUND_Y;
    this.w = 30;
    this.h = 40;
    this.vy = 0;
    this.onGround = true;
  }

  update() {
    this.vy += GRAVITY;
    this.y += this.vy;

    if (this.y >= GROUND_Y) {
      this.y = GROUND_Y;
      this.vy = 0;
      this.onGround = true;
    }
  }

  jump() {
    if (this.onGround) {
      this.vy = JUMP_FORCE;
      this.onGround = false;
    }
  }
}
