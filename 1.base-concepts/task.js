"use strict";

// Задача 1

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
  } 
  else if (d === 0) {
    arr.push(-b / 2 * a);
    return arr;
  } 
  else if (d < 0) {
  return arr; 
  }
}


// Задача 2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
