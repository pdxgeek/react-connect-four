import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import GameActions from "../gamelogic/GameActions";
import click from "../assets/click.mp3"

interface IDropSquareProps {
    index: number;
}

const DropSquare: React.FC<IDropSquareProps> = ({ index }) => {
    const context = useAppContext();
    const { appState } = context;
    const { dropPiece, currentPlayer } = GameActions();
    const clickSound = new Audio(click);

    const doClickSound = () => {
        if (context.appState.sound) {
            clickSound.play();
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