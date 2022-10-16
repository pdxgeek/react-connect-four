import React, { createContext } from "react";
import { AppDefaultState, IAppStateProps } from "./AppDefaultState";

export interface IAppState {
    appState: IAppStateProps
    setAppState: React.Dispatch<React.SetStateAction<IAppStateProps>>;
}

export interface IContextProvider {
    children: React.ReactNode;
}

const AppContext = createContext<IAppState>({
    appState: AppDefaultState,
    setAppState: (): void => {
    }
});

export const useAppContext = () => {
    return React.useContext(AppContext);
};

const AppContextProvider: React.FC<IContextProvider> = ({ children }) => {
    const [appState, setAppState] = React.useState<IAppStateProps>({ ...AppDefaultState });

    const appContextValue = React.useMemo(
        () => ({ appState, setAppState }),
        [appState, setAppState]
    );

    return appContextValue ? (
        <>
            <AppContext.Provider value={ appContextValue }>
                { children }
            </AppContext.Provider>
        </>
    ) : null;
};

export default AppContextProvider;
