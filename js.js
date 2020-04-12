//Play samples

let song1 = document.querySelector("#song1");
let song2 = document.querySelector("#song2");
let song3 = document.querySelector("#song3");

let happyblues = document.querySelector("#happyblues");
let getdown = document.querySelector("#getdown");
let somethingsilhouette = document.querySelector("#somethingsilhouette");

let isPlaying1 = false;
let isPlaying2 = false;
let isPlaying3 = false;

let playAnimation = false;

let t = 0;

song1.addEventListener("click", playSong1);
function playSong1() {
  if (isPlaying1 == false) {
    somethingsilhouette.pause();
    getdown.pause();
    happyblues.play();
    isPlaying1 = true;
    playAnimation = true;
  } else {
    happyblues.pause();
    isPlaying1 = false;
    playAnimation = false;
  }
}

song2.addEventListener("click", playSong2);
function playSong2() {
  if (isPlaying2 == false) {
    happyblues.pause();
    somethingsilhouette.pause();
    getdown.play();
    isPlaying2 = true;
    playAnimation = true;
  } else {
    getdown.pause();
    isPlaying2 = false;
    playAnimation = false;
  }
}

song3.addEventListener("click", playSong3);
function playSong3() {
  if (isPlaying3 == false) {
    happyblues.pause();
    getdown.pause();
    somethingsilhouette.play();
    isPlaying3 = true;
    playAnimation = true;
  } else {
    somethingsilhouette.pause();
    isPlaying3 = false;
    playAnimation = false;
  }
}

//Modified! As seen here: https://codepen.io/riklomas/pen/erKJoN

let xs = [];
for (let i = 0; i <= 2500; i++) {
  xs.push(i);
}

function animate() {
  let points = xs.map(x => {
    let y = 310 + 20 * Math.sin((x + t) / 10);

    return [x, y];
  });

  let path =
    "M" +
    points
      .map(p => {
        return p[0] + "," + p[1];
      })
      .join(" L");

  document.querySelector("path").setAttribute("d", path);

  if (playAnimation == true) {
    t += 0.5;
  } else {
    t += 0;
  }

  requestAnimationFrame(animate);
}
animate();

let phrases = [
  " Moin Moin! We are Three Gypsies and A Bottle Of Coke. ",
  " Moin Moin! We are Three Gypsies and A Bottle Of Coke. Our members are Toni, Josef, Jojo and Sven.",
  "Moin Moin! We are Three Gypsies and A Bottle Of Coke. Our members are Toni, Josef, Jojo and Sven. We are a band from Hamburg, Germany with a big passion for music.",
  "Moin Moin! We are Three Gypsies and A Bottle Of Coke. Our members are Toni, Josef, Jojo and Sven. We are a band from Hamburg, Germany with a big passion for music. Each of us enjoys different music styles and we fuse those different influences to create our unique sound.",
  "Moin Moin! We are Three Gypsies and A Bottle Of Coke. Our members are Toni, Josef, Jojo and Sven. We are a band from Hamburg, Germany with a big passion for music. Each of us enjoys different music styles and we fuse those different influences to create our unique sound. Creating music is a big part of our lifes, so it reflects are current state of mind and emotions."
];

document.querySelector("input").addEventListener("input", addTxt);

function addTxt() {
  let value = document.querySelector("input").value; //value
  let phrase = phrases[value];
  console.log(document.querySelector(".phrase"));
  document.querySelector(".phrase").innerHTML = phrase;
}
