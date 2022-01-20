import { footerH2, xO, grid, list } from "../js/data.js";
import { result, ticTacToe } from "../js/functions.js";

let counter = 0;
// x = 😇, o = 😈
let xCounter = 0;
let oCounter = 0;

// Event vid klickande av block
list.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      !xO.includes(element.textContent) &&
      !footerH2.textContent.includes("PLAYER" || "DRAW")
    ) {
      if (counter % 2 === 0) {
        element.textContent = "😇";
        element.style.opacity = "1";
        element.style.backgroundColor = "1d3557";
        xCounter++;
        counter++;
      } else {
        element.textContent = "😈";
        element.style.opacity = "1";
        element.style.backgroundColor = "e63946";
        oCounter++;
        counter++;
      }
    }
  });
});

// Effekt när musen är ovanför block
list.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (
      !xO.includes(element.textContent) &&
      !footerH2.textContent.includes("PLAYER" || "DRAW")
    ) {
      if (counter % 2 === 0) {
        element.textContent = " 😇 ";
        element.style.opacity = "0.5";
      } else {
        element.textContent = " 😈 ";
        element.style.opacity = "0.5";
      }
    }
  });
});

// Återställande av effekten ovanför
list.forEach((element) => {
  element.addEventListener("mouseout", () => {
    if (
      !xO.includes(element.textContent) &&
      !footerH2.textContent.includes("PLAYER" || "DRAW") &&
      (element.textContent === " 😈 " || " 😇 ")
    ) {
      if (counter % 2 === 0) {
        element.textContent = "";
        element.style.opacity = "1";
      } else {
        element.textContent = "";
        element.style.opacity = "1";
      }
    }
  });
});

grid.addEventListener("click", ticTacToe);
grid.addEventListener("click", result);

export { xCounter, oCounter };
