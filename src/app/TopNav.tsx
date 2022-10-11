import { Navbar } from "flowbite-react";
import React from "react";
import logo from '../assets/logo192.png'
import bugWhite from "../assets/bug-white.png"
import bugBlue from "../assets/bug-blue.png"
import soundOn from "../assets/sound-on.png"
import soundOff from "../assets/sound-off.png"
import { useAppContext } from "../context/AppContextProvider";
import GameActions from "../gamelogic/GameActions";

const TopNav: React.FC = () => {
    const { appState } = useAppContext();
    const { toggleDebug, toggleSound } = GameActions();

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="#">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="1" />
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="2" />
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="3" />
                <img src={logo} className="mr-3 h-6 pr-3 sm:h-9" alt="4" />

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    React Connect Four
                </span>
            </Navbar.Brand>
            <div className='flex flex-row gap-5'><img src={appState.debug ? bugBlue : bugWhite} className="h-6" alt="1" onClick={() => toggleDebug()}/>
            <img src={appState.sound ? soundOn : soundOff} className="h-6" alt="1" onClick={() => toggleSound()}/></div>
        </Navbar>

    )
}

export default TopNav;