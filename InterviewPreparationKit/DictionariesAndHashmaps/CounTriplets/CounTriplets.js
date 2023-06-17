let second = {};
let third = {};
let count = 0;
arr.forEach((element) => {
    if (third[element]) {
        count = count + third[element];
    }
    if (second[element]) {
        let nextNumber = element * r;
        if (third[nextNumber]) {
            third[nextNumber] = third[nextNumber] + second[element];
        } else {
            third[nextNumber] = second[element];
        }
    }
    second[element * r] = (second[element * r] || 0) + 1;
});
//console.log(second, third);
return count;