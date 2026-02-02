import WordTrigger from "./wordTrigger.js";

const WORDS = ["jump", "type", "code", "linux", "python", "django"];

export default class Spawner {
  constructor(width) {
    this.width = width;
    this.timer = 0;
  }

  randomWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  update(triggers) {
    this.timer++;

    if (this.timer > 120) {
      const type = Math.random() < 0.6 ? "enemy" : "gap";
      triggers.push(
        new WordTrigger(this.width + 50, this.randomWord(), type)
      );
      this.timer = 0;
    }
  }
}
