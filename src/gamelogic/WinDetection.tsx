import { GamePiece } from "./GamePiece";
import { IAppStateProps } from "../context/AppDefaultState";

export interface IWinDetection {
    checkWinFrom: (rowIndex: number, columnIndex: number) => IWinStatus;
}

export interface IWinStatus {
    win: boolean
    pieces?: ICoordinates[]
}

export interface ICoordinates {
    r: number;
    c: number;
}

type CheckFunction = (r: number, c: number, counter: number) => { positive: ICoordinates, negative: ICoordinates };

const WinDetection = (appState: IAppStateProps) => {
    const { gameBoard } = appState;

    const isOutOfBounds = (rowIndex: number, columnIndex: number) => {
        return rowIndex < 0
            || rowIndex > appState.rowCount
            || columnIndex < 0
            || columnIndex >= appState.columnCount;
    }

    const checkWinFrom = (rowIndex: number, columnIndex: number) => {
        const piece: GamePiece = gameBoard[rowIndex][columnIndex];
        if (piece === GamePiece.empty) {
            console.log("Error: Attempting to check for win on an empty space.")
        }

        console.log("before checkwins")
        const checks: IWinStatus[] = [
            check(upDown, rowIndex, columnIndex, piece),
            check(leftRight, rowIndex, columnIndex, piece),
            check(diagonalUp, rowIndex, columnIndex, piece),
            check(diagonalDown, rowIndex, columnIndex, piece)
        ]
        console.log("after checkwins")

        for (const condition of checks) {
            if (condition.win) {
                return condition;
            }
        }
        return { win: false, pieces: [] }
    }

    const upDown: CheckFunction = (rowIndex: number, columnIndex: number, counter: number) => {
        const positive = { r: (rowIndex + counter), c: columnIndex }
        const negative = { r: (rowIndex - counter), c: columnIndex }
        return { positive, negative }
    }

    const leftRight: CheckFunction = (rowIndex: number, columnIndex: number, counter: number) => {
        const positive = { r: rowIndex, c: (columnIndex + counter) }
        const negative = { r: rowIndex, c: (columnIndex - counter) }
        return { positive, negative }
    }

    const diagonalUp: CheckFunction = (rowIndex: number, columnIndex: number, counter: number) => {
        const positive = { r: (rowIndex + counter), c: (columnIndex + counter) }
        const negative = { r: (rowIndex - counter), c: (columnIndex - counter) }
        return { positive, negative }
    }

    const diagonalDown: CheckFunction = (rowIndex: number, columnIndex: number, counter: number) => {
        const positive = { r: (rowIndex - counter), c: (columnIndex + counter) }
        const negative = { r: (rowIndex + counter), c: (columnIndex - counter) }
        return { positive, negative }
    }

    const check = (checker: CheckFunction, rowIndex: number, columnIndex: number, color: GamePiece) => {
        let { positive, negative, counter } = { positive: true, negative: true, counter: 1 }
        const pieces: ICoordinates[] = [{ r: rowIndex, c: columnIndex }]
        while((positive || negative) && counter < 20) {
            counter++;
            const nextCoordinates = checker(rowIndex, columnIndex, counter);
            console.log("checking [" + nextCoordinates.positive.c + " | " + nextCoordinates.positive.r + "]");
            if (positive) {
                if (checkPiece(nextCoordinates.positive, color)) {
                    pieces.push(nextCoordinates.positive)
                } else {
                    positive = false;
                }
            }
            console.log("checking [" + nextCoordinates.negative.c + " | " + nextCoordinates.negative.r + "]");
            if (negative) {
                if (checkPiece(nextCoordinates.negative, color)) {
                    pieces.push(nextCoordinates.negative)
                } else {
                    negative = false;
                }
            }
        }
        return { win: (pieces.length >= appState.winTarget - 1), pieces }
    }

    const checkPiece = (location: ICoordinates, color: GamePiece) => {
        return !isOutOfBounds(location.r, location.c) && gameBoard[location.r][location.c] === color;
    }

    return { checkWinFrom };
}

export default WinDetection;