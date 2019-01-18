function minCoin(amount, coins) {
    console.log(amount, coins);

    if(amount === 0){
        return 0
    }
    if (coins.length === 1) {
        return amount / coins[0]
    }

    const coin = coins.pop()

    if (amount - coin < 0) {
        if(coins.length){
            return minCoin(amount, coins)
        }

        return 0
    }

    // console.log(amount, coins)

    return Math.min(
        minCoin(amount, [...coins]),
        // 10,
        minCoin(amount - coin, [...coins, coin]) + 1
        // 10
    )
}

console.log(minCoin(10, [1, 2, 5]))
