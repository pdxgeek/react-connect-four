import React from "react";
import RowLabel from "./RowLabel";
import { useAppContext } from "../context/AppContextProvider";

interface IRowSpaceProps {
    rowIndex: number;
    columnIndex: number;
}

const RowSpace: React.FC<IRowSpaceProps> = ({ rowIndex, columnIndex }) => {
    const { appState } = useAppContext()
    const gamePiece = appState.gameBoard[rowIndex][columnIndex];
    const content = rowIndex + "-" + columnIndex;

    return (
        <div className='aspect-square m-[1px] p-[1%] grow bg-amber-300 rounded-md'>
            <div className={ 'h-full rounded-full ' + gamePiece }>
                <div className='flex place-content-center'>
                    { appState.debug ? <RowLabel key={ "rl-" + content } value={ content }/> : <div/> }
                </div>
            </div>
        </div>
    )
}

export default RowSpace;