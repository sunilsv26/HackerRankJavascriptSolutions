// Complete the rotLeft function below.
function rotLeft(a, d) {
  let a1 = a.slice(0, a.length + 1);
  for (let i = 0; i < d; i++) {
    let xqw = a1.shift(a1[i]);
    a1.push(xqw);
  }
  return a1;
}


console.log(rotLeft([1,2,3,4,5],4)); //Expected Output:5