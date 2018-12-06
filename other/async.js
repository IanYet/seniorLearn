const addBlock = (i) => new Promise((resolve, reject) => {
    setTimeout(()=>resolve(++i), 1000)
})

async function add (loopNum) {
    let init = 0
    let i = init

    console.log('before block!');
    console.log('block start:');

    for(let n=0;n<loopNum;n++){
        i = await addBlock(i)
        console.log(`log: ${i}`)
    }
    
    console.log('block end!');
    console.log('after block!');
}

add(60)