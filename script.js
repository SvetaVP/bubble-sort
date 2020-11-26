"use strict";

const numbers = [9, 6, 1, 2, 4, 10, -3, 15, 7, 3, 8, 0];
const elements = [9, 6, 1, 2, 3, 10, -3, 15, -10, 3, 8, 0];
console.log(sort(numbers));
console.log(sorting(elements));

// sorting by simple bubble method
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

// improved bubble sorting
function sorting(elements) {
  for (let j = 0; j < elements.length; j++) {
    let flag = 0;
    let minNumber = j;

    for (let i = j; i < elements.length; i++) {
      if (elements[i] > elements[i + 1]) {
        [elements[i], elements[i + 1]] = [elements[i + 1], elements[i]];
        flag = 1;
      }

      if (elements[i] < elements[minNumber]) {
        minNumber = i;
      }
    }

    if (flag === 0) {
      break;
    }

    if (minNumber > j) {
      [elements[j], elements[minNumber]] = [elements[minNumber], elements[j]];
    }
  }

  return elements;
}
