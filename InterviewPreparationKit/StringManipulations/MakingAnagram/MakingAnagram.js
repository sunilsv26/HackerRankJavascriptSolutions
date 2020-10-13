// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let arr1=[];
    let arr2=[];
    for(let i=0;i<a.length;i++){
        arr1.push(a.charCodeAt(i)-'a'.charCodeAt(0))
    }
    for(let j=0;j<b.length;j++){
        arr2.push(b.charCodeAt(j)-'a'.charCodeAt(0))
    }
    let firsta={}
    let second={}
    let count=0;
    arr1.forEach((el)=>firsta[el]=(firsta[el]||0)+1)
    arr2.forEach((el)=>second[el]=(second[el]||0)+1)
    
    for(let k=0;k<27;k++){
        if(firsta[k] && second[k]){
            count = count +Math.abs(firsta[k]-second[k])
        }
        else if(firsta[k]&&!second[k]){
            count = count + firsta[k]
        }
        else if(!firsta[k]&&second[k]){
            count = count + second[k]
        }
        
    }
    return (count)
    }