
function addNums(...arr) {
    if (!arr.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return arr.reduce((num1, num2) => num1 + num1);
  }
  
  addNums(1, 2, 3); //> 6
  addNums(10, "B", 20, []); //> error All arguments must be numbers.

