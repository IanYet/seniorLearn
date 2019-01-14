/**
 * 
 * @param {Array} nums 
 */
function buddleSort(nums){
    if(nums <=1 ){
        return nums
    }

    let isSwap = false
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] >= nums[i+1]){
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
            isSwap = true
        }
    }

    if(!isSwap){
        return nums
    }
    let lastNum = nums.pop()
    return buddleSort(nums).concat(lastNum)
}

const testArr = []
const num = 10000
for(let i=0;i<num;i++){
    testArr.push(Math.floor(Math.random()*num))
    // testArr.push(i)
}

console.time('buddle sort')
buddleSort(testArr)
console.timeEnd('buddle sort')