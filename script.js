const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", showFreeQuestion);

function showFreeQuestion() {
    document.body.innerHTML = `
    <div class="background"></div>

    <section class="page active">
        <div class="glass-card">

            <h1 class="title">Hey Diksha ❤️</h1>

            <p class="description">
                Are you free on
                <br><br>
                <strong>7th August?</strong>
            </p>

            <div class="buttons">

                <button id="yesBtn">YES ❤️</button>

                <button id="noBtn">NO 🙈</button>

            </div>

        </div>
    </section>
    `;

    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseenter", () => {

        noBtn.style.position = "fixed";

        noBtn.style.left = Math.random() * 80 + "vw";

        noBtn.style.top = Math.random() * 80 + "vh";

    });

    document.getElementById("yesBtn").onclick = showHalfFull;
}

function showHalfFull() {

    document.body.innerHTML = `
    <div class="background"></div>

    <section class="page active">

        <div class="glass-card">

            <h1 class="title">
                How much time
                <br>
                can you give me? ❤️
            </h1>

            <div class="buttons">

                <button id="halfBtn">
                    🌞 Half Day
                </button>

                <button id="fullBtn">
                    🌙 Full Day
                </button>

            </div>

        </div>

    </section>
    `;

    document.getElementById("halfBtn").onclick = askLove;

    document.getElementById("fullBtn").onclick = showTime;
}

function askLove() {

    document.body.innerHTML = `

    <div class="background"></div>

    <section class="page active">

        <div class="glass-card">

            <h1 class="title">🥺</h1>

            <h2 style="margin-bottom:20px;">
                Why not Full Day?
            </h2>

            <p class="description">
                Don't you love me fully? ❤️
            </p>

            <div class="buttons">

                <button id="loveYes">
                    YES ❤️
                </button>

                <button id="loveNo">
                    NO 🙈
                </button>

            </div>

        </div>

    </section>

    `;

    document.getElementById("loveYes").onclick = showTime;

    document.getElementById("loveNo").onclick = showPlease;

}


function showTime(){

    document.body.innerHTML = `

    <div class="background"></div>

    <section class="page active">

        <div class="glass-card">

            <h1 class="title">
                ❤️
            </h1>

            <h2 style="margin-bottom:20px;">
                Kithne bje aau? 😊
            </h2>

            <div class="buttons">

                <button id="twoPM">
                    🕑 2 PM
                </button>

                <button id="threePM">
                    🕒 3 PM
                </button>

            </div>

        </div>

    </section>

    `;

    document.getElementById("twoPM").onclick = showBandra;

    document.getElementById("threePM").onclick = showBandra;

}

function showPlease(){

    document.body.innerHTML = `

    <div class="background"></div>

    <section class="page active">

        <div class="glass-card">

            <h1 class="title">
                🥹 Pleaseee...
            </h1>

            <p class="description">

                Aajao na...

                <br><br>

                Pretty Please ❤️

            </p>

            <button id="pleaseBtn">

                NO 🙈

            </button>

            <br><br>

            <div id="counter">

                Clicks Needed : 50

            </div>

        </div>

    </section>

    `;

    let clicks = 0;

    const btn = document.getElementById("pleaseBtn");

    const counter = document.getElementById("counter");

    btn.onclick = () => {

        clicks++;

        counter.innerHTML = "Clicks Needed : " + (50 - clicks);

        let percent = (clicks / 50) * 100;

        btn.style.background =

        `linear-gradient(to top,#ff4d88 ${percent}%,#444 ${percent}%)`;

        if(clicks >= 50){

            showTime();

        }

    };

}
function showBandra(){

    document.body.innerHTML = `

    <div class="background"></div>

    <section class="page active">

        <div class="glass-card">

            <h2>After that... ❤️</h2>

            <p class="description">

                What should we do?

            </p>

            <div class="buttons">

                <button id="shopping">

                    🛍️ Lunch + Shopping

                </button>

                <button id="worli">

                    🌊 Lunch + Worli Sea Face

                </button>

            </div>

        </div>

    </section>

    `;

    document.getElementById("shopping").onclick = showLoveScale;
    document.getElementById("worli").onclick = showLoveScale;

}function showLoveScale(){

document.body.innerHTML=`

<div class="background"></div>

<section class="page active">

<div class="glass-card">

<h2>

How much do you love me? ❤️

</h2>

<br><br>

<input
type="range"
min="1"
max="10"
value="5"
id="loveRange"
style="width:80%;">

<h1 id="loveValue">

5 ❤️

</h1>

</div>

</section>

`;

const slider=document.getElementById("loveRange");
const value=document.getElementById("loveValue");

slider.oninput=()=>{

value.innerHTML=slider.value+" ❤️";

};

slider.onchange=()=>{

showFlowers(parseInt(slider.value));

};

function showFlowers(count){

document.body.innerHTML=`

<div class="background"></div>

<section class="page active">

<div class="glass-card">

<h1>🥹❤️</h1>

<h2>

<h2>

You chose ${count}/10 ❤️

So here are ${count} flowers for you 🌹

</h2>

</h2>

</div>

</section>

`;

let totalFlowers = count;

// 🎉 Special surprise if she chooses 10
if(count === 10){
    totalFlowers = 100;
}

for(let i=0; i<totalFlowers; i++){

    let flower = document.createElement("div");

    flower.innerHTML = ["🌹","🌸","🌺","💖"][Math.floor(Math.random()*4)];

    flower.className = "flower";

    flower.style.left = Math.random()*100 + "vw";

    flower.style.animationDelay = (Math.random()*2) + "s";

    flower.style.fontSize = (25 + Math.random()*20) + "px";

    document.body.appendChild(flower);

}

// Special message for 10/10 ❤️
if(count === 10){

    document.querySelector(".glass-card").innerHTML += `
        <h2 style="margin-top:25px;color:#ffd700;">
            💖 I knew you'd choose 10/10! 💖
        </h2>
    `;

}

setTimeout(() => {

    showFinal();

}, 4000);

}
}function showFinal(){

document.body.innerHTML=`

<div class="background"></div>

<div id="flowers"></div>

<section class="page active">

<div class="glass-card">

<h1>

See You Soon ❤️

</h1>

<h2>

My Love 🥰

</h2>

<p>

<p class="description">

    See you soon, my love. ❤️

    <br><br>

    I'll be counting every minute until I see you. 🌸

</p>

🌹🌸❤️

</p>

</div>

</section>

`;

for(let i=0;i<60;i++){

let flower=document.createElement("div");

flower.innerHTML=["🌸","🌹","💖","🌺"][Math.floor(Math.random()*4)];

flower.className="flower";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDelay=Math.random()*5+"s";

flower.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(flower);

}

}