// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    s1 = s1.split("").sort();
    s2 = s2.split("").sort();
    let set1 = [...new Set(s1)];
    let set2 = [...new Set(s2)];
    console.log(set1,set2)
    let count = 0;
    for(let i=0;i<set1.length;i++){
       
      for(let k=0;k<set2.length;k++){
          if(set1[i]===set2[k]){
              count++;
          }
      }
    }
    if(count>0){
        return 'YES'
    }
    else{
        return 'NO'
    }
}

console.log(twoStrings('abc' , 'a'));