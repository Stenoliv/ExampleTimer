let timePassed = 0;
let timerInterval; // To hold the reference to the setInterval

// Function to format time into hh:mm:ss
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Ensure two-digit formatting for minutes and seconds
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(secs).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Function to start the timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(function () {
      // Update the display with the formatted time
      document.getElementById("timer").innerHTML = formatTime(timePassed);
      timePassed += 1; // Increment time
    }, 1000);
  }
}
function pauseTimer() {
  clearInterval(timerInterval); // Stop the timer
  timerInterval = null; // Reset the timer interval variable
}
// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval); // Stop the timer
  timerInterval = null; // Reset the timer interval variable
  timePassed = 0;
}

function toggelSettings() {
  const settingsImage = document.querySelector("#settingsImage");
  const settingsScreen = document.querySelector("#settings");

  settingsImage.addEventListener("click", function () {
    if (settingsScreen.style.display === "block") {
      settingsScreen.style.display = "none";
    } else {
      settingsScreen.style.display = "block";
    }
  });
}
toggelSettings();
