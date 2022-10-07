import React from "react";

interface IRowLabelProps {
    value: string
}

const RowLabel: React.FC<IRowLabelProps> = ({ value }) => {
    return (
        <div>
            <span className='text-white text-center justify-center'>{ value }</span>
        </div>
    );
}

export default RowLabel