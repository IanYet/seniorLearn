function minCoins(amount, coins) {
    coins.sort((a, b) => b - a)

    let currentAmount = amount
    const min = []

    while (currentAmount > 0) {
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= currentAmount) {
                currentAmount -= coins[i]
                min.push(coins[i])
                break
            }
        }
    }

    console.log(min)
    return min
}

minCoins(198, [1, 2, 5, 10, 20, 50, 100])
