var isPalindrome = function(x) {
    const y = Number(x.toString().split('').reverse().join(''));
    if (x === y){
        return true;
    }
    return false;
};



console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false