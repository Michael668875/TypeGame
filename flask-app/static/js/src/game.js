export default class Game {
  constructor(player, renderer, spawner, input) {
    this.player = player;
    this.renderer = renderer;
    this.spawner = spawner;
    this.input = input;
    this.triggers = [];
  }

  update() {
    this.player.update();
    this.spawner.update(this.triggers);

    this.triggers.forEach(t => t.update());
    this.triggers = this.triggers.filter(t => t.x > -100);
  }

  checkInput(buffer) {
    for (let t of this.triggers) {
      if (t.matches(buffer)) {
        t.deactivate();
        this.player.jump();
        this.input.clear();
        break;
      }
    }
  }

  draw() {
    this.renderer.clear();
    this.renderer.drawGround();
    this.triggers.forEach(t => this.renderer.drawTrigger(t));
    this.renderer.drawPlayer(this.player);
    this.renderer.drawUI(this.input.buffer);
  }
}
