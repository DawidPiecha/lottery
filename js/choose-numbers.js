const checkboxes = document.querySelectorAll(".number-checkbox");
const chosenSixDiv = document.querySelector(".the-chosen-six");

const startButton = document.querySelector(".button");
startButton.style.display = "none";

// Function to update the chosen numbers
const updateChosenNumbers = () => {
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
    }
    if (selectedCount === 6) {
      startButton.style.display = "block";
    }
    if (selectedCount !== 6) {
      startButton.style.display = "none";
    }
    // If 6 checkboxes are selected, notify and disable additional checkboxes
    if (selectedCount >= 6) {
      Notiflix.Notify.info("You cannot choose more than SIX numbers!");
      for (let j = 0; j < checkboxes.length; j++) {
        if (!checkboxes[j].checked) {
          checkboxes[j].disabled = true;
        }
      }
      return;
    }
  }

  // Re-enable all checkboxes if less than 6 are selected
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].disabled = false;
  }
};

// Add event listeners to checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateChosenNumbers);
});
