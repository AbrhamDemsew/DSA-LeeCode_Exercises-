const maxArea = function (array){
    let maxArea = 0;
    let left = 0;
    let right = array.length - 1;

    while(left<right){
        const height = Math.min(array[left], array[right]);
        const width = right - left;
        maxArea = Math.max(maxArea, height * width);
        if (array[left] < array[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}


console.log(maxArea([3,7,5,6,8,4]));