import { Footer } from "flowbite-react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const AppFooter: React.FC = () => {
    const { appState } = useAppContext();

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
                    <span className='font-semibold'>Turn:</span> <span>{appState.turn}</span>
                </div>
                <div className='text-base text-sm place-content-end text-gray-400 whitespace-nowrap'>
                    <span className='font-semibold'>GameId:</span> <span>{appState.gameId}</span>
                </div>
            </Footer>
        </div>

    )

}

export default AppFooter;