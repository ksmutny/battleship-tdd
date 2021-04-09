import { rangeUpTo } from "./func"

export interface Position {
    readonly col: number
    readonly row: number
}

export const position = (col: number, row: number): Position => ({ col, row })

export const cols = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10
}

export type Direction = 'v' | 'h'

export class Ship {
    constructor(
        readonly root: Position,
        readonly length: number,
        readonly direction: Direction
    ) {}

    get positions(): ReadonlyArray<Position> {
        const horizontal = this.direction === 'h'
        return rangeUpTo(this.length).map(i =>
            horizontal
                ? position(this.root.col + i, this.root.row)
                : position(this.root.col, this.root.row + i)
        )
    }
}

export class BattleField {
    constructor(
        readonly cols: number,
        readonly rows: number,
        readonly ships: ReadonlyArray<Ship>
    ) {}
}
