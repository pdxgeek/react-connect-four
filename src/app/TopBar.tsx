import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import GameActions from "../gamelogic/GameActions";


const TopBar: React.FC = () => {
    const { appState } = useAppContext();
    const { currentPlayer, toggleDebug, toggleSound } = GameActions();

    return (
        <div className='w-full static bottom-0'>

            <div className='flex flex-row bg-neutral-500 gap-5'>
                <div>
                    <span className='app-standard-text'>CurrentPlayer: </span>
                    <span>{ currentPlayer().name }</span>
                </div>
                <div>
                    <span className='app-standard-text'>GameOver: </span>
                    <span>{ appState.gameOver ? "true" : "false" }</span>
                </div>
            </div>
        </div>
    )
};

export default TopBar;