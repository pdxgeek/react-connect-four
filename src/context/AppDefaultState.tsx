import { GamePiece } from "../gamelogic/GamePiece";
import Player from "../gamelogic/Player";
import uuid from "react-uuid";

const _rows = 6;
const _columns = 7;
const _players = [
    new Player("player1", GamePiece.yellow),
    new Player("player2", GamePiece.blue),
    // new Player("player3", GamePiece.green),
];

export interface IAppStateProps {
    rowCount: number;
    columnCount: number;
    players: Player[];
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
    gameId: uuid(),
    winTarget: 4,
    turn: 1,
    gameOver: false,
    sound: true,
    debug: false,
    gameBoard: Array.from({ length: _rows }, () =>
        Array.from({ length: _columns }, () => GamePiece.empty)),
}



