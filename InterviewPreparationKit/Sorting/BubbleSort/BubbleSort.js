// Complete the countSwaps function below.
function countSwaps(a) {
  let numSwaps = 0;
  let firstElement;
  let lastElement;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        let temp = a[j + 1];
        a[j + 1] = a[j];
        a[j] = temp;
        numSwaps++;
      }
    }
  }
  firstElement = a[0];
  lastElement = a[a.length - 1];
  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${firstElement}`);
  console.log(`Last Element: ${lastElement}`);
}

countSwaps([1,2,3])
countSwaps([3,2,1])
countSwaps([4,2,3,1])