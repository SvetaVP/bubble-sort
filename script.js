"use strict";

const numbers = [9, 6, 1, 2, 4, 10, -3, 15, 7, 3, 8, 0];
console.log(sort(numbers));

function sort(numbers) {
  for (let j = 1; j < numbers.length; j++) {
    let flag = 0;

    for (let i = 0; i < numbers.length - j; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        flag = 1;
      }
    }

    if (flag === 0) {
      break;
    }
  }

  return numbers;
}
