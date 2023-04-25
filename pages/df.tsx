import DataTable from '@/components/DataTable';
import React, { useEffect, useState } from 'react';
import Select from '@/components/Select';

const df = () => {
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
        <div className='p-4 bg-gradient-to-r from-teal-900 to-emerald-800'>
            <h1 className='text-6xl'>
                Data
            </h1>
            {dataframe ? (<>
                <DataTable dataframe={dataframe} />
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
                    <h1>Replace missing values</h1>
                    <div className='flex gap-4'>
                        <Select data={dataframe.columns} text="Select Column" />
                        <Select data={["mean", "freq", "deleteRow"]} text="Select Method" />
                    </div>
                    <button className='btn btn-primary'>Replace</button>
                </form>
            </>

            ) : <div>Loading</div>}
        </div>
    )
}

export default df