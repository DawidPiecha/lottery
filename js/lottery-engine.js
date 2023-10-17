const lotteryResults = document.querySelector(".lottery-results");
const tryAgain = document.querySelector(".try-again");
tryAgain.style.display = "none";

const lotteryFunction = () => {
  let results = [];

  while (results.length < 6) {
    let drawnNumber = Math.floor(Math.random() * 49) + 1;

    if (!results.includes(drawnNumber)) {
      results.push(drawnNumber);
    }
  }

  // wywołanie funkcji do wyświetlania wyników i przekazania wyników
  resultsShow(results);
};

const resultsShow = (results) => {
  lotteryResults.innerHTML = "";

  results.forEach((result) => {
    const drawnNumberDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = `./images/number${result}.png`;
    img.alt = `Numer ${result}`;
    drawnNumberDiv.appendChild(img);
    lotteryResults.appendChild(drawnNumberDiv);
    startButton.textContent = "LOTTERY  RESULTS:";
    startButton.disabled = true;
    tryAgain.style.display = "flex";
    checkboxesDisable();
  });
};

const checkboxesDisable = () => {
  checkboxes.forEach((checkbox) => {
    checkbox.disabled = true;
  });
};

startButton.addEventListener("click", lotteryFunction);
tryAgain.addEventListener("click", () => {
  location.reload();
});
