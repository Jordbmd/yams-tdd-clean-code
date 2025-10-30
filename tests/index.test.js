import { describe, it, expect } from 'vitest'
import { analyzeThrow } from '../src/game.js'

describe('Analyse des figures', () => {
    it('Détecter un Brelan (3x)', () => {
        const result = analyzeThrow([3, 3, 3, 2, 5])
        expect(result.figure).toBe('Brelan')
        expect(result.points).toBeGreaterThan(0)
    })

    it('Détecter un Carré (4x)', () => {
        const result = analyzeThrow([4, 4, 4, 4, 2])
        expect(result.figure).toBe('Carré')
        expect(result.points).toBeGreaterThan(0)
    })

    it('Détecter un Yams (5x)', () => {
        const result = analyzeThrow([6, 6, 6, 6, 6])
        expect(result.figure).toBe('Yams')
        expect(result.points).toBe(50)
    })

    it('Retourner Chance', () => {
        const result = analyzeThrow([1, 2, 3, 4, 6])
        expect(result.figure).toBe('Chance')
        expect(result.points).toBe(16)
    })
})
