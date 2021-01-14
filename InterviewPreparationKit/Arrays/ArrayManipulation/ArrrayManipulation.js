// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
 const acc = {};
    for (const [a, b, k] of queries) {
        acc[a] =  (acc[a] || 0) + k;
        acc[b+1] = (acc[b+1] || 0) - k;
    }   
  console.log(acc)
    let last = 0
    let m = 0
    for (let i=0; i<n+1; i++) {
        const curr = acc[i] || 0;
        last = last + curr;
        if (last > m) {
            m = last;
        }
    }

    return m
}