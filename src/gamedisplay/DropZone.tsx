import React from "react";
import { GamePiece } from "../gamelogic/GamePiece";
import { useAppContext } from "../contexts/AppContext";
import gameActions from "../gamelogic/GameActions";

interface IDropZoneProps {
    columnCount: number
    gamePiece: GamePiece
}

interface IDropSquareProps {
    index: number;
    gamePiece: GamePiece;
}

const DropZone: React.FC<IDropZoneProps> = ({columnCount, gamePiece}) => {
    return (
        <div className='m-2'>
            <div className='flex gap-2'>
                {
                    Array.from({length: columnCount},
                        (_, i) => <DropSquare key={"ds" + i} index={i} gamePiece={gamePiece}/>
                    )
                }
            </div>
        </div>
    );
}

const DropSquare: React.FC<IDropSquareProps> = ({index, gamePiece}) => {
    const context = useAppContext();
    const { dropPiece } = gameActions(context);

    return (
        <div className='group aspect-square grow m-[1px] p-[1%] '>
            <div className={'hidden group-hover:block h-full rounded-full ' + gamePiece}
            onClick={() => {
                dropPiece(index, gamePiece);
            }}/>
        </div>
    );
}

export default DropZone;