import React from "react";
import DropZone from "../gamedisplay/DropZone";
import GameBoard from "../gamedisplay/GameBoard";
import WinModal from "../gamedisplay/WinModal";

const MainWindow: React.FC = () => {
    return (
        <div className='flex flex-row'>

            <div className='xs:w-0 lg:w-1/6 xl:w-3/12 '/>

            <div className='grow app-background-color'>
                <div className='p-5 m-20'>
                    <div className='pt-2'>
                        <DropZone key="dropzone"/>
                    </div>

                    <div className='pt-2'>
                        <GameBoard key="gameboard"/>
                        <WinModal/>
                    </div>
                </div>
            </div>

            <div className='xs:w-0 lg:w-1/6 xl:w-3/12'/>
        </div>

    );
}

export default MainWindow;