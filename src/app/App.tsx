import React from 'react';
import AppContextProvider from "../context/AppContextProvider";
import ApplicationWrapper from "./ApplicationWrapper";

const App: React.FC = () => {
    return (
        <div className='flex flex-col h-screen app-background-color'>
            <AppContextProvider>
                <ApplicationWrapper />
            </AppContextProvider>
        </div>
    );
}

export default App;
