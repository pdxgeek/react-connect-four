import { GamePiece } from "../gamelogic/GamePiece";
import Player from "../gamelogic/Player";
import uuid from "react-uuid";

const _rows = 6;
const _columns = 7;
const _players = [
    new Player("Player One", GamePiece.red),
    new Player("Player Two", GamePiece.black),
    // new Player("player3", GamePiece.yellow),
    // new Player("player4", GamePiece.blue),
];

export interface IAppStateProps {
    rowCount: number;
    columnCount: number;
    players: Player[];
    winningPlayer: Player | undefined;
    winTarget: number;
    turn: number;
    gameOver: boolean;
    gameId: string;
    sound: boolean;
    debug: boolean;
    gameBoard: GamePiece[][];
}

export const AppDefaultState: IAppStateProps = {
    rowCount: _rows,
    columnCount: _columns,
    players: _players,
    winningPlayer: undefined,
    gameId: uuid(),
    winTarget: 4,
    turn: 1,
    gameOver: false,
    sound: true,
    debug: false,
    gameBoard: Array.from({ length: _rows }, () =>
        Array.from({ length: _columns }, () => GamePiece.empty)),
}



