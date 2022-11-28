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
 * This function displays an alert.
 */
function myButtonClicked(accessGranted) {
  accessGranted = document.getElementById("hello-world").innerHTML


  //process
    if ( accessGranted = (age>12 && age<21) || (day == "Tuesday" || day == "Thursday")) {
      document.getElementById("hello-world").innerHTML =
      "<p>You can enter the museum</p>"
    } else {
      document.getElementById("hello-world").innerHTML =
      "<p>You can not enter the museum</p>"
    }
}
