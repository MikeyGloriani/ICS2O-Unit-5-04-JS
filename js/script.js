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

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  //process
  if (accessGranted == true) {
    document.getElementById("entry").innerHTML =
      "<p>You can enter the museum</p>"
  } else {
    document.getElementById("entry").innerHTML =
      "<p>You can not enter the museum</p>"
  }
}
