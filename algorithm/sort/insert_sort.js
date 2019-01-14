/**
 * 
 * @param {Array} nums 
 */
function insertionSort(nums){

    for(let i=0; i<nums.length; i++){

        let temp = nums[i]
        let j
        for(j=i;j>0 && nums[j-1]<= temp; j--){
            nums[j] = nums[j-1]
        }
        nums[j] = temp
    }

    return nums
}

const testArr = []
const num = 100
for(let i=0;i<num;i++){
    // testArr.push(Math.floor(Math.random()*num))
    testArr.push(i)
}

console.log(insertionSort(testArr));
// console.time('isTime')
// insertionSort(testArr)
// console.timeEnd('isTime')

// console.time('sTime')
// testArr.sort()
// console.timeEnd('sTime')