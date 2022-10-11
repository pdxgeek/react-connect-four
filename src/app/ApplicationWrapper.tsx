import React from "react";
import TopBar from "./TopBar";
import MainWindow from "./MainWindow";
import TopNav from "./TopNav";
import AppFooter from "./AppFooter";

const ApplicationWrapper: React.FC = () => {
    return (
        <div className='app-background-color'>
            <div className='flex flex-col h-full app-background-color'>
                <div className='fixed top-0 w-full'>
                    <TopNav key="topNav" />
                    <TopBar key="appinfobar"/>
                </div>
                <div>
                    <MainWindow/>
                </div>

                <AppFooter />
            </div>
        </div>
    )
}
export default ApplicationWrapper;