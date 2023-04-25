//  Select component with tailwindcss and daisyui for nextjs app to receive user input to select values

import React from 'react';

interface SelectProps {
    data: any;
}

const Select: React.FC<SelectProps> = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                    Select an option
                </option>
                {data.map((row: any, i: number) => (
                    <option key={i}>{row}</option>
                ))}
            </select>
        </div>
    );
};