/*DATA*/
let linkedList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 5,
        rest: {
          value: 7,
          rest: null,
        },
      },
    },
  },
};

/*FUNCTIONS*/
/*array to list*/
const arrayToList = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (i == numbers.length - 1) {
      return { value: numbers[i], rest: null };
    } else {
      return { value: numbers[i], rest: arrayToList(numbers.slice(i + 1)) };
    }
  }
};
console.log(arrayToList([1, 2, 3]));

/*list to array*/
function listToArray(list) {
  let array = [];

  const pushToArray = (list) => {
    array.push(list.value);
    if (list.rest == null) {
      return;
    } else {
      return pushToArray(list.rest);
    }
  };
  pushToArray(list);
  return array;
}
console.log(listToArray(linkedList));

/*Prepend*/
const prepend = (element, list) => {
  let newlist = { value: element, rest: list };
  return newlist;
};
console.log(prepend(99, linkedList));

/*nth*/
const nth = (list, number) => {
  if (list == null || number < 0) {
    return undefined;
  } else if (number == 0) {
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
};
console.log(nth(linkedList, 2));

/*alternative nth function*/
function nthAlt(list, number) {
  let array = listToArray(list);
  return array[number];
}
console.log(nthAlt(prepend(20, linkedList), 0));
