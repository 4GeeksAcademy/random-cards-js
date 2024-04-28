import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
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

  const generarCarta = () => {
    const cartaAleatoria = cartas[Math.floor(Math.random() * cartas.length)];
    const simbolo = palos();
    const simboloTop = document.querySelector(".simbolo-top");
    const simboloBottom = document.querySelector(".simbolo-bottom");
    const num = document.querySelector(".num");
    const card = document.querySelector(".card");

    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;

    card.style.width = `${width}px`;
    card.style.height = `${height}px`;

    simboloTop.textContent = simbolo;
    simboloBottom.textContent = simbolo;
    num.textContent = cartaAleatoria;
  };

  generarCarta();

  const newCardButton = document.getElementById("newCard");
  newCardButton.addEventListener("click", generarCarta);

  setInterval(generarCarta, 10000);
};
