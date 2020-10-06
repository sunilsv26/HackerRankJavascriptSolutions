// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swapSum = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] != i + 1) {
      var swapKey = arr[i] - 1;

      var temp = arr[i];

      arr[i] = arr[swapKey];
      arr[swapKey] = temp;

      swapSum++;
    }
  }
  return swapSum;
} // Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swapSum = 0;
  for (let i = 0; i < arr.length; i++) {
      
    while (arr[i] != i + 1) {
      let reqNumber = arr[i] - 1;
     
      let currentNumber = arr[i];

      arr[i] = arr[reqNumber];
      
      arr[reqNumber] = currentNumber;
      swapSum++;
      
    }
  }
  return swapSum;
}

console.log(minimumSwaps([2,3,4,1,5]));