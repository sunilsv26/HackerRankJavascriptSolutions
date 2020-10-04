// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length - 1; ) {
    if (c[i] === 0 && c[i + 2] !== 0) {
      i = i + 1;
      count++;
    } else if (c[i] === 0 && c[i + 2] === 0) {
      i = i + 2;
      count++;
    }
  }
  return count;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]));// Expected Output:4