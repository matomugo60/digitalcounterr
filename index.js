// let can change later
let count = 0;

// Selecting elements
const value = document.querySelector("#value");

const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

// Function to update the screen
function updateCounter() {
  value.textContent = count;

  // Bonus challenge: Change color
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "black";
  }
}

// Increase
increaseBtn.addEventListener("click", function () {
  count++;
  updateCounter();
});

// Decrease
decreaseBtn.addEventListener("click", function () {
  count--;
  updateCounter();
});

// Reset
resetBtn.addEventListener("click", function () {
  count = 0;
  updateCounter();
});