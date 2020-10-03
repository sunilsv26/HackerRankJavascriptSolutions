// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort();
    let count = 0;
    for (let i=0;i<n;i++){
        if(ar[i]==ar[i+1]){
            i++;
            count++;
        }
    }
    return count;

}

console.log( sockMerchant(9,[10,20,20,10,10,30,50,10,20]));