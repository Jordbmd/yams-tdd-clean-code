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
