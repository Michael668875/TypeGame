import { GROUND_Y } from "./constants.js";

export default class Renderer {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawGround() {
    this.ctx.fillStyle = "#228B22";
    this.ctx.fillRect(0, GROUND_Y, this.canvas.width, 5);
  }

  drawPlayer(player) {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(player.x, player.y - player.h, player.w, player.h);
  }

  drawTrigger(trigger) {
    if (!trigger.active) return;

    this.ctx.font = "16px monospace";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(trigger.word, trigger.x, GROUND_Y - 60);

    if (trigger.type === "enemy") {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(trigger.x, GROUND_Y - 30, 30, 30);
    } else {
      this.ctx.fillStyle = "brown";
      this.ctx.fillRect(trigger.x, GROUND_Y + 5, 50, 10);
    }
  }

  drawUI(buffer) {
    this.ctx.fillStyle = "black";
    this.ctx.font = "18px monospace";
    this.ctx.fillText(`Typed: ${buffer}`, 10, 25);
  }
}
