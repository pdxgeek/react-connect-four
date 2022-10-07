import React from "react";

import GameRow from "./GameRow";
import { useAppContext } from "../contexts/AppContext";

const GameBoard: React.FC = () => {
    const { appState } = useAppContext();
    return (
            <div className='flex flex-col-reverse bg-amber-500 p-[1%] rounded-xl'>
                {Array.from({length: appState.rowCount}, (_, i) =>
                    <GameRow key={"gr" + i} index={i}/>)}
            </div>
    )
}

export default GameBoard;