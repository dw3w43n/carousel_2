var btn_prev = document.querySelector("#carousel .buttons .prev");
var btn_next = document.querySelector("#carousel .buttons .next");
var btn_play = document.querySelector(".play");
var btn_pause = document.querySelector(".pause");
var images = document.querySelectorAll("#carousel .photos img");

var i = 0;
var interval;

btn_prev.onclick = () => {
  images[i].className = "";
  i--;
  if (i < 0) i = images.length - 1
  images[i].className = "show";
};

btn_next.onclick = () => {
  images[i].className = "";
  i++;
  if (i >= images.length) i = 0;
  images[i].className = "show";
};

function playCarousel() {
  interval = setInterval(btn_next.onclick, 1500);
}
function pauseCarousel() {
  clearInterval(interval);
}
btn_play.onclick = playCarousel;
btn_pause.onclick = pauseCarousel;

var bullet_1 = document.querySelector("#bullet-1");
var bullet_2 = document.querySelector("#bullet-2");
var bullet_3 = document.querySelector("#bullet-3");
var bullet_4 = document.querySelector("#bullet-4");
var bullet_5 = document.querySelector("#bullet-5");
var bullet_6 = document.querySelector("#bullet-6");
var bullet_7 = document.querySelector("#bullet-7");
var bullet_8 = document.querySelector("#bullet-8");

bullet_1.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 0;
  images[i].className = "show";
}

bullet_2.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 1;
  images[i].className = "show";
}

bullet_3.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 2;
  images[i].className = "show";
}

bullet_4.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 3;
  images[i].className = "show";
}

bullet_5.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 4;
  images[i].className = "show";
}

bullet_6.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 5;
  images[i].className = "show";
}

bullet_7.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 6;
  images[i].className = "show";
}

bullet_8.onclick = () => {
  pauseCarousel();
  images[i].className = "";
  i = 7;
  images[i].className = "show";
}

