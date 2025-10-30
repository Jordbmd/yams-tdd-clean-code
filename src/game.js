export function analyzeThrow(dice) {

    // YAMS
    if (values.includes(5)) {
    }

    // Carré
    if (values.includes(4)) {
    }

    // Brelan
    if (values.includes(3)) {
        return { figure: RULES.BRELAN.name, points: RULES.BRELAN.points }
    }

    // Chance
    const total = dice.reduce((sum, val) => sum + val, 0)
    return {
    }
}
