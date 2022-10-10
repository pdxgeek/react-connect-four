import React from "react";
import TopBar from "./TopBar";
import MainWindow from "./MainWindow";
import Banner from "./Banner";
import AppFooter from "./AppFooter";

const ApplicationWrapper: React.FC = () => {
    return (
        <div className='app-background-color'>
            <div className='flex flex-col h-full app-background-color'>
                <div className='fixed top-0 w-full'>
                    <Banner key="banner" heading='Connect&nbsp;4' subHeading='Another Stupid React Implementation' />
                    <TopBar key="appinfobar"/>
                </div>

                <MainWindow/>
                <AppFooter />
            </div>
        </div>
    )
}
export default ApplicationWrapper;