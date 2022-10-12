import React from "react";
import { Button, Modal } from "flowbite-react";
import GameActions from "../gamelogic/GameActions";
import { useModalContext } from "../context/ModalContextProvider";
import { getRandomString } from "../util/AppUtil";
import gameActions from "../gamelogic/GameActions";

const WinModal: React.FC = () => {
    const gameActions = GameActions()
    const { modalState, setModalState } = useModalContext();

    const closeModal = () => {
        setModalState({...modalState, winModal:false});
    }

    const winModalText = [
        `Oh wow it looks like ${gameActions.currentPlayer().name} has won this one.`,
        `${gameActions.currentPlayer().name} made this game look easy.`,
        `If you could get a job dropping checkers into lanes... ${gameActions.currentPlayer().name} would be rich!`,
        `${gameActions.currentPlayer().name} is really good at Connect-4 ... I guess your PC is too slow for Call of Duty?`,
        `${gameActions.currentPlayer().name} won... but then again ${gameActions.currentPlayer().name} cheated.`
    ]

    const winButtonText = [
        "Oh Snap!",
        "That's UnFOURtunate",
        "Ok",
        "The stars aligned",
        "Well... crap",
        "Ok",
        "This game is rigged!",
        "I'm just getting started",
        "Ok",
        "Ok",
        "Revenge!"
    ]

    return (
        <Modal key='WinModal' show={modalState.winModal} onClose={() => closeModal()}>
            <Modal.Body>
                <div>
                    <div className='pb-5'>
                        <div className='text-3xl font-semibold text-blue-300'>{ gameActions.currentPlayer().name + " wins!"}</div>
                    </div>
                    <div className="space-y-6 ">
                    <span className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        { getRandomString(winModalText) }
                    </span>
                    </div>

                    <div className='flex grow w-full place-content-end'>
                        <Button onClick={() => { closeModal() }}>
                            { getRandomString(winButtonText) }
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default WinModal;