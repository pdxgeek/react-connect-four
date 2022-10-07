import React from "react";
import { useAppContext } from "../contexts/AppContext";
import GameActions from "../gamelogic/GameActions";


const TopBar: React.FC = () => {
    const { appState } = useAppContext();
    const { currentPlayer, toggleDebug } = GameActions(useAppContext());

    return (
        <div className='w-full static bottom-0'>

            <div className='flex flex-row bg-neutral-500 gap-5' onClick={ () => {
            } }>
                <div>
                    <span className='app-standard-text'>GameId: </span><span>{ appState.gameId }</span>
                </div>
                <div>
                    <span className='app-standard-text'>CurrentPlayer: </span>
                    <span>{ currentPlayer().name }</span>
                </div>
                <div>
                    <span className='app-standard-text'>Turn: </span>
                    <span>{ appState.turn }</span>
                </div>
                <div>
                    <span className='app-standard-text' onClick={ () => toggleDebug() }>Debug: </span>
                    <span>{ appState.debug ? "true" : "false" }</span>
                </div>
            </div>
        </div>
    )
};

export default TopBar;