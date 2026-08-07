const card = document.getElementById("card");

document.getElementById("beginBtn").onclick = function () {

card.innerHTML = `

<h1>🥰</h1>

<h2>Do you think I care about you?</h2>

<p>Choose wisely 😄</p>

<div class="buttons">

<button onclick="nextPage()">Yes ❤️</button>

<button onclick="nextPage()">Absolutely ❤️</button>

</div>

`;

};

function nextPage(){

card.innerHTML = `

<h1>💖</h1>

<h2>Aww...</h2>

<p>You haven't seen anything yet.</p>

<button onclick="loveMeter()">Continue ❤️</button>

`;

}

function loveMeter(){

card.innerHTML = `

<h1>❤️</h1>

<h2>How Much Do I Love You?</h2>

<p>Move the slider...</p>

<input
type="range"
min="0"
max="100"
value="0"
id="slider"
oninput="updateLove(this.value)"
>

<h2 id="value">0%</h2>

`;

}

function updateLove(v){

document.getElementById("value").innerHTML = v + "%";

}
