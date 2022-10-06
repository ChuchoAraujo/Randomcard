/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //STEP 1 -CREAR CONSTANTES//
  const palos = ["💗", "♠️", "🔸", "♣️"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // STEP 2- CREAR FUNCION //
  const getRandom = array => {
    const numeroAleatorio = Math.floor(Math.random() * array.length);
    const elementoAleatorio = array[numeroAleatorio];
    return elementoAleatorio;
  };

  // (ARROY FUNCTION =>)
  // const getRandom2 = array => array[Math.floor(Math.random() * array.length)];

  //INVOCACION FUNCION//
  getRandom(palos);
  getRandom(numbers);

  //MANIPULAR DOM //
  const h1Palo = document.querySelector("#paloAleatorio");
  const h1Numero = document.querySelector("#numeroAleatorio");
  const h1Palo2 = document.querySelector("#paloAleatorio2");

  const duplicarPalo = (h1Palo.innerHTML = getRandom(palos));
  h1Numero.innerHTML = getRandom(numbers);
  h1Palo2.innerHTML = duplicarPalo;
};
