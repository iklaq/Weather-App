import { apiUrl } from "./constants";
// Initializing all elements constants
const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

// Function to fetch Data from Weather API
const fetchData = async (target) => {
  try {
    const response = await fetch(apiUrl(target));
    const data = await response.json();

    // Destructuring
    const {
      current: {
        temp_c,
        condition: { text, icon },
      },
      location: { name, localtime },
    } = data;

    // Calling update Dom Function
    updateDom(temp_c, name, localtime, icon, text);
  } catch (error) {
    alert("Location not found");
  }
};

// Function to update Dom
function updateDom(temperature, city, time, emoji, text) {
  // Destructuring time and date
  const [exactDate, exactTime] = time.split(" ");

  //getting day name
  const exactDay = new Date(exactDate).toLocaleString('en-IN', {weekday:'long'});
  
  temperatureField.innerText = `${temperature}°`;
  cityField.innerText = city;
  dateField.innerText = `${exactTime} - ${exactDay}   ${exactDate}`;
  emojiField.src = emoji;
  weatherField.innerText = text;
}

// Default Location
let target = "Kanpur";
fetchData(target);

// Adding event listen to the form
form.addEventListener("submit", search);
// Function to search the location
function search(e) {
  e.preventDefault();
  target = searchField.value;
  fetchData(target);
}