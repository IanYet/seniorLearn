function selectSort(nums) {

    for(let i=0; i<nums.length; i++){
        let minPos = i
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] <= nums[minPos]){
                minPos = j;
            }
        }

        [nums[i], nums[minPos]] = [nums[minPos], nums[i]]
    }

    return nums
}

const testArr = []
const num = 100000
for(let i=0;i<num;i++){
    testArr.push(Math.floor(Math.random()*num))
    // testArr.push(i)
}

// console.log(insertionSort(testArr));
console.time('ssTime')
selectSort(testArr)
console.timeEnd('ssTime')

// console.time('sTime')
// testArr.sort()
// console.timeEnd('sTime')