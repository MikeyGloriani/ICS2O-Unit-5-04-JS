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
  var age = parseInt(document.getElementById("age").id)
  var tuesday = document.getElementById("tuesday").value
  var thursday = document.getElementById("thursday").value

  //process
  if (tuesday == true || thursday == true || (age > 12 && age < 21)) {
    document.getElementById("hello-world").innerHTML =
      "<p>You can enter the museum</p>"
  } else {
    document.getElementById("hello-world").innerHTML =
      "<p>Sorry, you can't enter the museum</p>"
  }
}
