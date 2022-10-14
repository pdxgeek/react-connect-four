import { Navbar } from "flowbite-react";
import React from "react";
import bugWhite from "../../public/images/bug-white.png"
import bugBlue from "../../public/images/bug-blue.png"
import { useAppContext } from "../context/AppContextProvider";
import GameActions from "../gamelogic/GameActions";
import { useModalContext } from "../context/ModalContextProvider";

const TopNav: React.FC = () => {
    const { appState } = useAppContext();
    const { toggleDebug, toggleSound } = GameActions();
    const { modalState, setModalState } = useModalContext();

    const showDeepThoughtsModal = () => {
        setModalState({...modalState, deepThoughtsModal: true})
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="#">
                <img src='/images/logo192.png' className="mr-3 h-6 sm:h-9" alt="1" />
                <img src='/images/logo192.png' className="mr-3 h-6 sm:h-9" alt="2" />
                <img src='/images/logo192.png' className="mr-3 h-6 sm:h-9" alt="3" />
                <img src='/images/logo192.png' className="mr-3 h-6 pr-3 sm:h-9" alt="4" />

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    React Connect Four
                </span>
            </Navbar.Brand>
            <div className='flex flex-row gap-5'>
                <img src='/images/thought_icon.png' className='h-6' alt='deepThoughts' onClick={ () => showDeepThoughtsModal() }/>
                <img src={appState.debug ? '/images/bug-blue.png' : '/images/bug-white.png'} className="h-6" alt="debugToggle" onClick={() => toggleDebug()}/>
                <img src={appState.sound ? '/images/sound-on.png' : '/images/sound-off.png'} className="h-6" alt="soundToggle" onClick={() => toggleSound()}/>
            </div>
        </Navbar>

    )
}

export default TopNav;