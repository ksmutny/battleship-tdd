import { incBy1, rangeUpTo } from './func'
import { BattleField } from './model'

export const drawBattleField = (bf: BattleField): ReadonlyArray<string> =>
    incBy1(rangeUpTo(bf.rows)).map(row =>
        incBy1(rangeUpTo(bf.cols)).reduce((acc, col) => {

            const isShip = bf.ships.some(ship => ship.positions.some(pos => pos.col === col && pos.row === row))

            return acc + (acc ? ' ' : '') + (isShip ? 'X' : '.')
        }, '')
    )

export const drawBattleFieldHeader = (cols: number): string =>
    rangeUpTo(cols).reduce((acc, i) => acc + (acc ? ' ' : '') + String.fromCharCode(65 + i), '')
