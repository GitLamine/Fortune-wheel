let btn = document.querySelector("button");
let promo = document.querySelector(".result");
let text = document.querySelector("h4");
let random = Math.floor(Math.random() * 100);

btn.addEventListener("click", () => {
  let circle = document.querySelector(".circle");
  circle.style.animation = "tournation ease-in-out 4s";
  circle.addEventListener("animationend", () => {
    promo.textContent = "Vous avez gagné une promotion de : " + random + "%";
    promo.style.scale = "1";
    promo.style.transition = "0.4s";
  });
});