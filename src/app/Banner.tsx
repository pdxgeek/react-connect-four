import React from "react";

interface IBanner {
    heading: string;
    subHeading: string;
}

const Banner: React.FC<IBanner> = ({ heading, subHeading }) => {
    return (
        <div className="flex object-fill">
            <div className="p-4 text-4xl font-bold bg-orange-600 rounded-l-xl">{ heading }</div>
            <div className="p-6 bg-slate-400 grow app-standard-text rounded-r-xl">{ subHeading }</div>
        </div>
    )
}

export default Banner;