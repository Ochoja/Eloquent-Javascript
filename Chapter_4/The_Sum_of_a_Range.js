function range(start, end) {
  let numbers = [];

  if (start == end) {
    //return one value if start == end
    numbers.push(start);
    return numbers;
  } else if (start < end) {
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  } else {
    //runs block of code if start > end
    for (let i = start; i >= end; i--) {
      numbers.push(i);
    }
    return numbers;
  }
}
console.log(range(5, -1));

//add numbers in an array
const sum = (numbers) => {
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  return total;
};
console.log(sum(range(1, 10)));

//bonus assignment
const range2 = function (start, end, step = 1) {
  let numbers = [];

  if (start == end) {
    //return one value if start == end
    numbers.push(start);
    return numbers;
  } else if (start < end) {
    for (i = start; i <= end; i += step) {
      numbers.push(i);
    }
    return numbers;
  } else {
    for (i = start; i >= end; i += step) {
      numbers.push(i);
    }
    return numbers;
  }
};
console.log(range2(1, 10, 2));
console.log(range2(5, 2, -1));
