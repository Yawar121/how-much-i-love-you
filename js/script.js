const card = document.getElementById("card");

document.getElementById("beginBtn").addEventListener("click", page1);

function page1() {
  card.innerHTML = `
    <div class="heart">🥰</div>

    <h1>Do you think I care about you?</h1>

    <p class="subtitle">Choose wisely 😄</p>

    <div class="buttons">
      <button onclick="page2()">Yes ❤️</button>
      <button onclick="page2()">Absolutely ❤️</button>
    </div>
  `;
}

function page2() {
  card.innerHTML = `
    <div class="heart">❤️</div>

    <h1>How much do you think I love you?</h1>

    <p class="subtitle">Move the slider ❤️</p>

    <input
      type="range"
      min="0"
      max="100"
      value="0"
      id="loveSlider"
      style="width:100%;margin:25px 0;">

    <h2 id="value">0%</h2>

    <br><br>

    <button onclick="page3()">Continue ❤️</button>
  `;

  const slider = document.getElementById("loveSlider");
  const value = document.getElementById("value");

  slider.addEventListener("input", () => {
    value.innerHTML = slider.value + "%";
  });
}

function page3() {
  card.innerHTML = `
    <div class="heart">💖</div>

    <h1>I Love You...</h1>

    <p id="typing"></p>
  `;

  const text =
    "More than words can explain. More than the stars in the sky. More than every heartbeat. Every day, every moment, I choose you again. ❤️";

  let i = 0;

  const interval = setInterval(() => {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(interval);

      document.getElementById("typing").innerHTML +=
        "<br><br><button onclick='restart()'>Replay ❤️</button>";
    }
  }, 35);
}

function restart() {
  location.reload();
}
