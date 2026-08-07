const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
    alert("Button clicked!");

    document.getElementById("app").innerHTML = `
    <div class="card">
        <div class="emoji">🥰</div>
        <h1>It Works! ❤️</h1>
        <p>Your JavaScript is working perfectly.</p>
    </div>
    `;
});
