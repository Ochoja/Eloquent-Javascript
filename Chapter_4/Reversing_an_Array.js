let reverseArray = function (array) {
  let new_array = [];
  for (let i = array.length - 1; i >= 0; i--) {
    new_array.push(array[i]);
  }
  return new_array;
};
console.log(reverseArray([1, 2, 3, 4, 5]));

const reverseArrayInPlace = (array) => {
  let mid = Math.ceil(array.length / 2);
  let hold = 0;
  let count = 0;

  for (let i = array.length - 1; i >= mid; i--) {
    hold = array[count];
    array[count] = array[i];
    array[i] = hold;
    count++;
  }
  return array;
};
console.log(reverseArrayInPlace([5, 4, 3, 2, 1, 0]));
