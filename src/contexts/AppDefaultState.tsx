import React from "react";
import {GamePiece} from "../gamelogic/GamePiece";
import Player from "../gamelogic/Player";
import uuid from "react-uuid";
import GameActions, { IGameActions } from "../gamelogic/GameActions";

const _rows = 6;
const _columns = 7;
const _players = [
    new Player("player1", GamePiece.red),
    new Player("player2", GamePiece.black),
    // new Player("player3", GamePiece.green),
];

export interface IAppStateProps {
    rowCount: number;
    columnCount: number;
    players: Player[];
    turn: number;
    gameId: string;
    debug: boolean;
    gameBoard: GamePiece[][];
}

export const AppDefaultState: IAppStateProps = {
    rowCount: _rows,
    columnCount: _columns,
    players: _players,
    gameId: uuid(),
    turn: 1,
    debug: false,
    gameBoard: Array.from({length: _rows}, () =>
        Array.from({length: _columns}, () => GamePiece.empty)),
}

//     const advanceTurn = () => {
//         setTurn(turn + 1)
//     }
//
//     const currentPlayer = () => {
//         return players[(turn - 1) % players.length]
//     }
//
//     const setPiece = (rowIndex: number, columnIndex: number, gamePiece: GamePiece) => {
//         let boardCopy = gameBoard;
//         boardCopy[rowIndex][columnIndex] = gamePiece;
//         setGameBoard(boardCopy);
//     }
//
//     return null;
// }


