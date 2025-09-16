// Words that need translation
const words = {
  "morning": "Good Morning",
  "afternoon": "Good Afternoon",
  "evening": "Good Evening",
  "welcome": "Welcome back!",
  "readyToLearn": "Ready to learn something new today?",
  "todaysProgress": "Today's Progress",
  "tasksDone": "Tasks Done",
  "timeSpent": "Time Spent",
  "quickStart": "Quick Start",
  "dailyPractice": "Daily Practice",
  "continueLearning": "Continue your learning",
  "favoriteActivities": "Favorite Activities",
  "savedExercises": "Your saved exercises",
  "quickGame": "Quick Game",
  "funActivity": "5 minute fun activity",
  "motivation": "🌟 You're doing great! Keep up the amazing work.",
  "learningLibrary": "Learning Library",
  "chooseToLearn": "Choose what you'd like to learn today",
  "searchPlaceholder": "Search for activities...",
  "learningCategories": "Learning Categories",
  "reading": "Reading",
  "math": "Math",
  "artCreativity": "Art & Creativity",
  "music": "Music",
  "learningGames": "Learning Games",
  "socialSkills": "Social Skills",
  "letterRecognition": "Letter Recognition",
  "countingTo10": "Counting to 10",
  "colorMatching": "Color Matching",
  "simpleMelodies": "Simple Melodies",
  "easy": "Easy",
  "medium": "Medium",
  "review": "Review",
  "continue": "Continue",
  "noCategories": "No categories found",
  "noActivities": "No activities found",
  "activities": "activities"
};

const languageSelect = document.getElementById("language");
const translationFields = document.getElementById("translationFields");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("translateForm");
const thankYouMessage = document.getElementById("thankYouMessage");

// Generate input fields for each word
function generateFields() {
  translationFields.innerHTML = ""; // clear previous
  for (const key in words) {
    const div = document.createElement("div");
    div.classList.add("word");
    div.innerHTML = `
      <label for="${key}">${words[key]}</label>
      <input type="text" id="${key}" name="${key}" placeholder="Translate '${words[key]}'">
    `;
    translationFields.appendChild(div);
  }
}

// Show fields when language is picked
languageSelect.addEventListener("change", () => {
  if (languageSelect.value) {
    generateFields();
    translationFields.classList.remove("hidden");
    submitBtn.style.display = "block";
  } else {
    translationFields.classList.add("hidden");
    submitBtn.style.display = "none";
  }
});

// Handle thank you message after submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop default refresh

  // Collect form data
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      form.classList.add("hidden");
      thankYouMessage.classList.remove("hidden");
      
    }
     else {
      alert("Something went wrong, please try again.");
    }
  })
  .catch(() => {
    alert("Network error, please try again.");
  });
});
