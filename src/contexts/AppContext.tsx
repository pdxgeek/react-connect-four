import React, { createContext } from "react";
import { AppDefaultState, IAppStateProps } from "./AppDefaultState";

export interface IAppState {
    appState: IAppStateProps
    setAppState: React.Dispatch<React.SetStateAction<IAppStateProps>>;
}

export interface IAppContextProvider {
    children: React.ReactNode;
}

export const AppContext = createContext<IAppState>({
    appState: AppDefaultState,
    setAppState: (): void => {}
});

export const useAppContext = () => {
    return React.useContext(AppContext);
};