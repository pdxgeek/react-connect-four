import { Button, Modal } from "flowbite-react";
import React from "react";
import JackHandyCard from "./JackHandyCard";
import { useModalContext } from "../context/ModalContextProvider";

const DeepThoughtsModal: React.FC = () => {
    const { modalState, setModalState } = useModalContext();

    const closeModal = () => {
        setModalState({ ...modalState, deepThoughtsModal: false });
    }

    return (
        <Modal key='WinModal' show={ modalState.deepThoughtsModal } onClose={ () => closeModal() }>
            <Modal.Body>
                <div className='flex flex-col grow w-full'>
                    <div className='pb-5 place-self-center'>
                        <JackHandyCard/>
                    </div>

                    <div className='flex grow w-full place-content-end'>
                        <Button onClick={ () => {
                            closeModal()
                        } }>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeepThoughtsModal;