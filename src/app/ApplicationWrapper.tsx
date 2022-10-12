import React from "react";
import MainWindow from "./MainWindow";
import TopNav from "./TopNav";
import AppFooter from "./AppFooter";
import DeepThoughtsModal from "../deepthoughts/DeepThoughtsModal";

const ApplicationWrapper: React.FC = () => {
    return (
        <div className='app-background-color'>
            <div className='flex flex-col h-full app-background-color'>
                <div className='fixed top-0 w-full'>
                    <TopNav key="topNav" />
                </div>
                <div>
                    <MainWindow/>
                    <DeepThoughtsModal />
                </div>

                <AppFooter />
            </div>
        </div>
    )
}
export default ApplicationWrapper;