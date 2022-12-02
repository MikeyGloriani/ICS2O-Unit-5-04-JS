// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-04-JS/sw.js", {
    scope: "/ICS2O-Unit-5-04-JS/",
  })
}

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML =
    "Age is " + valueFromSlider
}

/**
 * This function checks for museum eligibility.
 */
function myButtonClicked() {
  const day = document.getElementById("day").value
  const age = document.getElementById("slider").value
  
  if ((day == "tuesday" || day == "thursday" ) && (age > "12" && age < "21")) {
    document.getElementById("hello-world").innerHTML =
      "You are eligible for student discounts"
  } else {
    document.getElementById("hello-world").innerHTML =
      "Pay for regular prices"
  }
}
