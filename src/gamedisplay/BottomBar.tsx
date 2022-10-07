import React from "react";
import { useAppContext } from "../contexts/AppContext";
import app from "../app/App";
import GameActions from "../gamelogic/GameActions";
// import { useGameContext } from "../contexts/GameActionContext";

const BottomBar: React.FC = () => {
    const { appState } = useAppContext();
    const { currentPlayer } = GameActions(useAppContext());

    return (
        <div className='flex flex-row bg-neutral-500 gap-5' onClick={() => {}}>
            <div>
                <span className='app-standard-text'>GameId: </span><span>{appState.gameId}</span>
            </div>
            <div>
                <span className='app-standard-text'>CurrentPlayer: </span>
                <span>{ currentPlayer().name}</span>
            </div>
            <div>
                <span className='app-standard-text'>Turn: </span>
                <span>{ appState.turn}</span>
            </div>
            <div>
                <span className='app-standard-text'>Debug: </span>
                <span>{appState.debug ? "true" : "false"}</span>
            </div>
        </div>
    )
};

export default BottomBar;