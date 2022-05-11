function getLength (array){
    let arr = array.flat(Infinity).length;
    return arr;
}
console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
