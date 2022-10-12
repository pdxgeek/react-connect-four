import React, { createContext } from "react";
import { IContextProvider } from "./AppContextProvider";

export interface IModalStateProps {
    winModal: boolean
    deepThoughtsModal: boolean
}

interface IModalState {
    modalState: IModalStateProps
    setModalState: React.Dispatch<React.SetStateAction<IModalStateProps>>;
}

const defaultModalState: IModalStateProps = {
    winModal: false,
    deepThoughtsModal: false
}

const ModalContext = createContext<IModalState>({
    modalState: defaultModalState,
    setModalState: (): void => {}
});

export const useModalContext = () => {
    return React.useContext(ModalContext);
};

const ModalContextProvider: React.FC<IContextProvider> = ({ children }) => {
    const [modalState, setModalState] = React.useState<IModalStateProps>(defaultModalState);
    const modalContextValue = { modalState, setModalState };

    return modalContextValue ? (
        <>
            <ModalContext.Provider value={modalContextValue}>
                {children}
            </ModalContext.Provider>
        </>
    ) : null;
};

export default ModalContextProvider;
