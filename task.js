/* Create a function which returns the number of true values there are in an array.*/

//Solution:
export function countTrue(array) {
    return array.filter((x) => x === true).reduce((pre, curr) => pre + curr, 0);
}
console.log(countTrue([true, false, true, true, false]))
