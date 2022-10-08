import React from "react";
import TopBar from "./TopBar";
import MainWindow from "./MainWindow";
import Banner from "./Banner";

const ApplicationWrapper: React.FC = () => {
    return (
        <div className='app-background-color'>
            <div className='h-screen'>
                <Banner key="banner" heading='Connect&nbsp;4' subHeading='Another Stupid React Implementation' />
                <TopBar key="appinfobar"/>
                <MainWindow/>
            </div>
        </div>
    )
}
export default ApplicationWrapper;