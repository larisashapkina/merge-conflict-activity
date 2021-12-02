function AddNumsInArray(...Arr) {
    if (!Arr.every((el) => Number.isNumber(el)))
      throw "All arguments must be numbers.";
    return Arr.reduce((num1, num2) => num1 + num2);
  }
  
  AddNumsInArray(1, 2, 3); //> 6
  AddNumsInArray(10, "B", 20, {}); //> error All arguments must be numbers.