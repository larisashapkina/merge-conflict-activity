function addNums(...c) {
    if (!c.every((a) => Number.isNumber(a))){
        return c.reduce((a, b) => a + b);
    }else{
        return "All arguments have to be numbers"
    } 
  }
  
  addNums(1, 2, 3); //> 6
  addNums([], " ",  "B", 20); //> error All arguments must be numbers.