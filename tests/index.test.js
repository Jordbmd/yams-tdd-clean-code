import { describe, it, expect } from 'vitest'
import { check } from '../src'

describe('Analyse des figures', () => {
    it('Détecter un Brelan (3x)', () => {
        const result = check([3, 3, 3, 2, 5])
        expect(result.figure).toBe('Brelan')
        expect(result.points).toBeGreaterThan(0)
    })

    it('Détecter un Carré (4x)', () => {
        const result = check([4, 4, 4, 4, 2])
        expect(result.figure).toBe('Carré')
        expect(result.points).toBeGreaterThan(0)
    })

    it('Détecter un Yams (5x)', () => {
        const result = check([6, 6, 6, 6, 6])
        expect(result.figure).toBe('Yams')
        expect(result.points).toBe(50)
    })

    it('Retourner Chance', () => {
        const result = check([1, 2, 3, 4, 6])
        expect(result.figure).toBe('Chance')
        expect(result.points).toBe(16)
    })

    it('Détecter un Full (3x + 2x)', () => {
        const result = check([3, 3, 3, 2, 2])
        expect(result.figure).toBe('Full')
        expect(result.points).toBe(30)
    })

    it('Détecter une Grande suite (1-2-3-4-5)', () => {
        const result = check([1, 2, 3, 4, 5])
        expect(result.figure).toBe('Grande suite')
        expect(result.points).toBe(40)
    })

    it('Détecter une Grande suite (2-3-4-5-6)', () => {
        const result = check([2, 3, 4, 5, 6])
        expect(result.figure).toBe('Grande suite')
        expect(result.points).toBe(40)
    })
})
