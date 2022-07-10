/*DATA*/
let developer1 = {
  "First Name": "Ochoja",
  "Last Name": "Daniel",
  occupation: "Software Engineer",
  location: "Silicon valley",
};

let developer2 = {
  "First Name": "Ochoja",
  "Last Name": "Daniel",
  occupation: "Software Engineer",
  location: "Silicon valley",
};

let developer3 = {
  "First Name": "Elon",
  "Last Name": "Musk",
  occupation: "Billionaire",
  test: "Test",
};

/*FUNCTIONS*/
const deepEqual = (object1, object2) => {
  //check if parameters are objects
  if (typeof object1 == "object" && typeof object2 == "object") {
    //save keys in bindings
    let key1 = Object.keys(object1);
    let key2 = Object.keys(object2);

    //compare number of properties(keys) in objects
    if (key1.length == key2.length) {
      //loop through keys
      for (let i = 0; i < key1.length; i++) {
        //compare values of keys
        if (key1[i] === key2[i]) {
          //recursive call compares values
          if (deepEqual(object1[key1[i]], object2[key2[i]])) {
            continue;
          } else {
            return false;
          }
        }
      }
      return true;
    } else return false; //return false if number of properties are not equal
  } else if (object1 === object2) {
    return true;
  } else {
    return false;
  }
};
console.log("Main Function");
console.log(deepEqual(developer1, developer2));
console.log(deepEqual(5, "5"));
console.log(deepEqual(20, 20));
console.log(deepEqual(developer1, developer3));

//**Another method**
//This puts all keys and values in arrays,
//and compares the values of these arrays
function deepEqualAlt(object1, object2) {
  if (object1 === object2) {
    return true;
  } else if (
    typeof object1 == "object" &&
    typeof object2 == "object" &&
    Object.keys(object1).length == Object.keys(object2).length
  ) {
    let key1 = Object.keys(object1),
      key2 = Object.keys(object2);
    let values1 = [];
    let values2 = [];

    //compare keys
    for (let i = 0; i < key1.length; i++) {
      if (key1[i] === key2[i]) {
        continue;
      } else {
        return false;
      }
    }

    /*create and compare values*/
    //Push to values to values array
    for (value in object1) {
      if (object1.hasOwnProperty(value)) {
        values1.push(object1[value]);
      }
    }

    for (value in object2) {
      if (object2.hasOwnProperty(value)) {
        values2.push(object2[value]);
      }
    }

    //compare values
    for (let i = 0; i < values1.length; i++) {
      if (values1[i] === values2[i]) {
        continue;
      } else {
        return false;
      }
    }

    //return true if all properties(keys) and values are same
    return true;
  } else {
    return false;
  }
}
console.log("\n\nAlternative Function");
console.log(deepEqualAlt(developer1, developer2));
console.log(deepEqual(developer1, developer3));
console.log(deepEqualAlt(5, 5));
console.log(deepEqualAlt("66", 66));
