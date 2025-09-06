ht = {0:0, 1:1};
function fibonacci(n){
    if(n in ht) return ht[n];
    ht[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return ht[n];
}

console.log(fibonacci(5));