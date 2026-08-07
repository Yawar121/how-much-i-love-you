const app = document.getElementById("app");

document.getElementById("startBtn").addEventListener("click", showQuestion);

function showQuestion() {
  app.innerHTML = `
    <div class="card">
      <div class="emoji">🥰</div>
      <h1>Do you think I care about you?</h1>
      <p>Choose one ❤️</p>

      <div class="buttons">
        <button id="yesBtn">Yes ❤️</button>
        <button id="sureBtn">Absolutely ❤️</button>
      </div>
    </div>
  `;

  document.getElementById("yesBtn").addEventListener("click", showSlider);
  document.getElementById("sureBtn").addEventListener("click", showSlider);
}

function showSlider() {
  app.innerHTML = `
    <div class="card">
      <div class="emoji">❤️</div>

      <h1>How much do you think I love you?</h1>

      <input
        type="range"
        min="0"
        max="100"
        value="50"
        class="slider"
        id="slider">

      <h2 id="percent">50%</h2>

      <br>

      <button id="continueBtn">Continue ❤️</button>
    </div>
  `;

  const slider = document.getElementById("slider");
  const percent = document.getElementById("percent");

  slider.addEventListener("input", () => {
    percent.textContent = slider.value + "%";
  });

  document
    .getElementById("continueBtn")
    .addEventListener("click", finalPage);
}

function finalPage() {
  app.innerHTML = `
    <div class="card">
      <div class="emoji">💖</div>

      <h1>I Love You ❤️</h1>

      <p id="message"></p>

      <button id="restartBtn">Replay ❤️</button>
    </div>
  `;

  const text =
    "No number could ever measure how much I love you. Thank you for being such a special part of my life. ❤️";

  const message = document.getElementById("message");
  let i = 0;

  const timer = setInterval(() => {
    message.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(timer);
    }
  }, 35);

  document
    .getElementById("restartBtn")
    .addEventListener("click", () => location.reload());
}
