//count Bs in a string
const countBs = (word) => {
  let count = 0;
  let i = 0;
  while (i < word.length) {
    if (word[i] === "B") {
      count++;
    }
    i++;
  }
  return count; //return number of Bs in string
};
console.log(countBs("BuBBle"));

//count a particular char in a string
function countChar(word, char = "B") {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count; //returns number of char specified
}
console.log(countChar("institutionalize", "i"));
