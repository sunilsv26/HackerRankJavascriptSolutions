// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    s = s.split('');
    let count = 0
for(let i=0;i<s.length-1;i++){
    if(s[i]==s[i+1]){
        /* s.splice(s[i],1); */
        count++
    }
}
return count
}