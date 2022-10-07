import React from "react";
import { useAppContext } from "../context/AppContext";
import gameActions from "../gamelogic/GameActions";

interface IDropSquareProps {
    index: number;
}

const DropSquare: React.FC<IDropSquareProps> = ({ index }) => {
    const context = useAppContext();
    const { dropPiece, currentPlayer } = gameActions(context);
    const audio = new Audio("click-1.mp3");

    const doClickSound = () => {
        if (context.appState.sound) {
            audio.play();
        }
    };

    return (
        <button className='group aspect-square grow m-[1px] p-[1%]'
             onClick={ () => { doClickSound(); dropPiece(index, currentPlayer().color); } }>
            <div className={ 'hidden group-hover:block h-full rounded-full ' + currentPlayer().color }/>
        </button>
    );
}

export default DropSquare;