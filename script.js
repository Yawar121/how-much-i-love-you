const app = document.getElementById("app");

document.getElementById("startBtn").addEventListener("click", question1);

function question1() {

app.innerHTML = `

<div class="card">

<div class="emoji">🥰</div>

<h2>First Question ❤️</h2>

<p>Do you think I love you?</p>

<div class="buttons">

<button id="yes">Yes 😍</button>

<button id="no">No 🙄</button>

</div>

</div>

`;

document.getElementById("yes").onclick = question2;

document.getElementById("no").onclick = function(){

alert("Wrong answer 😂");

};

}

function question2(){

app.innerHTML = `

<div class="card">

<div class="emoji">🤔</div>

<h2>Question 2</h2>

<p>How much do you think I love you?</p>

<input
type="range"
min="0"
max="100"
value="0"
id="loveSlider">

<p id="value">0%</p>

<button id="next">Continue ❤️</button>

</div>

`;

const slider=document.getElementById("loveSlider");

const value=document.getElementById("value");

slider.oninput=function(){

value.innerHTML=this.value+"%";

}

document.getElementById("next").onclick=question3;

}

function question3(){

app.innerHTML=`

<div class="card">

<div class="emoji">😂</div>

<h2>Too Low!</h2>

<p>

Even 100% isn't enough...

❤️

</p>

<button id="next2">

Tell Me ❤️

</button>

</div>

`;

document.getElementById("next2").onclick=question4;

}

function question4(){

app.innerHTML=`

<div class="card">

<div class="emoji">💖</div>

<h1>

Infinity ♾️

</h1>

<p>

That's how much I love you.

Every second.

Every minute.

Every day.

❤️

</p>

<button onclick="location.reload()">

Play Again ❤️

</button>

</div>

`;

}
