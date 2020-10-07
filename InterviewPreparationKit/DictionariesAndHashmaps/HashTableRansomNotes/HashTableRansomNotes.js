// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let result = 'Yes'
  for (let i = 0; i < note.length; i++) {
    const index = magazine.indexOf(note[i]);
    if (index === -1) {
      result = "No";
      break;
    } else {
      magazine.splice(index, 1);
    }
  }
  console.log(result);
}

checkMagazine('give me one grand today night','give one grand today'); 