import React from "react";
import { useAppContext } from "../context/AppContext";
import gameActions from "../gamelogic/GameActions";
import RowLabel from "./RowLabel";

interface IDropSquareProps {
    index: number;
}

const DropSquare: React.FC<IDropSquareProps> = ({ index }) => {
    const context = useAppContext();
    const { appState } = context;
    const { dropPiece, currentPlayer } = gameActions(context);
    const click = new Audio("click-1.mp3");

    const doClickSound = () => {
        if (context.appState.sound) {
            click.play();
        }
    };

    return (
        <button className='group aspect-square grow m-[1px]'
             onClick={ () => {
                 if (dropPiece(index, currentPlayer().color)) {
                     doClickSound();
                 }
             }}>
            { !appState.gameOver
                ? <div className={ 'hidden group-hover:block h-full rounded-full ' + currentPlayer().color }/>
                : <div/>
            }
        </button>
    );
}

export default DropSquare;