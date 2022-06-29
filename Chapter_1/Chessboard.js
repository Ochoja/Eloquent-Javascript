let size = 7; //define size of board
let step = 1;
let final_pattern = "";

//outer for creates rows
for (let i = 0; i < size; i++) {
  //inner for creates columns
  for (j = 0; j < size; j++) {
    if (step % 2 == 1) {
      final_pattern += " ";
    } else {
      final_pattern += "#";
    }
    step++;
  } //end inner for(size)
  final_pattern += "\n"; //insert newline to insert pattern in next row
  if (size % 2 == 0) {
    step--; //make color("#") arrange themselves diagonally
  }
}

console.log(final_pattern);
