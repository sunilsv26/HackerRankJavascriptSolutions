// Complete the countingValleys function below.
function countingValleys(n, s) {
  let alt = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] == "D" && alt === 0) {
      count++;
      alt--;
    } else if (s[i] == "D" && alt !== 0) {
      alt--;
    } else if (s[i] == "U") {
      alt++;
    }
  }
  return count;
}

console.log(countingValleys(8,'UDDDUDUU'));
console.log(countingValleys(10,'UDUUUDUDDD'));