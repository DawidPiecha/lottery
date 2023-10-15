const checkboxes = document.querySelectorAll(".number-checkbox");

const chosenSixDiv = document.querySelector(".the-chosen-six");

// Function to update the chosen numbers
function updateChosenNumbers() {
  // Clear the "the-chosen-six" div
  chosenSixDiv.innerHTML = "";

  // Initialize a counter for selected checkboxes
  let selectedCount = 0;

  // Loop through all checkboxes
  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    if (checkbox.checked) {
      // Create a new div element for each selected checkbox
      const selectedNumberDiv = document.createElement("div");

      // Create an image element for the selected number
      const img = document.createElement("img");
      const number = checkbox.id.replace("number", ""); // Extract the number from the ID
      img.src = `./images/number${number}.png`;
      img.alt = `Numer ${number}`;

      selectedNumberDiv.appendChild(img); // Add the image to the div
      chosenSixDiv.appendChild(selectedNumberDiv);

      selectedCount++;

      // If 6 checkboxes are selected, return to exit the function
      if (selectedCount >= 6) {
        Notiflix.Notify.failure("You cannot choose more than SIX numbers!");
        return;
      }
    }
  }
}

// Add event listeners to checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateChosenNumbers);
});

const lotteryFunction = () => {
  let results = [];

  while (results.length < 6) {
    let drawnNumber = Math.floor(Math.random() * 49) + 1;

    if (!results.includes(drawnNumber)) {
      results.push(drawnNumber);
    }
  }

  return results;
};
