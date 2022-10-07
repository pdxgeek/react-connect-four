import React from "react";
import { useAppContext } from "../context/AppContext";
import DropSquare from "./DropSquare";


const DropZone: React.FC = () => {
    const context = useAppContext();
    const appState = context.appState;

    return (
        <div className='m-2'>
            <div className='flex gap-2'> {
                Array.from({ length: appState.columnCount },
                    (_, i) => <DropSquare key={ "ds" + i } index={ i }/>)
            }
            </div>
        </div>
    );
}

export default DropZone;