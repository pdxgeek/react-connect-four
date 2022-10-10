import React, { createContext } from "react";
import { IContextProvider } from "./AppContextProvider";

export interface IModalStateProps {
    winModal: boolean
}

interface IModalState {
    modalState: IModalStateProps
    setModalState: React.Dispatch<React.SetStateAction<IModalStateProps>>;
}


const ModalContext = createContext<IModalState>({
    modalState: { winModal: false },
    setModalState: (): void => {}
});

export const useModalContext = () => {
    return React.useContext(ModalContext);
};

const ModalContextProvider: React.FC<IContextProvider> = ({ children }) => {
    const [modalState, setModalState] = React.useState<IModalStateProps>({ winModal: false });

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
