function fn(...c) {
  if (!c.every((a) => Number.isNumber(a)))
    throw "All arguments must be numbers.";
  return c.reduce((a, b) => a + b);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20, "giraffe", "bubble"); //> error All arguments must be numbers.
