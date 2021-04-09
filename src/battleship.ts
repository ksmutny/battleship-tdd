import { BattleField, cols, position, Ship } from './model'
import { drawBattleField, drawBattleFieldHeader } from './ui'


const bf = new BattleField(10, 10, [
    new Ship(position(cols.B, 2), 5, 'v'),
    new Ship(position(cols.D, 4), 4, 'h')
])

console.log(drawBattleFieldHeader(bf.cols))
drawBattleField(bf).forEach(line => console.log(line))
