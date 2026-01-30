function getEvenNumbers(arr){
    let evenNumbers =  arr.filter((number)=>{
        if(number % 2 === 0){
            return number;
        }
    })
     return evenNumbers;
     
 }
 
 
 
 
 
 const arr = [10, 40, 23, 22, 57];
 
 console.log(getEvenNumbers(arr));