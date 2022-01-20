import {
  a1,
  a2,
  a3,
  b1,
  b2,
  b3,
  c1,
  c2,
  c3,
  footerH2,
  xO,
  grid,
  heaven,
  hell,
  footer,
  header,
} from "../js/data.js";
import { xCounter, oCounter } from "../js/main.js";

let h4Counter = 0;

// Funtion som kollar om någon spelare har tre i rad
function ticTacToe() {
  if (xO.includes(a1.textContent)) {
    if (
      a1.textContent === a2.textContent &&
      a1.textContent === a3.textContent
    ) {
      whoWon(a1.textContent);
    }
  }
  if (xO.includes(a1.textContent)) {
    if (
      a1.textContent === b1.textContent &&
      a1.textContent === c1.textContent
    ) {
      whoWon(a1.textContent);
    }
  }
  if (xO.includes(a1.textContent)) {
    if (
      a1.textContent === b2.textContent &&
      a1.textContent === c3.textContent
    ) {
      whoWon(a1.textContent);
    }
  }
  if (xO.includes(a2.textContent)) {
    if (
      a2.textContent === b2.textContent &&
      a2.textContent === c2.textContent
    ) {
      whoWon(a2.textContent);
    }
  }
  if (xO.includes(a3.textContent)) {
    if (
      a3.textContent === b2.textContent &&
      a3.textContent === c1.textContent
    ) {
      whoWon(a3.textContent);
    }
  }
  if (xO.includes(a3.textContent)) {
    if (
      a3.textContent === b3.textContent &&
      a3.textContent === c3.textContent
    ) {
      whoWon(a3.textContent);
    }
  }
  if (xO.includes(c1.textContent)) {
    if (
      c1.textContent === c2.textContent &&
      c1.textContent === c3.textContent
    ) {
      whoWon(c1.textContent);
    }
  }
  if (xO.includes(b1.textContent)) {
    if (
      b1.textContent === b2.textContent &&
      b1.textContent === b3.textContent
    ) {
      whoWon(b1.textContent);
    }
  }
}

// Function som kollar vilken spelare som vann
function whoWon(string) {
  if (string === "😇") {
    footerH2.textContent = `PLAYER 1 😇 WINS!`;
    heaven.play();
    h4();
  } else if (string === "😈") {
    footerH2.textContent = "PLAYER 2 😈 WINS!";
    hell.play();
    h4();
  } else {
    result();
  }
}

// Function som går igång om alla block är tagna men ingen har vunnit
function result() {
  if (xCounter + oCounter === 9 && !footerH2.textContent.includes("Player")) {
    footerH2.textContent = "IT IS A DRAW!";
    h4();
  }
}

// Function som skapar H4 och ropar på två andra functioner
function h4() {
  const h4 = document.createElement("h4");
  footer.append(h4);
  gif();
  setTimeout(pause, 6000);
  if (h4Counter === 0) {
    h4.textContent = "Refreash page to play again!";
    h4.style.textAlign = "center";
  }
  h4Counter++;
}

// Function som stoppar Event lyssnandet
function stop() {
  grid.removeEventListener("click", result);
  grid.removeEventListener("click", ticTacToe);
  return console.log("Refresh browser to play again");
}

// Function som pausar musiken
function pause() {
  if (footerH2.textContent.includes("😇")) {
    heaven.pause();
  } else if (footerH2.textContent.includes("😈")) {
    hell.pause();
  } else {
  }
}

// Function som ger oss giffar och ropar på en function
function gif() {
  if (footerH2.textContent.includes("😇")) {
    const gifDiv = document.createElement("div");
    gifDiv.style.display = "flex";
    gifDiv.style.justifyContent = "center";
    header.textContent = "";
    header.append(gifDiv);
    const jesusGif = document.createElement("img");
    jesusGif.src = "/assets/jesus.gif";
    jesusGif.style.maxWidth = "70%";
    gifDiv.append(jesusGif);
    stop();
  } else if (footerH2.textContent.includes("😈")) {
    const gifDiv = document.createElement("div");
    gifDiv.style.display = "flex";
    gifDiv.style.justifyContent = "center";
    header.textContent = "";
    header.append(gifDiv);
    const hellGif = document.createElement("img");
    hellGif.src = "/assets/hell.gif";
    hellGif.style.maxWidth = "70%";
    gifDiv.append(hellGif);
    stop();
  } else {
    const gifDiv = document.createElement("div");
    gifDiv.style.display = "flex";
    gifDiv.style.justifyContent = "center";
    header.textContent = "";
    header.append(gifDiv);
    const drawGif = document.createElement("img");
    drawGif.src = "/assets/draw.gif";
    drawGif.style.maxWidth = "70%";
    gifDiv.append(drawGif);
    stop();
  }
}

export { gif, pause, stop, h4, whoWon, result, ticTacToe };
