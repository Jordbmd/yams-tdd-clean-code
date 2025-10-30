export function check(dices) {
    const counts = {}
    dices.forEach(dice => {
        counts[dice] = (counts[dice] || 0) + 1
    })

    const values = Object.values(counts)

    // trie pour la grande suite
    const sorted = [...dices].sort((a, b) => a - b)

    // grande suite 1-2-3-4-5 ou 2-3-4-5-6
    const isSuite12345 = sorted.join('') === '12345'
    const isSuite23456 = sorted.join('') === '23456'
    if (isSuite12345 || isSuite23456) {
        return { figure: 'Grande suite', points: 40 }
    }

    // 5x donc yams
    if (values.includes(5)) {
        return { figure: 'Yams', points: 50 }
    }

    // 4x donc carre
    if (values.includes(4)) {
        const total = dices.reduce((sum, val) => sum + val, 0)
        return { figure: 'Carré', points: total }
    }

    // 3x + 2x donc full
    if (values.includes(3) && values.includes(2)) {
        return { figure: 'Full', points: 30 }
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
