import Player from "./Player";
import _ from "lodash";
import { GamePiece } from "./GamePiece";
import { IAppState } from "../contexts/AppContext";

export interface IGameActions {
    dropPiece: (column: number, gamePiece: GamePiece) => void;
    currentPlayer: () => Player;
}

const GameActions = (context: IAppState): IGameActions => {
    const appState = context.appState;

    const currentPlayer = (): Player => {
        return appState.players[(appState.turn - 1) % appState.players.length]
    }

    const isOutOfBounds = (columnIndex: number) => {
        return columnIndex < 0 || columnIndex >= appState.columnCount;
    }

    const setPiece = (rowIndex: number, columnIndex: number, gamePiece: GamePiece) => {
        console.log("placing [" + gamePiece + "] at " + rowIndex + "-" + columnIndex);
        appState.gameBoard[rowIndex][columnIndex] = gamePiece;
        context.setAppState({...appState, gameBoard: appState.gameBoard});
    }

    const advanceTurn = () => {
        context.setAppState({...appState, turn: appState.turn + 1})
    }

    const dropPiece = (column: number, gamePiece: GamePiece) => {
        let placed = false;
        if (isOutOfBounds(column)) {
            console.log("Error.  ColumnIndex is out of bounds: " + column)
        } else {
            for(let i = 0; i < appState.rowCount; i++) {
                const currentRow = appState.gameBoard[i]!;
                if (currentRow[column] === GamePiece.empty) {
                    setPiece(i, column, gamePiece)
                    placed = true;
                    break;
                }
            }
        }
        if (placed) {
            advanceTurn();
        }
    }

    return { dropPiece, currentPlayer };
}

export default GameActions;