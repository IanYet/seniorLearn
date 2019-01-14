const quickSort = nums => {

    if(nums.length <= 1) { return nums }

    let pivotPos = Math.floor((nums.length -1)/2)
    let pivot = nums.splice(pivotPos, 1)[0]
    let right = nums.filter(value => (value >= pivot))
    let left = nums.filter(value => (value < pivot))

    return quickSort(left).concat(pivot, quickSort(right))

}

const testArr = []
const num = 100000
for(let i=0;i<num;i++){
    testArr.push(Math.floor(Math.random()*num))
}

console.time('qsTime')
quickSort(testArr)
console.timeEnd('qsTime')

console.time('sTime')
testArr.sort()
console.timeEnd('sTime')