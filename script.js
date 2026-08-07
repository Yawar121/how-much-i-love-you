const app = document.getElementById("app");

document.getElementById("startBtn").addEventListener("click", question1);

function question1() {
    app.innerHTML = `
    <div class="card">
        <div class="emoji">🥰</div>
        <h2>First question...</h2>
        <p>Do you think I care about you?</p>

        <button id="yesBtn">Yes ❤️</button>
        <button id="noBtn">No 💔</button>
    </div>
    `;

    document.getElementById("yesBtn").onclick = question2;
    document.getElementById("noBtn").onclick = question2;
}

function question2() {
    app.innerHTML = `
    <div class="card">
        <div class="emoji">❤️</div>

        <h2>Wrong...</h2>

        <p>
        I don't just care about you...
        <br><br>
        I think about you every day.
        </p>

        <button id="continueBtn">Continue ❤️</button>
    </div>
    `;

    document.getElementById("continueBtn").onclick = question3;
}

function question3() {
    app.innerHTML = `
    <div class="card">
        <div class="emoji">💖</div>

        <h1>I Love You ❤️</h1>

        <p>
        More than words can explain.
        <br><br>
        And this is only the beginning...
        </p>

        <button onclick="location.reload()">Replay ❤️</button>
    </div>
    `;
}
