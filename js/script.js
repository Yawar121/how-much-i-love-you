
const card = document.getElementById("card");

document.getElementById("beginBtn").onclick = function () {

card.innerHTML = `
<h1>🥰</h1>

<h2>Do you think I care about you?</h2>

<p>Choose wisely ❤️</p>

<div class="buttons">
<button onclick="nextPage()">Yes ❤️</button>
<button onclick="nextPage()">Absolutely ❤️</button>
</div>
`;

};

function nextPage(){

card.innerHTML = `
<h1>😍</h1>

<h2>How much do you think I love you?</h2>

<p>Move the slider ❤️</p>

<input
type="range"
min="0"
max="100"
value="100"
style="width:100%;">

<br><br>

<button onclick="finalPage()">
Continue ❤️
</button>
`;

}

function finalPage(){

card.innerHTML = `
<h1>❤️</h1>

<h2>I Love You More Than Words Can Explain</h2>

<p>
No matter what happens,<br><br>

You are my favorite person.<br><br>

You make my world brighter.<br><br>

I hope this little surprise made you smile. ❤️
</p>

<button onclick="location.reload()">
Start Again ❤️
</button>
`;

}

