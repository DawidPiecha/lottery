const lotteryResults = document.querySelector(".lottery-results");

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
  });
};

startButton.addEventListener("click", lotteryFunction);
