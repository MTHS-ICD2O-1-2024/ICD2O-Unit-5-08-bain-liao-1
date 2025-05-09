// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates division using repeated subtraction.
 */
function calculateDivisionWithSubtraction() {
  const userDividend = parseInt(document.getElementById("user-dividend").value)
  const userDivisor = parseInt(document.getElementById("user-divisor").value)
  let remainder = userDividend
  let counter = 0

  while (true) {
    if (remainder < userDivisor) {
      break
    }
    counter ++
    remainder -= userDivisor
  }

  document.getElementById("result").innerText =
    userDividend + " ÷ " + userDivisor + " = " + counter + " and the remainder is: " + remainder
}
