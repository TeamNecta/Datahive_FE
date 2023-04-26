//  Select component with tailwindcss and daisyui for nextjs app to receive user input to select values

import React from 'react';

interface SelectProps {
    data: any;
    text: string;
}

const Select: React.FC<SelectProps> = ({ data, text }) => {
    return (
        <div className="overflow-x-auto">
            <select className="select select-bordered w-full text-lg min-w-fit" defaultValue={text}>
                <option disabled>
                    {text}
                </option>
                {data.map((row: any, i: number) => (
                    <option key={i}>{row}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
