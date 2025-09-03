// rotate array with k steps
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than array length
    const rotated = arr.slice(n - k).concat(arr.slice(0, n - k));
    return rotated;
}

console.log(rotateArray([1, 2, 3, 4, 5], 3));

// const array = [1,2,3,4,5]
// console.log(array.slice(-2).concat(array.slice(0, -2)));