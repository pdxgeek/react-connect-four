import React from "react";
import Banner from "./Banner";
import DropZone from "../gamedisplay/DropZone";
import GameBoard from "../gamedisplay/GameBoard";

const MainWindow: React.FC = () => {
    return (
        <div className='flex flex-col h-full grow app-background-color'>
            <div className='flex gap-2'>
                <div className='basis-[28%] shrink'/>
                <div className='basis-[44%] p-5'>

                    <Banner key="banner"
                            heading='Connect&nbsp;4'
                            subHeading='Another Stupid React Implementation'
                    />

                    <div className='pt-8'>
                        <DropZone key="dropzone"/>
                    </div>
                    <div className='pt-2'>
                        <GameBoard key="gameboard"/>
                    </div>
                </div>
                <div className='basis-[28%] shrink'/>
            </div>
        </div>
    );
}

export default MainWindow;