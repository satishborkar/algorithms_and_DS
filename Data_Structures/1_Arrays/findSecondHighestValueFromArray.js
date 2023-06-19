const numbersList = [1, 4, 5, 7, 3, 2, 17, 9, 11, 13, 5, 7, 3, 2];
const numbersList1 = [10, 5, 10];
const numbersList2 = [10, 10, 10];
const numbersList3 = [12, 35, 1, 10, 34, 1];

function findSecondHighestValueFromArray(arrayList) {
  let highest = -1;
  let secondHighest = -1;

  for (let index = 0; index < arrayList.length; index++) {
    if (arrayList[index] > highest) {
      highest = arrayList[index];
    } else if (
      arrayList[index] > secondHighest &&
      arrayList[index] !== highest
    ) {
      secondHighest = arrayList[index];
    }
  }
  return secondHighest;
}

function findSecondLargestElem(arr) {
  let first = -1,
    second = -1;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second;
}

console.log({
  findSecondHighestValueFromArray: findSecondHighestValueFromArray(numbersList),
  findSecondLargestElem: findSecondLargestElem(numbersList),
  findSecondHighestValueFromArray:
    findSecondHighestValueFromArray(numbersList1),
  findSecondLargestElem: findSecondLargestElem(numbersList1),
  findSecondHighestValueFromArray:
    findSecondHighestValueFromArray(numbersList2),
  findSecondLargestElem: findSecondLargestElem(numbersList2),
  findSecondHighestValueFromArray:
    findSecondHighestValueFromArray(numbersList3),
  findSecondLargestElem: findSecondLargestElem(numbersList3),
});
