var findMedianSortedArrays = function(nums1, nums2) {
  array = [...nums1, ...nums2].sort((a, b) => a - b);

  if(array.length % 2 == 0){
    const mid = array.length / 2;
    return (array[mid] + array[mid - 1]) / 2;
  }else{
    const mid = Math.floor(array.length / 2);
    return array[mid]
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3,4]));