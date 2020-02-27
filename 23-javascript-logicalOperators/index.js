"use strict";

let currentHour = prompt("Please enter the current hour (out of 0-23):", 0);
while (isNaN(currentHour) == true || currentHour < 0 || currentHour > 23) {
  currentHour = prompt(
    "Please enter the correct current hour between 0-23.",
    0
  );
}
if (currentHour < 8 || currentHour >= 18) {
  alert("The hour is outside of office hours.");
} else {
  alert("We are open.");
}
