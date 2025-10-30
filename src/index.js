export function check(dices) {
    const counts = {}
    dices.forEach(dice => {
        counts[dice] = (counts[dice] || 0) + 1
    })

    const values = Object.values(counts)
    const sorted = [...dices].sort((a, b) => a - b)
    const total = dices.reduce((sum, val) => sum + val, 0)

    const rules = [
        {
            // 5x donc yams
            name: 'Yams',
            check: () => values.includes(5),
            points: 50
        },
        {
            // grande suite 1-2-3-4-5 ou 2-3-4-5-6
            name: 'Grande suite',
            check: () => sorted.join('') === '12345' || sorted.join('') === '23456',
            points: 40
        },
        {
            // 4x donc carre
            name: 'Carré',
            check: () => values.includes(4),
            points: total
        },
        {
            // 3x + 2x donc full
            name: 'Full',
            check: () => values.includes(3) && values.includes(2),
            points: 30
        },
        {
            // 3x donc brelan
            name: 'Brelan',
            check: () => values.includes(3),
            points: total
        },
        {
            // sinon chance
            name: 'Chance',
            check: () => true,
            points: total
        }
    ]

    const result = rules.find(rule => rule.check())
    return { figure: result.name, points: result.points }
}
