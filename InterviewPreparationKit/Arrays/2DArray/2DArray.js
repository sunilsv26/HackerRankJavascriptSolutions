// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let total = -64;
  let maxX = 3;
  let maxY = 3;
  for (let i = 0; i <= maxY; i++) {
    for (let j = 0; j <= maxX; j++) {
      let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      sum += arr[i + 1][j + 1];
      sum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      if (total < sum) {
        total = sum;
      }
    }
  }
  return total;
}

