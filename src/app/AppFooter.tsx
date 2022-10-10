import { Footer } from "flowbite-react";
import React from "react";

const AppFooter: React.FC = () => {
    return (
        <div className='fixed bottom-0 grow w-full bg-gray-800'>
            <Footer container={true}>
                <Footer.Copyright
                    href="#"
                    by="Gonzobeans.com"
                    year={2022}
                />
            </Footer>
        </div>

    )

}

export default AppFooter;