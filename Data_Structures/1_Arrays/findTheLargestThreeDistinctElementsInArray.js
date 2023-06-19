const numbersList = [1, 4, 5, 7, 3, 2, 17, 9, 11, 13, 5, 7, 3, 2];
const numbersList1 = [10, 5, 10];
const numbersList2 = [10, 10];
const numbersList3 = [12, 35, 1, 10, 34, 1];
const numbersList4 = [10, 4, 3, 50, 23, 90];
let arr = [12, 45, 1, -1, 45, 54, 23, 5, 0, -10];

function getLargestThreeValue(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  if (arr.length < 3) {
    return "array length must be greater than 3";
  }

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (elem > first) {
      third = second;
      second = first;
      first = elem;
    } else if (elem < first && elem > second && elem !== third) {
      third = second;
      second = elem;
    } else if (elem < first && elem < second && elem > third) {
      third = elem;
    }
  }
  return { first, second, third };
}

console.log({ numbersList: getLargestThreeValue(numbersList) });
console.log({ numbersList1: getLargestThreeValue(numbersList1) });
console.log({ numbersList2: getLargestThreeValue(numbersList2) });
console.log({ numbersList3: getLargestThreeValue(numbersList3) });
console.log({ numbersList4: getLargestThreeValue(numbersList4) });
console.log({ arr: getLargestThreeValue(arr) });
