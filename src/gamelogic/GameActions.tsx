import Player from "./Player";
import { GamePiece } from "./GamePiece";
import { useAppContext } from "../context/AppContextProvider";
import WinDetection from "./WinDetection";
import { useModalContext } from "../context/ModalContextProvider";

export interface IGameActions {
    dropPiece: (column: number, gamePiece: GamePiece) => boolean;
    currentPlayer: () => Player;
    toggleDebug: () => void;
    toggleSound: () => void;
}

const GameActions = (): IGameActions => {
    // const appState = context.appState;
    const { appState, setAppState } = useAppContext();
    const { checkWinFrom } = WinDetection(appState);
    const { modalState, setModalState } = useModalContext();
    const currentPlayer = (): Player => {
        return appState.players[(appState.turn - 1) % appState.players.length]
    }

    const setPiece = (rowIndex: number, columnIndex: number, gamePiece: GamePiece) => {
        console.log("placing " + gamePiece.substring(gamePiece.lastIndexOf("-") + 1) + " at " + rowIndex + "-" + columnIndex);
        appState.gameBoard[rowIndex][columnIndex] = gamePiece;
        setAppState({ ...appState, gameBoard: appState.gameBoard });
    }

    const gameOver = () => {
        setAppState({ ...appState, gameOver: true })
    }

    const advanceTurn = () => {
        setAppState({ ...appState, turn: appState.turn + 1 });
    }

    const toggleDebug = () => {
        setAppState({ ...appState, debug: !appState.debug })
    }

    const toggleSound = () => {
        setAppState({ ...appState, sound: !appState.sound })
    }

    const afterPlaced = (rowIndex: number, columnIndex: number) => {
        if (checkWinFrom(rowIndex, columnIndex).win) {
            gameOver();
            setModalState({ ...modalState, winModal: true })
        } else {
            advanceTurn();
        }
    }

    const dropPiece = (column: number, gamePiece: GamePiece) => {
        let placed = false;
        if (appState.gameOver) {
            console.log("Error. Game is over. " + column)
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