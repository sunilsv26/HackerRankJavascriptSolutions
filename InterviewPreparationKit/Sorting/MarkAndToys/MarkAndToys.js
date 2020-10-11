// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let newPices = prices.filter(price=>price<=k).sort((a,b)=>a-b);
    let sum=k;
    let arr=[]
    for(let i=0;i<newPices.length;i++){
               sum = sum - newPices[i];
               if(sum>0){ arr.push(sum)}
              
        
        }
    return arr.length
    }