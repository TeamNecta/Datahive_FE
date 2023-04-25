import Select from '@/components/Select';
import React, { useEffect, useState } from 'react';

const visualize = () => {
    const [dataframe, setDataframe] = useState<any>(null);
    useEffect(() => {
        try {
            const _dataframe = JSON.parse(localStorage.getItem('dataframe') || '{}')
            setDataframe(_dataframe);
        } catch (error) {
            alert("Error loading dataframe");
        }
    }, []);
  return (
    <div>
        <h1>Visualize</h1>
        <form onSubmit={(e: any) => {
            
        }}>
            <Select data={dataframe.columns} text="X:" />
            <Select data={dataframe.columns} text="Y:" />
            <Select data={["box", "line", "pie"]} text="Type" />
            <button className='btn btn-primary'>Visualize</button>
        </form>
    </div>
  )
}

export default visualize