//callback  hell

function divide(x, y) {
  return x / y;
}

function add(x, y) {
  return x + y;
}

function compute(callback, x, y) {
  return callback(x, y);
}

var res = compute(add, 4, 2);
console.log(res);
