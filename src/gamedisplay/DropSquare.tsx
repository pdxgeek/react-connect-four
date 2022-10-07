import React from "react";
import { useAppContext } from "../contexts/AppContext";
import gameActions from "../gamelogic/GameActions";

interface IDropSquareProps {
    index: number;
}

const DropSquare: React.FC<IDropSquareProps> = ({ index }) => {
    const context = useAppContext();
    const { dropPiece, currentPlayer } = gameActions(context);

    return (
        <div className='group aspect-square grow m-[1px] p-[1%] '>
            <div className={ 'hidden group-hover:block h-full rounded-full ' + currentPlayer().color }
                 onClick={ () => {
                     dropPiece(index, currentPlayer().color);
                 } }/>
        </div>
    );
}

export default DropSquare;