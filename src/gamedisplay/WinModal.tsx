import React from "react";
import { Button, Modal } from "flowbite-react";
import GameActions from "../gamelogic/GameActions";
import { useModalContext } from "../context/ModalContextProvider";

const WinModal: React.FC = () => {
    const gameActions = GameActions()
    const { modalState, setModalState } = useModalContext();

    const closeModal = () => {
        setModalState({...modalState, winModal:false});
    }

    return (
        <Modal key='WinModal' show={modalState.winModal} onClose={() => closeModal()}>
            <Modal.Header>
                { gameActions.currentPlayer().name + " wins!"}
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <span className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {`Oh wow it looks like ${gameActions.currentPlayer().name} has won this one.`}
                    </span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                    <Button onClick={() => { closeModal() }}>
                        Ok
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default WinModal;