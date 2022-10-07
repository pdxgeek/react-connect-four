import React, { useMemo, useState } from 'react';
import { AppDefaultState } from "../context/AppDefaultState";
import { AppContext } from "../context/AppContext";
import ApplicationWrapper from "./ApplicationWrapper";

const App: React.FC = () => {
    const [appState, setAppState] = useState({ ...AppDefaultState });
    const appContextValue = useMemo(
        () => ({ appState, setAppState }),
        [appState, setAppState]
    );

    return (
        <div className='flex flex-col h-screen app-background-color'>
            <AppContext.Provider value={ appContextValue }>
                <ApplicationWrapper/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
