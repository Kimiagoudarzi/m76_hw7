//filter
function filter(array){
 let arr= [];
 for(let i=0; i<=array.length; i++){
     if(condition){
         arr.push(arr[i])
     }
     return arr;
 }
}   
//find
function find(array){
    for(let i=0; i<=array.length; i++){
        if(condition){
            return array[i];
        }
    }
}
//slice
function slice(array, from, to){
    let arr = [];
    if(from>=0){
        for(let i=from; i<= to; i++ ){
            arr.push(array[i]);
        }
    }else{
        for(let i = array.length+a; i<= array.length+a-b+1;i++){
            arr.push(array[i]);
        }
    }
    return arr;
}

//splice
function splice(array, index, count){
    let arr = [];

   

}

//some
function some(array){
    let arr = false;
    for (let i = 0; i < array.length; i++){
        if (array[i] === option){
            arr = true;
        }
    }
    return arr;
}