function getNumberOfArray(array) {
    let temp = [];
    array.forEach(element => {
        for (const value of element) {
            if (value == parseInt(value)) {
                temp.push(element);
                break;
            }
        }
    })

    return temp;
}


console.log(getNumberOfArray(["15j", "45", "kimia", "455k66"]));
console.log(getNumberOfArray(["a", "b", "c", ""]));
console.log(getNumberOfArray(["this is a test", "test1"]));

// let arr = ["g3jg", "hghg", "gfdfdf7"];

// let ifNumber = (str) => str.filter(x => /[0-9]/.test(x));  
 
// console.log(ifNumber(arr));

