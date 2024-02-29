/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = () => {
  let num = Math.floor(Math.random() * 4);
  if (num === 0) {
    return "♦";
  } else if (num === 1) {
    return "♥";
  } else if (num === 2) {
    return "♠";
  } else if (num === 3) {
    return "♣";
  }
};

const cartas = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

window.onload = function() {
  const cartaAleatoria = cartas[Math.floor(Math.random() * cartas.length)];
  console.log(cartaAleatoria + palos());
};
