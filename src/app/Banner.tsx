import React from "react";

interface IBanner {
    heading: string;
    subHeading: string;
}

const Banner: React.FC<IBanner> = ({ heading, subHeading }) => {
    return (
        <div className="flex object-fill">
            <div className="p-4 text-4xl font-bold bg-gray-400">{ heading }</div>
            <div className="p-6 bg-gray-700 grow app-standard-text text-gray-400">{ subHeading }</div>
        </div>
    )
}

export default Banner;