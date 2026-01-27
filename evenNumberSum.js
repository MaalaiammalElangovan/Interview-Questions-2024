function evenNumberSum(arr){
let sum = 0;

arr.forEach(element => {
if(element %2 === 0){
    sum = element+sum;
}
});
return sum;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(evenNumberSum(arr));