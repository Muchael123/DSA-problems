

/**
 *  link to the problem https://leetcode.com/problems/fibonacci-number
 * @param {number} n
 * @return {number}
 */

 function Fibonacci (n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

console.log(Fibonacci(10));