import { Footer } from "flowbite-react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import GameActions from "../gamelogic/GameActions";

const AppFooter: React.FC = () => {
    const { currentPlayer } = GameActions();

    return (
        <div className='fixed bottom-0 grow w-full bg-gray-800'>
            <Footer container={true}>
                <div className='flex flex-row grow w-full gap-10'>
                    <Footer.Copyright
                        href="#"
                        by="Gonzobeans.com"
                        year={2022}
                    />

                </div>
                <div className='text-base text-sm place-content-end text-gray-400 whitespace-nowrap pr-5'>
                    <span className='font-semibold'>CurrentPlayer: </span>
                    <span>{ currentPlayer().name }</span>
                </div>
                <DebugFooter />
            </Footer>
        </div>

    )

}

const DebugFooter: React.FC = () => {
    const { appState } = useAppContext();
    if (!appState.debug) { return <div/>}
    return (
        <>
            <div className='text-base text-sm place-content-end text-gray-400 whitespace-nowrap pr-5'>
                <span className='font-semibold'>GameOver: </span>
                <span>{ appState.gameOver ? "true" : "false" }</span>
            </div>
            <div className='text-base text-sm place-content-end text-gray-400 whitespace-nowrap pr-5'>
                <span className='font-semibold'>Turn:</span> <span>{ appState.turn }</span>
            </div>
            <div className='text-base text-sm place-content-end text-gray-400 whitespace-nowrap'>
                <span className='font-semibold'>GameId:</span> <span>{ appState.gameId }</span>
            </div>
        </>
    )
}

export default AppFooter;