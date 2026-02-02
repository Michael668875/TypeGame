export default class InputHandler {
  constructor(onMatch) {
    this.buffer = "";
    this.onMatch = onMatch;

    window.addEventListener("keydown", (e) => this.handleKey(e));
  }

  handleKey(e) {
    if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
      this.buffer += e.key.toLowerCase();
    }

    if (e.key === "Backspace") {
      this.buffer = this.buffer.slice(0, -1);
    }

    this.onMatch(this.buffer);
  }

  clear() {
    this.buffer = "";
  }
}
