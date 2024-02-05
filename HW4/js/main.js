"use strict"

// Задача на розворот числа

// const currentMaxValue = 4589;
// let currentMaxValueString = String(currentMaxValue);
// let array = currentMaxValueString.split("");
// let reverseMaxValueArray = array.reverse();

// let reverseMaxValueNumber = reverseMaxValueArray.join("");
// let reverseMaxValue = Number(reverseMaxValueNumber);

// console.log(reverseMaxValue);
// console.log(typeof (reverseMaxValue));

// Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

const resultsArray = [1, 2, [3, [4]]];

let resultsArrayInfinity = resultsArray.flat(Infinity);
let productOfArray = 1;

for (let i = 0; i < resultsArrayInfinity.length; i++) {
   productOfArray = productOfArray * resultsArrayInfinity[i];
}

console.log(productOfArray);