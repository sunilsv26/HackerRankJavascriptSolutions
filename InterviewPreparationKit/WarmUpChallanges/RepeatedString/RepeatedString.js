// Complete the repeatedString function below.
function repeatedString(s, n) {
  if (s.length > 1 && n > s.length) {
    if (n % s.length) {
      let totalRepetations = Math.floor(n / s.length);
    
      let remainder = Math.floor(n % s.length);
      
      let remainderString = s.slice(0, remainder);
     
      let sortedremainderString = remainderString.split("").sort();
      let numberOfaInRemainderString =
      sortedremainderString.lastIndexOf("a") + 1;
    
      let sortedGivenString = s.split("").sort();
      
      let numberOfaInGivenString = sortedGivenString.lastIndexOf("a") + 1;
      
      let numberofaInS =
        numberOfaInGivenString * totalRepetations + numberOfaInRemainderString;
      return Math.floor(numberofaInS);
    } else {
      let totalRepetations = Math.floor((n / s.length).toFixed(0));
      let sortedGivenString = s.split("").sort();
      let numberOfaInGivenString = sortedGivenString.lastIndexOf("a") + 1;
      let numberofaInS = numberOfaInGivenString * totalRepetations;
      return numberofaInS;
    }
  } else if (n < s.length) {
    let newString = s.slice(0, n);
    let sortedNewString = newString.split("").sort();
    let numberOfa = sortedNewString.lastIndexOf("a") + 1;
    return numberOfa;
  } else if (s.length === 1 && n > s.length) {
    if (s === "a") {
      return n;
    }
    return 0;
  } else if (s === "x") {
    return;
  }
}


console.log(repeatedString('aba',10));  //Expected Output:7