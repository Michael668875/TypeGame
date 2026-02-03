const textEl = document.getElementById('text');
const inputEl = document.getElementById('input-box');
const timerEl = document.getElementById('timer');
const wpmEl = document.getElementById('wpm');

let startTime = null;

inputEl.addEventListener('input', () => {
    if (!startTime) startTime = new Date();
    const text = textEl.innerText;
    const input = inputEl.value;

    if (input === text) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // seconds
        const words = text.split(' ').length;
        const wpm = Math.round((words / timeTaken) * 60);
        wpmEl.innerText = `WPM: ${wpm}`;
        inputEl.disabled = true;
    }
});
