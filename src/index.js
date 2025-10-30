import { RULES } from './rules.js'

export function analyzeThrow(dices) {
    const counts = {}
    dices.forEach(dice => {
        counts[dice] = (counts[dice] || 0) + 1
    })

    const values = Object.values(counts)
    const sorted = [...dices].sort((a, b) => a - b).join('')
    const total = dices.reduce((sum, val) => sum + val, 0)

    const rule = RULES.find(r => r.check(values, sorted))
    const points = rule.score !== null ? rule.score : total

    return { figure: rule.figure, points }
}

export function calculateScore(throws) {
    let total = 0

    throws.forEach(throwDices => {
        const result = analyzeThrow(throwDices)
        total = total + result.points
    })

    return total
}

const lancers = [
    [6, 6, 6, 6, 6],
    [3, 3, 3, 2, 2],
    [1, 2, 3, 4, 5],
    [4, 4, 4, 4, 2],
    [3, 3, 3, 2, 5],
    [1, 2, 3, 4, 6]
]

lancers.forEach((lancer, index) => {
    const result = analyzeThrow(lancer)
    console.log(`Lancé ${index + 1}: [${lancer}] -> ${result.figure} (${result.points} points)`)
})

console.log(`\nScore total: ${calculateScore(lancers)} points`)
