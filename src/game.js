export function analyzeThrow(dices) {
    const counts = {}
    dices.forEach(dice => {
        counts[dice] = (counts[dice] || 0) + 1
    })

    const values = Object.values(counts)

    // 5x donc yams
    if (values.includes(5)) {
        return { figure: 'Yams', points: 50 }
    }

    // 4x donc carre
    if (values.includes(4)) {
        const total = dices.reduce((sum, val) => sum + val, 0)
        return { figure: 'Carré', points: total }
    }

    // 3x donc brelan
    if (values.includes(3)) {
        const total = dices.reduce((sum, val) => sum + val, 0)
        return { figure: 'Brelan', points: total }
    }

    // sinon chance
    const total = dices.reduce((sum, val) => sum + val, 0)
    return { figure: 'Chance', points: total }
}
