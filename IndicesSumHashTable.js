function findIndicesSumGiven(arr, target) {
    const hashTable = {};
    let neededValue;
    for(let i=0; i<arr.length; i++){
        neededValue = target - arr[i];
        if(neededValue in hashTable){
            return [i, hashTable[neededValue]];
        }else{
            hashTable[arr[i]] = i;
        }
    }
    return [];
}

console.log(findIndicesSumGiven([2,7,11,15], 9)); // [1,0]
console.log(findIndicesSumGiven([3,2,4], 6)); // [2,1]