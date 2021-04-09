import { assert } from 'chai'
import { cols, position, Ship } from '../src/model'

describe('Ship.positions', () => {
    it('should return positons a horizontally placed ship occupies', () => {
        const ship = new Ship(position(cols.B, 2), 4, 'h')

        assert.deepEqual(ship.positions, [
            position(cols.B, 2),
            position(cols.C, 2),
            position(cols.D, 2),
            position(cols.E, 2)
        ])
    })

    it('should return positons a vertically placed ship occupies', () => {
        const ship = new Ship(position(cols.D, 3), 3, 'v')

        assert.deepEqual(ship.positions, [
            position(cols.D, 3),
            position(cols.D, 4),
            position(cols.D, 5)
        ])
    })
})
