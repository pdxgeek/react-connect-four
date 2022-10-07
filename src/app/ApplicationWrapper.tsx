import React from "react";
import TopBar from "./TopBar";
import MainWindow from "./MainWindow";

const ApplicationWrapper: React.FC = () => {
    return (
        <div>
            <TopBar key="appinfobar"/>
            <MainWindow/>
        </div>
    )
}
export default ApplicationWrapper;