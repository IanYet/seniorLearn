const addPromise = (i) => new Promise((res, rej) => {
    setTimeout(() => {
        console.log(`log: ${i}`)
        res(++i)
    }, 1000)
})

const addAsyncLoop = (loopNum) => {
    let promise = addPromise(0)

    for(let i=0; i<loopNum; i++){
        promise = promise.then((i) => addPromise(i))
    }

    return promise
}

addAsyncLoop(10).then(() => {
    console.log('after block');
})