const removeDuplicates = (input) => {
    let distinct = [];
    input.forEach(item =>{
      if(!distinct.includes(item)){
        distinct.push(item)
      }
      
    })
  
  
    return distinct;
  }
  
  let arr = [7, 7, 3, 16, 16, -7, 13];
  console.log(removeDuplicates(arr))
