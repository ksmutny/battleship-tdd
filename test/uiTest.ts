import { assert } from 'chai'
import { BattleField, cols, position, Ship } from '../src/model'
import { drawBattleField, drawBattleFieldHeader } from '../src/ui'


describe('drawBattleField', () => {
    it('should draw water on an empty battle field', () => {
        const bf = new BattleField(4, 5, [])

        assert.deepEqual(drawBattleField(bf), [
            '. . . .',
            '. . . .',
            '. . . .',
            '. . . .',
            '. . . .'
        ])
    })

    it('should draw ships on the battle field', () => {
        const ship = new Ship(position(cols.C, 2), 2, 'v')
        const bf = new BattleField(4, 5, [ship])

        assert.deepEqual(drawBattleField(bf), [
        //   A B C D
            '. . . .',
            '. . X .',
            '. . X .',
            '. . . .',
            '. . . .'
        ])
    })
})

describe('drawBattleFieldHeader', () =>{
    it('should draw the right column headers', () => {
        const shortHeader = drawBattleFieldHeader(3)
        assert.equal(shortHeader, 'A B C')

        const longHeader = drawBattleFieldHeader(6)
        assert.equal(longHeader, 'A B C D E F')
    })
})
