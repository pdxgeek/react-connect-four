import React from "react";
import RowSpace from "./RowSpace";
import { useAppContext } from "../contexts/AppContext";

interface IGameRowProps {
    index: number
}

const GameRow: React.FC<IGameRowProps> = ({ index }) => {
    const { appState } = useAppContext();

    return (
        <div className='flex bg-amber-500'> {
            Array.from({ length: appState.columnCount }, (_, i) =>
                <RowSpace key={"rs" + i} rowIndex={ index } columnIndex={ i }/>)
            }
        </div>
    )
}

export default GameRow;