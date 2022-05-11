// function recurIndex(string) {
//   if (string == "" || string == null) {
//       return {};
//   }
//   let array = Array.from(string);
//   let indices = []
//   let filtered = array.filter((DuplicateElement, index) => 
//   array.indexOf(DuplicateElement) !== index);
//   let uniqueFiltered = [... new Set(filtered)];
//   array.filter((item,index)=>{
//       if(item == uniqueFiltered[0])
//       indices.push(index)
//   });
//   return {"${uniqueFiltered[0]}":[`${indices[0]},${indices[1]}`]}

// }
// console.log(recurIndex("AREDCBSDERD"));
// console.log(recurIndex(""));
// console.log(recurIndex(null));

//answer1
const charDetail = [];
function recurIndex(string){
  let list = string.split("")
  list.forEach(element => {
    charDetail.push({
      lead : element,  
      count: 0,
      indexes : []
    })
  });
  charDetail.forEach((item,index)=>{
    list.forEach((element,i)=>{
      if(item.lead == element){
        item.count +=1
        item.indexes.push(i)
      }
    })
  });
  charDetail.forEach((obj)=>{
    if(obj.indexes.length>=2){
      let distanceFromFirst = obj.indexes[1] - obj.indexes[0];
      obj.distance = distanceFromFirst
    }else{
      obj.distance = -1
    }
  });
  const finalList = charDetail.sort(function (a, b) {
    return a.distance - b.distance
  });
  return finalList
}
let test = recurIndex("AREDCBSDERD") 
if(test !== null){
  const finalObject = test.filter(item => item.distance != -1)[0]
  const value = finalObject.lead
  answerObject = {}
  answerObject[`${finalObject.lead}`] = [finalObject.count,finalObject.indexes[1]]
  console.log(answerObject)
}else {
    console.log({})
  }
