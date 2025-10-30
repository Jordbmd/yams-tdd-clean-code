import { describe, it, expect } from 'vitest'
import { analyzeThrow, calculateScore } from '../src'

describe('Yams - analyzeThrow', () => {
    describe('Yams', () => {
        it('detecte un Yams (5x)', () => {
            const result = analyzeThrow([6, 6, 6, 6, 6])
            expect(result.figure).toBe('Yams')
            expect(result.points).toBe(50)
        })
    })

    describe('Grande suite', () => {
        it('detecte une grande suite 1-2-3-4-5', () => {
            const result = analyzeThrow([1, 2, 3, 4, 5])
            expect(result.figure).toBe('Grande suite')
            expect(result.points).toBe(40)
        })

        it('detecte une grande suite 2-3-4-5-6', () => {
            const result = analyzeThrow([2, 3, 4, 5, 6])
            expect(result.figure).toBe('Grande suite')
            expect(result.points).toBe(40)
        })
    })

    describe('Carré', () => {
        it('detecte un Carré (4x)', () => {
            const result = analyzeThrow([4, 4, 4, 4, 2])
            expect(result.figure).toBe('Carré')
            expect(result.points).toBe(35)
        })
    })

    describe('Full', () => {
        it('detecte un Full (3x + 2x)', () => {
            const result = analyzeThrow([3, 3, 3, 2, 2])
            expect(result.figure).toBe('Full')
            expect(result.points).toBe(30)
        })
    })

    describe('Brelan', () => {
        it('detecte un Brelan (3x)', () => {
            const result = analyzeThrow([3, 3, 3, 2, 5])
            expect(result.figure).toBe('Brelan')
            expect(result.points).toBe(28)
        })
    })

    describe('Chance', () => {
        it('retourne Chance si aucune figure', () => {
            const result = analyzeThrow([1, 2, 3, 4, 6])
            expect(result.figure).toBe('Chance')
            expect(result.points).toBe(16)
        })
    })
})

describe('Yams - calculateScore', () => {
    it('calcule le score total de plusieurs lancers', () => {
        const throws = [
            [6, 6, 6, 6, 6],
            [3, 3, 3, 2, 2],
            [1, 2, 3, 4, 5]
        ]
        const total = calculateScore(throws)
        expect(total).toBe(120)
    })

    it('calcule le score avec un seul lancer', () => {
        const throws = [
            [4, 4, 4, 4, 2]
        ]
        const total = calculateScore(throws)
        expect(total).toBe(35)
    })

    it('calcule le score avec des lancers variés', () => {
        const throws = [
            [3, 3, 3, 2, 5],
            [1, 2, 3, 4, 6],
            [6, 6, 6, 6, 6]
        ]
        const total = calculateScore(throws)
        expect(total).toBe(94)
    })
})
