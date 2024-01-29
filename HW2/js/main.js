"use strict"

let myVariable = 123;

// Перетворення на number
console.log(typeof Number(myVariable));
console.log(typeof parseInt(myVariable));
console.log(typeof +myVariable);

// Перетворення на string
console.log(typeof String(myVariable));
console.log(typeof toString(myVariable));
console.log(typeof "Мійнадійнийпароль" + myVariable);

// Перетворення на boolean
console.log(typeof Boolean(myVariable));
console.log(typeof !!myVariable);

// Конвертер валют

// const rate = 30;
// let ukrainianUnit = prompt("Напишіть вашу суму в USD:");
// alert(parseFloat(ukrainianUnit) * rate + " UAH");

// Обчислення вартості бензину

// let fuelAmount = prompt("Напишіть, будь ласка, скільки літрів бензину ви хотіли б купити:");
// let pricePerLitter = prompt("Напишіть вашу ціну за літр:");

// let globalAmount = parseFloat(fuelAmount) * parseFloat(pricePerLitter);

// // alert(Math.round(globalAmount * 100) / 100);

// alert(globalAmount.toFixed(2));

//Додаткова задача

// let a = 25;
// let b = 10;

// let sum = a + b;
// let binaryResult = (sum >>> 0).toString(2);
// console.log(binaryResult);