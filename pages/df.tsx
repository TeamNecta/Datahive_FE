import DataTable from '@/components/DataTable';
import React, { useEffect, useState } from 'react';
import Select from '@/components/Select';
import DF_Nav from '@/components/DF_Nav';

const DF = () => {
    const [dataframe, setDataframe] = useState<any>(null)
    useEffect(() => {
        try {
            const _dataframe = JSON.parse(localStorage.getItem('dataframe') || '{}')
            setDataframe(_dataframe)
        } catch (error) {
            alert("Error loading dataframe");
        }
    }, []);
    return (
        <div className='h-full min-h-screen p-4 bg-gradient-to-r from-teal-900 to-emerald-800'>
            <DF_Nav />
            {dataframe ? (<>
                <form className='px-4 my-2 space-y-2' onSubmit={(e: any) => {
                    e.preventDefault();
                    const column = e.target[0].value;
                    const method = e.target[1].value;
                    const formData = new FormData();
                    formData.append('replace_column', column);
                    formData.append('replace_method', method);
                    formData.append('action', 'replace_missing');
                    formData.append('data', JSON.stringify(dataframe.data));
                    
                    fetch('/api/advance_cleaning', {
                        method: 'POST',
                        body: formData
                    }).then((res) => res.json()).then((data) => {
                        if (data.data) {
                            localStorage.setItem('dataframe', JSON.stringify(data));
                            setDataframe(data);
                        } else {
                            alert("Error replacing missing values");
                        }
                    }).catch((err) => {
                        alert("Error replacing missing values");
                    });
                    
                }}>
                        <h1 className='text-6xl'>
                            Data
                        </h1>
                    <div className="flex flex-row gap-4">
                        <h1>Replace missing values</h1>
                        <div className='flex flex-row gap-4'>
                            <div className='flex gap-4'>
                                <Select data={dataframe.columns} text="Select Column" />
                                <Select data={["mean", "freq", "deleteRow"]} text="Select Method" />
                            </div>
                            <button className='btn btn-accent'>Replace</button>
                        </div>
                    </div>
                </form>
                    <DataTable dataframe={dataframe} />
            </>

            ) : <div>Loading</div>}
        </div>
    )
}

export default DF