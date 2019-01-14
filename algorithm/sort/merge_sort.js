/**
 * 
 * @param {Array} left 
 * @param {Array} right 
 */
function merge(left, right) {
    var tmp = [];

    while (left.length && right.length) {
        if (left[0] < right[0])
            tmp.push(left.shift());
        else
            tmp.push(right.shift());
    }

    return tmp.concat(left, right);
}

/**
 * 
 * @param {Array} a 
 */
function mergeSort(a) {
    if (a.length === 1)
        return a;

    var mid = Math.floor(a.length / 2)
        , left = a.slice(0, mid)
        , right = a.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}


const testArr = []
const num = 100000
for(let i=0;i<num;i++){
    testArr.push(Math.floor(Math.random()*num))
}
console.time('msTime')
mergeSort(testArr)
console.timeEnd('msTime')

console.time('sTime')
testArr.sort()
console.timeEnd('sTime')