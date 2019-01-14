function shellSort(nums){
    const len = nums.length

    for(let gap=Math.floor(len/1.9); gap>0; gap = Math.floor(gap/1.9)){
        for(let i=gap; i<len; i++){
            for(let j=i-gap; j>=0&&nums[j]>= nums[j+gap] ;j -=gap){
                [nums[j], nums[j+gap]] = [nums[j+gap], nums[j]]
            }
        }
    }
}

const testArr = []
const num = 100000
for(let i=0;i<num;i++){
    testArr.push(Math.floor(Math.random()*num))
}

console.time('ssTime')
shellSort(testArr)
console.timeEnd('ssTime')

console.time('sTime')
testArr.sort()
console.timeEnd('sTime')