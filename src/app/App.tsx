import React from 'react';
import AppContextProvider from "../context/AppContextProvider";
import ApplicationWrapper from "./ApplicationWrapper";
import ModalContextProvider from "../context/ModalContextProvider";

const App: React.FC = () => {
    return (
        <div className='flex flex-col h-screen app-background-color'>
            <AppContextProvider>
                <ModalContextProvider>
                    <ApplicationWrapper />
                </ModalContextProvider>
            </AppContextProvider>
        </div>
    );
}

export default App;
