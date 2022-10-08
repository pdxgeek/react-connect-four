import Player from "./Player";
import { GamePiece } from "./GamePiece";
import { IAppState } from "../context/AppContext";
import WinDetection from "./WinDetection";

export interface IGameActions {
    dropPiece: (column: number, gamePiece: GamePiece) => boolean;
    currentPlayer: () => Player;
    toggleDebug: () => void;
    toggleSound: () => void;
}

const GameActions = (context: IAppState): IGameActions => {
    const appState = context.appState;
    const { checkWinFrom } = WinDetection(context.appState);

    const currentPlayer = (): Player => {
        return appState.players[(appState.turn - 1) % appState.players.length]
    }

    const isOutOfBounds = (columnIndex: number) => {
        return columnIndex < 0 || columnIndex >= appState.columnCount;
    }

    const setPiece = (rowIndex: number, columnIndex: number, gamePiece: GamePiece) => {
        console.log("placing [" + gamePiece + "] at " + rowIndex + "-" + columnIndex);
        appState.gameBoard[rowIndex][columnIndex] = gamePiece;
        context.setAppState({ ...appState, gameBoard: appState.gameBoard });
    }


    const gameOver = () => {
        context.setAppState({ ...appState, gameOver: true })
    }

    const advanceTurn = () => {
        context.setAppState({ ...appState, turn: appState.turn + 1 });
    }

    const toggleDebug = () => {
        context.setAppState({ ...appState, debug: !appState.debug })
    }

    const toggleSound = () => {
        context.setAppState({ ...appState, sound: !appState.sound })
    }

    const afterPlaced = (rowIndex: number, columnIndex: number) => {
        console.log("After-placed");
        if (checkWinFrom(rowIndex, columnIndex).win) {
            gameOver();
        }  else {
            advanceTurn();
        }
    }

    const dropPiece = (column: number, gamePiece: GamePiece) => {
        let placed = false;
        if (appState.gameOver) {
            console.log("Error. Game is over. " + column)
        } else if (isOutOfBounds(column)) {
            console.log("Error.  ColumnIndex is out of bounds: " + column)
        } else {
            for (let i = 0; i < appState.rowCount; i++) {
                const currentRow = appState.gameBoard[i]!;
                if (currentRow[column] === GamePiece.empty) {
                    setPiece(i, column, gamePiece)
                    placed = true;
                    afterPlaced(i, column)
                    break;
                }
            }
        }
        return placed;
    }

    return { toggleSound, toggleDebug, dropPiece, currentPlayer };
}

export default GameActions;