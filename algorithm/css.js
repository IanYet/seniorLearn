// CSS color compression
// CSS colors can be defined in the hexadecimal notation "#rgb", a shorthand for "#rrggbb". For example, "#03f" is equivalent to "#0033ff". Suppose the similarity between two colors "#abcdef" and "#ghijkl" is defined as (-(ab-gh)^2 - (cd-ij)^2 - (ef-kl)^2), write a function that accepts a color in the "#abcdef" format and returns a "#rgb" color that is most similar to the input. For example, given "#09f166", "#1e6" should be returned.

function simColor(color) {
    const oriColors = [color.slice(1, 3), color.slice(3, 5), color.slice(5)]
    const stdColors = oriColors.map(value => Number.parseInt(value, 16))

    const colorMap = {}
    const simpleColors = []
    ;[
        '00',
        '11',
        '22',
        '33',
        '44',
        '55',
        '66',
        '77',
        '88',
        '99',
        'aa',
        'bb',
        'cc',
        'dd',
        'ee',
        'ff',
    ].forEach(value => {
        colorMap[Number.parseInt(value, 16)] = value.slice(1)
        simpleColors.push(Number.parseInt(value, 16))
    })

    const resColors = findSim(stdColors, simpleColors)
    return `#${resColors
        .map(color => colorMap[color])
        .join('')}`
}

function findSim(colors, simpleColors) {
    let min = [256, 256, 256]
    let res = [0, 0, 0]

    simpleColors.forEach(simpleColor => {
        colors.forEach((color, index) => {
            if (Math.abs(color - simpleColor) < min[index]) {
                min[index] = Math.abs(color - simpleColor)
                res[index] = simpleColor
            }
        })
    })

    return res
}

console.log(simColor('#fffffe'))
