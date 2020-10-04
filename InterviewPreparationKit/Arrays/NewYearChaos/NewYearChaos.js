// Complete the minimumBribes function below.
function minimumBribes(q) {
  let swaps = 0;

  for (let i = 0; i < q.length; i++) {
    let bribes = q[i] - (i + 1);
    let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0;

    if (bribes > 2) {
      console.log("Too chaotic");
      return;
    }
    2;
    for (let j = maxAdvance; j < i; j++) {
      if (q[j] > q[i]) swaps++;
    }
  }
  console.log(swaps);
}


console.log(minimumBribes([2,1,5,3,4]));//Expected Output:3