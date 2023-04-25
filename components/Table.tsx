// Table component for nextjs app with tailwindcss and daisyui to display data from dataframe in a table

import React from 'react';

interface TableProps {
    data: any;
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        {data.columns.map((column: any) => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: any, i: number) => (
                        <tr key={i}>
                            {data.columns.map((column: any) => (
                                <td key={column}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};