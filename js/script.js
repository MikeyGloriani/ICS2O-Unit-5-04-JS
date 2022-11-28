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
 * This function checks for museum eligibility.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML

  //process
  if ((day == "tuesday" || day == "thursday") || (age > 12 && age < 21)) {
    document.getElementById("hello-world").innerHTML = "<p>You can enter the museum</p>"
  }
}
