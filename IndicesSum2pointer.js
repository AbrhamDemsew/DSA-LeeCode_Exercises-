function indicesSum(arr, target){
    let neededValue;
    for(let i=0; i<arr.length; i++){
       neededValue = target - arr[i]
       const index = arr.indexOf(neededValue);
        if(index !== -1 && index !== i){
            return [index, i]
        }
    }
    return [];
}

console.log(indicesSum([2,7,11,15], 9)); // [1,0]
console.log(indicesSum([3,2,4], 6)); // [2,1]