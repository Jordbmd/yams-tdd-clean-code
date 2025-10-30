export const RULES = [
    {
        figure: 'Yams',
        check: (values) => values.includes(5),
        score: 50
    },
    {
        figure: 'Grande suite',
        check: (values, sorted) => sorted === '12345' || sorted === '23456',
        score: 40
    },
    {
        figure: 'Carré',
        check: (values) => values.includes(4),
        score: 35
    },
    {
        figure: 'Full',
        check: (values) => values.includes(3) && values.includes(2),
        score: 30
    },
    {
        figure: 'Brelan',
        check: (values) => values.includes(3),
        score: 28
    },
    {
        figure: 'Chance',
        check: () => true,
        score: null
    }
]

