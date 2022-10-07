import React from "react";
import Banner from "../gamedisplay/Banner";
import GameBoard from "../gamedisplay/GameBoard";
import BottomBar from "../gamedisplay/BottomBar";
import DropZone from "../gamedisplay/DropZone";
import { useAppContext } from "../contexts/AppContext";
import GameActions from "../gamelogic/GameActions";

const ApplicationWrapper: React.FC<any> = () => {
    const context = useAppContext();
    const appState = context.appState;
    const { currentPlayer } = GameActions(context)

    return (
        <div>
            <div className='h-full app-background-color'>
                <div className='flex gap-2'>
                    <div className='basis-[28%] shrink'/>
                    <div className='basis-[44%] p-5'>
                        <Banner key="banner" heading='Connect&nbsp;4'
                                subHeading='Another Stupid React Implementation'></Banner>
                        <div className='pt-8'>
                            <DropZone key="dropzone" columnCount={ appState.columnCount } gamePiece={ currentPlayer().color }/>
                        </div>
                        <div className='pt-2'>
                            <GameBoard key="gameboard"/>
                        </div>
                    </div>
                    <div className='basis-[28%] shrink'/>
                </div>
            </div>
            <BottomBar key="appinfobar"/>
        </div>
    )
}
export default ApplicationWrapper;