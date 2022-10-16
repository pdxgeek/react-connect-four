import React from "react";
import RowLabel from "./RowLabel";
import { useAppContext } from "../context/AppContextProvider";
import { GamePiece } from "../gamelogic/GamePiece";

interface IRowSpaceProps {
    rowIndex: number;
    columnIndex: number;
}

const RowSpace: React.FC<IRowSpaceProps> = ({ rowIndex, columnIndex }) => {
    const { appState } = useAppContext()
    const gamePiece = appState.gameBoard[rowIndex][columnIndex];
    const content = rowIndex + "-" + columnIndex;

    const image = (gamePiece === GamePiece.empty)
        ? ''
        : '/images/' + gamePiece + '.png';

    return (
        <div className='aspect-square m-[1px] p-[1%] grow bg-amber-300 rounded-md w-20'>
            <div className={ 'relative h-full rounded-full ' + gamePiece }>
                <img alt='' className='object-fit' src={ image }/>
                <div className='absolute top-0 left-0 flex w-full place-content-center'>
                    { appState.debug ? <RowLabel key={ "rl-" + content } value={ content }/> : <div/> }
                </div>
            </div>
        </div>
    )
}

export default RowSpace;